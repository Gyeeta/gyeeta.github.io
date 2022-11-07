---
title: PostgresDB Installation
description: Gyeeta PostgresDB Installation
---

# Gyeeta PostgresDB Installation

Gyeeta Shyama and Madhava servers use PostgresDB as a data store. Depending on the number of Madhava instances,
one or more Postgres DB instances may be needed.

:::info

Please ignore PostgresDB Install instructions in case of Kubernetes Helm based installs as for Helm charts, the PostgresDB
container is installed as a sidecar automatically.

:::

## Shyama Postgres Disk Space Requirement {#shyama-dbspace}

The PostgresDB instance to be used by Shyama will need about 10 GB of disk space for a typical environment.

## Madhava Postgres Disk Space Requirement {#madhava-dbspace}

Maximum 3 instances of Madhava can share a since PostgresDB instance.

The PostgresDB instance to be used by each Madhava will need about 0.5 GB /per day of free disk space for each monitored host.

As an example, lets say there are 200 hosts to be monitored in total and maximum 3 days of statistics history is needed. 

This implies that an average of 200 x 0.5 x 3 = 300 GB of free disk space is needed for these 200 hosts.


## CPU and Memory Requirements for PostgresDB {#db-cpu-mem}

Shyama PostgresDB instances will need minimal CPU and Memory requirements :

> Max 10% of 1 core CPU and upto 512 MB RAM

Madhava Postgres insatnces need more CPU and Memory requirements :

> Max 100% of 1 core CPU and upto 32 GB RAM depending on the number of hosts each Madhava instance handles


## Network Connectivity Requirements {#network}

Network connectivity to the PostgresDB instance will need to be provided to the Shyama or Madhava instances using that DB.

## Installation Instructions

### Install using Shell script 

Users can download a shell script that takes care of the installation and configuration of the PostgresDB instance.

```bash
curl -o /tmp/install-gyeeta-postgresdb.sh -s https://gyeeta.io/packages/install-gyeeta-postgresdb.sh
```

Then run the install script as : 

`sudo bash /tmp/install-gyeeta-postgresdb.sh <Path to DB Data dir> <DB 'postgres' user Password> <Postgres Port to Listen on> <Optional DB Max Memory Shared buffers in MB>`

The DB Data dir will be created if it does not exist.

```bash title="Example Install Command"

sudo bash /tmp/install-gyeeta-postgresdb.sh /opt/gyeeta/postgresdb/data gyeetadbPassword 10040

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-postgresdb.sh.sum)

### Running as a Docker container {#docker}

Running Postgres as a Docker container is a 2 step process. 

1. A one time DB init is needed.
2. Therafter, the docker container can be run multiple times.

The docker container needs the following inputs :

- A Volume mount dir for storing the DB data
- Init DB Password and Port number

#### Run postgresdb DB init first (only once)

```bash

docker run -td --rm --name gyeetaInitPostgres --read-only -v /opt/gyeeta/dbdata:/dbdata --env CFG_POSTGRES_PASSWORD=gyeetadbPassword --env CFG_POSTGRES_PORT=10040 ghcr.io/gyeeta/postgresdb --initdb

```

#### Run postgresdb after init

```bash

docker run -td --rm --name gyeetaPostgres --read-only -p 10040:10040 -v /opt/gyeeta/dbdata:/dbdata ghcr.io/gyeeta/postgresdb 

```

