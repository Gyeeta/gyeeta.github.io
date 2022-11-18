---
title: Gyeeta Failover Handling
description: Gyeeta Server Components Failover Redundancy
keywords:
  - failover
  - redundancy
---

# Gyeeta Server Components Failover / Redundancy

Gyeeta supports Failover Handling (High Availability) for its Server components :

- Shyama Central Server (Active-Passive mode)

- Madhava Intermediate Servers (Active-Passive mode)

- Node Webservers (Active-Active mode)

- Alert Action Agent (Active-Active mode)

For Postgres DB Failover, we recommend using a Shared Disk Failover as by default, Replication is disabled.

:::info

This section can be ignored for Kubernetes based Gyeeta Installs.

:::

It is recommended that the failover installs be done on a separate host as compared to the Active installation
for better Redundancy.

## Shyama Server Redundancy {#shyama-redundancy}

Shyama Server Redundancy is provided by sharing the Postgres DB amongst the Active-Passive Shyama instances.

For this, all the Active-Passive Shyama instances will need to have some of the Config Options shared across all instances.
Namely, the following Config fields need to be same across the Active-Passive Shyama instances :

- `shyama_name` json field or `CFG_SHYAMA_NAME` env
- `shyama_secret` json field or `CFG_SHYAMA_SECRET` env
- `min_madhava` json field or `CFG_MIN_MADHAVA` env
- `postgres_hostname` json field or `CFG_POSTGRES_HOSTNAME` env
- `postgres_port` json field or `CFG_POSTGRES_PORT` env
- `postgres_user` json field or `CFG_POSTGRES_USER` env
- `postgres_password` json field or `CFG_POSTGRES_PASSWORD` env


The Passive Shyama instances will monitor the Active Shyama status and on detecting a Failure condition,
one of the Passive Shyama instances will then take over as the next Active Instance.

The Failover can take upto 3 minutes time duration.


## Madhava Server Redundancy {#madhava-redundancy}

Madhava Server Redundancy is provided by sharing the Postgres DB amongst the Active-Passive Madhava instances.

For this, all the Active-Passive Madhava instances will need to have some of the Config Options shared across all instances.
Namely, the following Config fields need to be same across the Active-Passive Madhava instances :

- `shyama_hosts` json field or `CFG_SHYAMA_HOSTS` env
- `shyama_ports` json field or `CFG_SHYAMA_PORTS` env
- `shyama_secret` json field or `CFG_SHYAMA_SECRET` env
- `madhava_name` json field or `CFG_MADHAVA_NAME` env
- `postgres_hostname` json field or `CFG_POSTGRES_HOSTNAME` env
- `postgres_port` json field or `CFG_POSTGRES_PORT` env
- `postgres_user` json field or `CFG_POSTGRES_USER` env
- `postgres_password` json field or `CFG_POSTGRES_PASSWORD` env


The Passive Madhava instances will monitor the Active Madhava status and on detecting a Failure condition,
one of the Passive Madhava instances will then take over as the next Active Instance.

The Failover can take upto 3 minutes time duration.


## Node Webserver Redundancy {#nodewebserver-redundancy}

Node Webserver Redundancy can be provided by installing multiple instances of the Webserver in an Active-Active mode.

For this, all the Active-Active Webserver instances will need to have some of the Config Options shared across all instances.

- `CFG_SHYAMA_HOSTS`
- `CFG_SHYAMA_PORTS`
- `CFG_ADMINPASSWORD`
- `CFG_USERPASSFILE`
- `CFG_TOKENEXPIRY`
- `CFG_JWTSECRET`
- `CFG_USEHTTP`
- `CFG_TLSCERTFILE`
- `CFG_TLSKEYFILE`
- `CFG_TLSPASSPHRASE`

As the Webserver instances are running in Active-Active mode, users can connect to any of the Webserver instances to
access the Web UI or use for REST APIs.


## Alert Agent Redundancy {#alertaction-redundancy}

Alert Agent Redundancy can be provided by installing multiple instances of the Alert Agent in an Active-Active mode.

For this, all the Active-Active Webserver instances will need to have some of the Config Options shared across all instances.

- `CFG_SHYAMA_HOSTS`
- `CFG_SHYAMA_PORTS`

As the Alert Agent instances are running in Active-Active mode, the Shyama server will assign any of the Alert Agents the
Notification responsibilities.



