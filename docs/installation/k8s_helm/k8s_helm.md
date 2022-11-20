---
title: Kubernetes Helm Charts
description: Gyeeta Kubernetes Helm Charts
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
3. [Partha Host Agents](../architecture#host-monitor-agent-partha) are installed as a Daemonset as Partha needs to be installed on each host
4. [Node Webserver](../architecture#node-webserver) is installed as a Deployment
5. [Alert Action Agent](../architecture#alert-action-agent) is installed as a Deployment

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+
- PV provisioner support in the underlying infrastructure

## Gyeeta Components Helm Charts

Gyeeta components Helm Chart Description lnks are given below. Readers are advised to install the Helm Charts in the 
sequence as shown below :

1. [Shyama Central Server](./k8s_helm/shyama_helm)
2. [Madhava Intermediate Server](./k8s_helm/madhava_helm)
3. [Partha Host Agents](./k8s_helm/partha_helm)
4. [Node Webserver](./k8s_helm/nodewebserver_helm)
5. [Alert Action Agent](./k8s_helm/alertaction_helm)

Gyeeta also provides a separate Helm Chart for Postgres DB component though it is recommended not to install a separate Postgres DB.
Instead the Shyama server and Madhava Servers will automatically install a PostgresDB container alongside the server container.

