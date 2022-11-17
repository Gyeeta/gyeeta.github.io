---
title: Kubernetes Helm Charts
description: Install Gyeeta Kubernetes Helm Charts
keywords:
  - kubernetes
  - helm
  - installation
---

# Gyeeta Kubernetes Helm Charts

Gyeeta components can be installed in [Kubernetes](https://kubernetes.io) (version 1.18 or higher) Cluster environments using [Helm Charts](https://helm.sh) (version 3 or higher).

Gyeeta Helm Charts install the various components in the following way :

1. [Shyama Central Server](../architecture#central-server-shyama) is installed as a Statefulset along with its corresponding Postgres DB as a side container
2. [Madhava Intermediate Server](../architecture#intermediate-server-madhava) is installed as a Statefulset along with its corresponding Postgres DB as a side container
3. [Partha Host Agents](../architecture#host-monitor-agent-partha) are installed as a Daemonset
4. [Node Webserver](../architecture#node-webserver) is installed as a Deployment
5. [Alert Action Agent](../architecture#alert-action-agent) is installed as a Deployment

## Add Gyeeta Helm repo

The first step in installing the Gyeeta components is adding the Gyeeta Charts repository to Helm repository list.

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts
helm repo update

```

## Install Shyama Helm Chart {#shyama-chart}

The Shyama Helm Chart is installed as a Statefulset along with an optional Postgres DB as a side container.


