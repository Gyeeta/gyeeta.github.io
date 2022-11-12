---
title: TL;DR Quick Single Command Install
description: TL;DR Quick Single Command Install
keywords:
  - tldr
  - installation
---

# TL;DR Quick Single Command Installation

Gyeeta provides a Single Command TLDR Quick Install method to install all Server Components with no other 
configuration requirements. This provides a very quick way to install the Gyeeta server components on a single host.

The components that will be installed on a single host as part of this script are :

- One instance of Postgres DB which will be shared between Shyama and Madhava servers
- Shyama Central Server
- One instance of Madhava Intermediate Server
- Node Webserver
- Alert Action Agent

Users will then need to install Partha Agents on all hosts which need to be monitored.

## Inputs needed for TLDR Quick Install script

- Postgres DB Data directory path which should have adequate Free Disk Space (preferably 200 GB or more)
- Postgres DB `postgres` user Password
- Web UI `admin` user Password for logging in using a Web Browser

## Command to run the TLDR Quick Install Script

```bash

curl -o /tmp/install-gyeeta-all-quick.sh -s https://gyeeta.io/packages/install-gyeeta-all-quick.sh && \
	sudo bash /tmp/install-gyeeta-all-quick.sh /opt/gyeeta/postgresdb/data dbPassword adminPassword

```


Note in the above command, the DB Data dir specified (`/opt/gyeeta/postgresdb/data`) will be created if it does not exist. 
Please ensure that the DB Data dir has adequate Free Disk Space.

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at 
[SHA256 file](https://gyeeta.io/packages/install-gyeeta-all-quick.sh.sum)


:::note

The above command will not install the Partha Host Agent. Users need to run the Partha Installs using
any of the supported [Partha Install mechanisms](./partha_install).

The TLDR Quick Install script will also create a sample Partha Config file which can be used as an input Config file for the 
Partha installs.

Users can skip all subsequent sections pertaining to Installation of Gyeeta Server components and Alert Agent.

:::


## Network and Firewall Requirements

The server components installed by the TLDR Quick Install script will listen on the following ports :

- Shyama Server on port 10037
- Madhava Server on port 10038
- Node Webserver on port 10039

These 3 ports need to be opened for external access. Partha Host Monitors will connect to both Shyama (port 10037) and
Madhava (port 10038) and the Webserver will be connected to from Browsers to access the Web UI.

Also, the Hostname of the host on which the TLDR script is run will need to be resolved from external hosts. In other words,
the hostname needs to be a cluster wide valid hostname.

If Alert Actions (Notifications) need to access an external Server on the Internet, say a PagerDuty or Slack server, then Internet
access will be needed from this Install Host as well.

## Max Number of Monitored Hosts

The TLDR Quick Install script only installs a single instance of Madhava Intermediate Server. This implies that the maximum number of 
Monitored Hosts that can be monitored will be limited by the CPU and Memory specs of the host on which the TLDR Quick Install script
is run.

It is recommended that the TLDR Quick Install script be run on a host with adequate CPU and RAM specs as per the max Monitored
Hosts in your environment.

A single Madhava instance can monitor upto *50 monitored hosts* for a smaller host with 2 CPU cores and 4 GB RAM whereas a host with
with 16 cores and 64 GB RAM can monitor upto *500 monitored hosts*.

In case more number of Monitored Hosts are expected, other instances of Madhava need to be installed either on same host or some other
host.

