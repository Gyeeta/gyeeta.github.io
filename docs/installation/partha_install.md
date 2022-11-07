---
title: Partha Agent Installation
description: Gyeeta Partha Host Agent Installation
---

# Host Agent (*partha*) Installation

The Gyeeta Host Agent (named `partha`) has to be installed on each Linux host that needs to be monitored. 
The agent install can be done directly on the host using install packages or as a container with privileged access.

The agent is a lightweight process and uses max 10% of one CPU core and about 200 MB Memory RSS.


## Installation Types

`partha` can be installed on a Host using any one of the following :

- rpm or deb Linux packages for dnf/yum or apt/dpkg based package managers

- Quick Linux script based install

- Docker Container

- Kubernetes Helm Chart

