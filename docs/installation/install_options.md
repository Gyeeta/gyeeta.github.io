---
title: Install Options
description: Gyeeta components Install Options
keywords:
  - installation
---

# Gyeeta Install Options

Gyeeta consists of the following main components :

- Partha Host Monitor Agent to be installed on each host
- One instance of Shyama Central Server 
- One or more instances of Madhava Intermediate Servers
- One or more instances of PostgresDB Servers
- One instance of Node Webserver
- One instance of Alert Action Agent

## Install Options for Gyeeta components {#install-options}

- Linux script based install
- Kubernetes Helm Chart
- Docker Container
- rpm / deb Linux packages for dnf/yum or apt/dpkg based package managers
- Manual Tar Package download

## Recommended Install Sequence {#install-sequence}

The recommended sequence for installing various components include :

1. Install and configure the PostgresDB server(s).
2. Install the Shyama server.
3. Install one or more Madhava servers depending on the number of hosts to be monitored.
4. Install the Partha Host Agents on each host that needs to be monitored.
5. Install the Node Webserver.
6. Install the Alert Action Agent.

Please refer to the following links for information on installing and configuring
the different components :

- [PostgresDB Install](./postgresdb_install)

