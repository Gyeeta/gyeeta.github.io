---
id: architecture
title: Architecture
description: Gyeeta Architecture and Components
keywords:
  - architecture
  - components
---

# Gyeeta Architecture

*Gyeeta* is a Linux based Monitoring product. It utilizes [eBPF](https://ebpf.io/) to monitor individual Linux hosts.

*Gyeeta* is a completely free, open source (GPLv3) product and not a SaaS product. This implies that there is a need for more initial
setup steps compared to a normal SaaS product where only the Agent needs to be installed on monitored hosts. In return,
users get a lightweight, highly optimized (`C++` based) monitoring product for free with complete control of all 
monitored data and no external data transfers.

## Components in Gyeeta

*Gyeeta* consists of the following components :

- Host Monitor Agent (named [`partha`](#host-monitor-agent-partha)) to be installed on each of the monitored hosts

- A Central Server (named [`shyama`](#central-server-shyama)) which is both a Global Aggregator and Alert Manager

- One or more Intermediate Servers (named [`madhava`](#intermediate-server-madhava)) handling monitoring statistics from
the multiple monitored hosts

- A [Webserver](#webserver) which interacts with the `shyama` and `madhava` servers 

- An [Alert Action Agent](#alert-action-agent) which interacts with `shyama` and executes the Alert Trigger Actions

- One or more [Postgres DBs](#postgres-database) to be used as the datastore for `shyama` and `madhava` servers

### Highly Scalable

*Gyeeta* supports monitoring of tens of thousands of hosts using a single `shyama` instance and multiple `madhava` 
instances. 

The Host Agent `partha` can monitor hosts with heavy loads such as hosts with hundreds of connections/sec, hundreds of
processes/sec, or tens of thousands of queries/sec, all with under 10% single core CPU utilzation.

This is due to a highly optimized code base using `C++` and use of non-blocking techniques.

## Host Monitor Agent (*partha*) {#host-monitor-agent-partha}

The Gyeeta Host Monitor Agent (named `partha`) is a lightweight priviliged process using eBPF to monitor the activities on a host.
It needs to be installed on every **Linux** host that is to be monitored and preferably started at init (startup) so that all process
activity can be monitored.

**Features :**

- Monitors Host and Processes Resource usage 
- Monitors all Services and gathers statistics such as Queries/sec, Response Time (Latency), HTTP Errors (for HTTP services)
- Monitors all Network Flows within host and across hosts as well and correlates them with `madhava`
- Auto detects any anomalies and flags any degradation in Host, Service or Process performance including CPU, Memory or IO Contention
- Monitors all queries. Does not use sampling.
- Interacts with a single Intermediate Server (`madhava`) assigned to it and sends all monitor statistics over TCP
- No local disk storage is needed as all data is sent to the Intermediate server
- Very lightweight and uses ***max*** *10% of one CPU core (p99 4% of one core)* and ***max*** *250 MB RSS Memory*

*Learn more from links below* :

[**Host Agent Installation and Host Requirements**](./installation/partha_install.md)  
[**Host Agent Configuration**](./installation/partha_config.md)

## Central Server (*shyama*) {#central-server-shyama}

The `shyama` Central Server is the only component which interacts with all other components. A single `shyama` instance is needed to be
installed on any Linux host with minimal CPU and RAM requirements. The `shyama` instance needs to have Network Connectivity with all
monitored hosts and all `madhava` instances.

**Features :**

- Assigns appropriate [`madhava`](#intermediate-server-madhava) intermediate servers to individual hosts (`partha`) based on Network adjacency and availability.
- Acts as the Alert Manager and co-ordinates Alert Trigger Actions with the [Alert Agent](#alert-action-agent)
- Coordinates with the one or more `madhava` to resolve Network Flow Dependencies
- Tracks Cluster wide Service and other Statistics
- Uses [Postgres DB](#postgres-database) as the datastore to store Cluster and Global level statistics including Alerts
- Communicates with the Monitored Hosts `partha` instances only at the `partha` startup while assigning `madhava` instances to each `partha`. This limits 
inter-region network communication if the `shyama` instance is in a separate region from `partha` host
- Communicates with the [Webserver](#webserver) for query responses
- Optional Redundancy in Active Passive modes with one active and one or more passive `shyama` instances

## Intermediate Server (*madhava*) {#intermediate-server-madhava}

The `madhava` Intermediate Server interacts with `partha`, `shyama` and the webserver. The number of `madhava` instances to be installed
depends on the number of monitored hosts and Network Connectivity (adjacency) requirements.

**Features :**

- Single `madhava` instance can handle upto 1000 Hosts (`partha`) interaction and monitoring
- Coordinates with `shyama` and other `madhava` instances to resolve Network Flow Dependencies
- Uses [Postgres DB](#postgres-database) as the datastore to store the data pertaining to the monitored hosts
- Communicates with the [Webserver](#webserver) for query responses
- Optional Redundancy in Active Passive modes with one active and one or more passive `madhava` instances

## Postgres Database {#postgres-database}

[PostgreSQL](https://www.postgresql.org/) is used as the datastore for `shyama` and `madhava` servers. Upto 5 `madhava` servers can share the same Postgres 
instance as the datastore. As the number of madhava instances increase the requirement for additional Postgres instances will
arise.

It is recommended to use a Postgres DB in the same Network Region/Zone as the `madhava` or `shyama` instance for better performance and lower costs.

## Webserver

The webserver authenticates user queries and then forwards them to the `shyama` and `madhava` servers. A single instance of Webserver is needed
to be installed on a host with Network Connectivity to `shyama` and all `madhava` instances.

**Features :**

- Accumulates query responses from multiple `madhava` servers for Global or Cluster Level queries
- Supports a minimal but powerful WebUI on default HTTP with optional HTTPS support
- A comprehensive REST API based framework is exposed both for API Querying and CRUD operations such as creating Alerts
- Currently the WebUI and REST API queries are authenticated using a fixed User Password Basic Authentication. SSO (Single Sign-on)
based Authentication and Authorization using OIDC / OAuth2 is planned for a later release
- Maintains persistent connections with the `shyama` and all the `madhava` servers
- Multiple Webserver instances can be started for redundancy purposes

## Alert Action Agent {#alert-action-agent}

The Alert Action Agent is involved in firing the Alert Actions (Notifications) as per the configured Alert rules. A single instance of the Alert agent is needed
to be installed on a host with Network Connectivity to `shyama`. If the Alert Action needs Network connectivity to an external service such as Slack,
the Alert Action Host must have external Network Connectivity as well.

**Features :**

- Currently *Gyeeta* supports Email, Slack, PagerDuty, Webhooks as the Alert Action (Notification)
- Maintains persistent connections with the `shyama` server (`shyama` also acts as the Alert Manager)
- Multiple Alert Action Agents can be started for redundancy purposes

