---
id: k8s
title: Kubernetes Analysis
description: Kubernetes Analysis
---

# Kubernetes Analysis

Kubernetes analysis presents challenges due to the multiple elements involved :

- Clusters
- Namespaces
- Services
- Pods
- Containers

Gyeeta does not directly interact with the Kubernetes API server. Instead, Gyeeta extracts the information non-intrusively as 
explained below :

## Pods

Gyeeta extracts the Pod Information from Process Environment. This is not failsafe as processes may overwrite their environment
variables.

Gyeeta stores the Pod Name in the Service or Process `tagname` field (*Tag Name* is the corresponding descriptive name).

:::note

To enable Kubernetes Pod Analysis, the monitored host `partha` config file should have `is_kubernetes` field set to true.
If not specified, `is_kubernetes` is assumed to be true.

:::


## Service IP/Port

Gyeeta stores the Kubernetes Service IP/Port within the `svcip1` and `svcport1` fields (*Virtual IP Address 1* and
*Virtual Port 1* being the corresponding descriptive names). Gyeeta extracts this information from the Network Flows
seen. 

This implies, that if no network connections are seen for a service, its `svcip1` and `svcport1` fields will be empty.

## Namespaces

The Kubernetes Namespace name will be part of the Service Domain Names. For example, if a service, say *mysvc* is part of Kubernetes
Namespace *sockshop*, the service DNS entry could be *mysvc.sockshop.svc.cluster.local*.

This implies that to get the namespace for a Service, the `svcdns` field (*Service Domain Name* descriptive name) needs to be checked.

Also, the Process Info will not have any `svcdns` field and so Kubernetes namespace of a Client process cannot be known in Gyeeta directly,
unless the Client Process itself is also a Service.

:::info

Gyeeta will capture DNS entries only if was used by a Client application. If all clients directly use the IP instead of the domain,
the Service Domain will remain empty.

:::

## Containers

Gyeeta monitors all containers as well as their corresponding cgroups. Currently, Gyeeta does not expose the cgroup statistics
directly, but uses them internaly.

## CPU and Memory Limits

Gyeeta shows the Kubernetes CPU Limits and Memory Limits as a percentage of max allowed within the Process State or Process Info statistics.
Gyeeta will display whether the process is a CPU Throttled Process or a Memory Limited Process depending on whether Limits are set or not.

Gyeeta will also show the current Process cgroup CPU and Memory Utilization as a percentage value based on the Max CPU / Memory Allowed.

Gyeeta will also report the CPU Delays experienced by the process. If the process is a CPU Throttled process (CPU Limits specified) and 
if CPU Delays are being experienced by the process, it could imply either CPU throttling because of cgroup limits or overall 
system CPU contention or the process is taking up all CPU cores.

