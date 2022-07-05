---
id: queryoverview
title: Networking & Subsystems
description: Network Architecture & Subsystems for Querying
---

# Network Architecture & Subsystems for Querying

Gyeeta can be queried either using its Web UI or using REST APIs. The Web UI internally uses the REST APIs exposed to query the data.
Query Request Data and Responses are in JSON format.

## Query Network Architecture

The Gyeeta architecture has two components which are responsible for the Query Resultsets : `madhava` Intermediate Servers and 
`shyama` Central Server.  Both these components either respond to the query from their in-memory data structures or using the 
Postgres DB they are connected to.

On receiving a REST API query (either directly or from the Web UI), the Gyeeta Webserver will determine whether the query is intended
for one or all `madhava` servers or for the `shyama` server. This is decided by the type of query. Thereafter, the Webserver will
forward the query to the respective component. 

If the query spans multiple `madhava` servers, the Webserver will send the queries in parallel and accumulate the resultsets returned
and present a single resultset to the user.

## Query History Period

By default, Gyeeta will store 3 days of historical data. This time period is configurable by specifying the *postgres_storage_days* option
within each `madhava` and `shyama` configuration. 

## Query Subsystems

All Gyeeta queries are limited to a single Subsystem in a single REST API call. A subsystem can be thought of as a Database Table.

The following table lists the main query subsystems :

| Subsystem | Descriptive Name | Response Component | Updated every | Aggregation Supported | Notes |
| :-----: | :-----: | :-----: | :-----: | :-----: | :----- |
| extsvcstate | Extended Service State | madhava | 5 sec | Yes | Provides Service statistics such as State, QPS, Response Time, Service Info |
| svcstate | Service State | madhava | 5 sec | Yes | Same as extsvcstate, but no Service Info fields (faster querying) |
| svcsumm | Service Summary | madhava | 5 sec | Yes | Provides Host Level 5 sec Service summaries such as Total Services, QPS, etc. |
| svcinfo | Service Info | madhava | 5 min | Yes | Provides Service Info such as Listener IP/Port, Command Line, Start Time |
| extprocstate | Extended Process State | madhava | 5 sec to 15 sec | Yes | Provides Process statistics such as State, CPU, Memory, Delays |
| procstate | Process State | madhava | 5 sec to 15 sec | Yes | Same as extprocstate, but no Process Info fields (faster querying) |
| procinfo | Process Info | madhava | 5 min | Yes | Provides Process Info such as Command Line, Tags, Start Time |
| clusterstate | Cluster State | shyama | 5 sec | Yes | Provides Cluster statistics such as State, Count of Service Issues |
| extactiveconn | Extended Service Inbound Network | madhava | 15 sec | Yes | Provides Network Flows for Service Inbound Connections |
| activeconn | Service Inbound Network | madhava | 15 sec | Yes | Same as extactiveconn, but no Service Info fields (faster querying) | 
| extclientconn | Extended Client Outbound Network | madhava | 15 sec | Yes | Provides Network Flows for Process Outbound Connections |
| clientconn | Extended Client Outbound Network | madhava | 15 sec | Yes | Same as extclientconn, but no Process Info fields (faster querying) |
| hoststate | Host State | madhava | 5 sec | Yes | Provides Host Level statistics such as State, Count of Service Issues |
| cpumem | Host CPU Memory | madhava | 4 sec | Yes | Provides Host CPU/Memory statistics such as CPU %, RSSCount of Service Issues |
| hostinfo | Host Info | madhava | event | Yes | Provides Host Info such as Kernel, CPU Count, Boot Time |
| svcprocmap | Service to Process Map | madhava | 5 min | No | Provides Mapping between a Service and its Process IDs |
| svcmeshclust | Interconnected Service Group | shyama | 5 min | No | Provides the list of Interconnected Service Groups |
| svcipclust | Virtual IP Service Group | shyama | 6 min | No | Provides the list of Virtual IP Service Groups |
| alerts | Alerts | shyama | event | Yes | Provides Alerts and Summary Statistics |
| alertdef | Alert Definitions | shyama | event | No | Provides Alert Definitions |
| actions | Alert Actions | shyama | event | No | Provides Alert Action (Notification) Definitions |
| silences | Alert Silences | shyama | event | No | Provides Alert Silence Definitions |
| inhibits | Alert Inhibits | shyama | event | No | Provides Alert Inhibit Definitions |
| shyamastatus | Shyama Status | shyama | event | No | Provides Shyama Server Status Info |
| madhavastatus | Madhava Status | madhava | event | No | Provides Madhava Servers Status Info |

The extsvcstate and svcstate subsystems differ in that the extsvcstate adds a few svcinfo (Service Info) subsystem fields to svcstate.
The extprocstate and procstate subsystems differ in that extprocstate adds a few procinfo (Process Info) subsystem fields to procstate.

