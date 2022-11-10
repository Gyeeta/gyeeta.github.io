---
title: Installation Options
description: Gyeeta Install Options and Sequence
keywords:
  - installation
---

# Gyeeta Installation Options and Sequence

## Components to be installed

To setup Gyeeta, users need to install the following minimal components :

- One instance of Shyama Central Server 
- One or more instances of Madhava Intermediate Servers
- One or more instances of PostgresDB Servers
- On each host to be monitored, a Partha Host Monitor Agent to be installed
- One instance of Node Webserver
- One instance of Alert Action Agent

## Install Options for Gyeeta components {#install-options}

Gyeeta components can be installed using any of the following methods :

- Bash Script based Installation and Configuration
- Kubernetes Helm Chart
- Docker Containers
- rpm / deb based native packages for dnf/yum, apt-get or zypper
- Manual Tar Package download and configure

## Recommended Install Sequence {#install-sequence}

The recommended sequence for installing various components include :

1. Install and configure the PostgresDB server(s).
2. Install the Shyama server.
3. Install one or more Madhava servers depending on the number of hosts to be monitored.
4. Install the Partha Host Agents on each host that needs to be monitored.
5. Install the Node Webserver.
6. Install the Alert Action Agent.


