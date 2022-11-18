---
title: Kubernetes Helm Charts
description: Install Gyeeta Kubernetes Helm Charts
keywords:
  - kubernetes
  - helm
  - installation
---

# Gyeeta Kubernetes Helm Charts

Gyeeta components can be installed in [Kubernetes](https://kubernetes.io) Cluster environments using [Helm Charts](https://helm.sh).

Gyeeta Helm Charts install the various components in the following way :

1. [Shyama Central Server](../architecture#central-server-shyama) is installed as a Statefulset along with its corresponding Postgres DB as a side container
2. [Madhava Intermediate Server](../architecture#intermediate-server-madhava) is installed as a Statefulset along with its corresponding Postgres DB as a side container
3. [Partha Host Agents](../architecture#host-monitor-agent-partha) are installed as a Daemonset
4. [Node Webserver](../architecture#node-webserver) is installed as a Deployment
5. [Alert Action Agent](../architecture#alert-action-agent) is installed as a Deployment

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+
- PV provisioner support in the underlying infrastructure

## Install Shyama Helm Chart {#shyama-chart}

The Shyama Helm Chart is installed as a Statefulset along with an optional Postgres DB as a side container.

The steps to install the Shyama Helm chart are :

- Add Gyeeta Repo to Helm
- Fetch and edit the values.yaml for the Shyama chart
- Install the Shyama chart with the edited values

```bash title="Install Shyama"

helm repo add gyeeta https://gyeeta.io/helmcharts
helm repo update
helm show values gyeeta/shyama > /tmp/shyama.yaml

# Thereafter you can edit the /tmp/shyama.yaml file if you need to change any option. 
# After editing the /tmp/shyama.yaml, install the Shyama Helm chart using :

helm install --namespace gyeeta --create-namespace shyama1  gyeeta/shyama -f /tmp/shyama.yaml

```

### Shyama Chart Parameters {#shyama-parameters}


