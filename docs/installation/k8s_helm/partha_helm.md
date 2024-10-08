---
title: Partha Helm Chart
description: Partha Host Agent Kubernetes Helm Chart
keywords:
  - kubernetes
  - helm
  - installation
---

# Partha Agent Kubernetes Helm Chart

[Partha Host Agents](../../architecture#host-monitor-agent-partha) can be installed in [Kubernetes](https://kubernetes.io) Cluster environments using 
[Helm Charts](https://helm.sh).

The Partha Host Agent is installed as a Daemonset as it needs to be installed on each host (node).

## Prerequisites

- Kubernetes version 1.19+
- kubectl command version 1.19+
- Helm version 3.2.0+
- Linux kernel version 4.4+

### Requirement of Kernel Headers for older kernels

The Partha Agent container requires *Kernel Headers* package to be installed on the base host for eBPF support on older kernels.

#### Older Distributions where Kernel Headers package needed 

- Ubuntu 20 and below
- Debian 11 and below
- RHEL, CentOS, Rocky Linux 8
- Amazon Linux 1 and 2
- Fedora Linux 35 and below

On Google Container Optimized OS (COS) (used in GKE environments), the partha container will itself download the currently running Kernel's Headers.

Newer Distributions include eBPF CO-RE BTF (BPF Type Format) Support and do not require *Kernel Headers* for eBPF based applications.

The Partha Helm Chart includes a parameter `partha_config.install_kern_headers` which, if enabled, the Partha container itself will try installing
the Kernel Headers package to the base OS. The parameter is disabled by default as on enabling this, the container may make changes to the base OS.

Please refer to [Kernel Headers Installation](https://gyeeta.io/docs/installation/partha_install#kernel-headers) for instructions on installing 
Kernel Headers directly on the base OS.

## Security Requirements

The Partha container will need to run as a `priviliged` container as it needs Linux Capabilities beyond the standard capabilities
provided by the container runtime.

Also, the Partha pod will need to run with `hostPID` and `hostNetwork` set to true as Partha needs to run in the Host Network and PID
namespaces.

For Kubernetes versions 1.25+, users may need to enable the `priviliged` Partha container by enabling the 
[Pod Security Admission](https://kubernetes.io/docs/concepts/security/pod-security-admission) for the Partha pod Namespace if
priviliged pods are set to be rejected. 

The command to enable this is shown below. This creates the `gyeeta` namespace and allows priviliged containers.
The commands below are included in the [Install Instructions](#install-instructions) section.

```bash
# Label namespace gyeeta so as to allow privileged containers
kubectl create ns gyeeta 2> /dev/null || :
kubectl label --overwrite ns gyeeta \
		pod-security.kubernetes.io/enforce=privileged \
		pod-security.kubernetes.io/enforce-version=latest
```

## Install Instructions

The steps to install the Partha Helm chart are :

- Add Gyeeta Repo to Helm
- Label namespace gyeeta so as to allow privileged containers
- Fetch and edit the values.yaml for the Partha chart
- Install the Partha chart with the edited values

```bash
helm repo add gyeeta https://gyeeta.io/helmcharts
helm repo update

# Label namespace gyeeta so as to allow privileged containers
kubectl create ns gyeeta 2> /dev/null || :
kubectl label --overwrite ns gyeeta \
		pod-security.kubernetes.io/enforce=privileged \
		pod-security.kubernetes.io/enforce-version=latest

helm show values gyeeta/partha > /tmp/partha.yaml

# Please edit the /tmp/partha.yaml file specifying minimum of partha_config.cluster_name, partha_config.shyama_hosts and partha_config.shyama_ports
# After editing the /tmp/partha.yaml, install the Partha Helm chart using :

helm install --namespace gyeeta --create-namespace partha1  gyeeta/partha -f /tmp/partha.yaml
```

## Uninstalling the Chart

To uninstall the Partha deployment say `partha1` as per command above :

```bash
helm uninstall partha1
```


## Partha Chart Parameters

The default Chart config can be obtained using the command :

```bash
helm show values gyeeta/partha > /tmp/partha.yaml
```

Then users can edit the `/tmp/partha.yaml` file. 

### Mandatory parameters to provide

The following are the mandatory parameters which users need to provide while installing the chart either using the `--set` CLI
option or by editing the yaml values in the file saved (for example, the `/tmp/partha.yaml` file in the command above) :

- `partha_config.cluster_name`
- `partha_config.shyama_hosts`
- `partha_config.shyama_ports`

The Helm chart install will fail if these parameters are not provided. Explanation about these parameters are given below.

### Partha Container Related parameters

| Name        | Description          | Data Type | Default Value   |
| ----------- | -------------------- | --------- | --------------- |
| `partha_config.cluster_name` | Cluster Name : Tag Name for this Cluster | `String` | `""` |
| `partha_config.shyama_hosts` | Shyama Service Domains : Specify one or more Shyama Service Names (e.g., `[ "shyama1-headless" ]`) | `Array` | `[]` |
| `partha_config.shyama_ports` | Shyama Service Ports : Specify one or more Shyama Service Ports (e.g., `[ 10037 ]`) | `Array` | `[]` |
| `partha_config.cloud_type` | Cloud Operator : Specify as either of `aws`, `gcp`, `azure`. For other clouds or on-prem, leave blank | `String` | `""` |
| `partha_config.region_name` | Region Name : Ignore if `cloud_type` is set. For on-prem or other clouds, specify as the Network region name | `String` | `""` |
| `partha_config.zone_name` | Zone Name : Ignore if `cloud_type` is set. For on-prem or other clouds, specify as the Network Zone name | `String` | `""` |
| `partha_config` `.response_sampling_percent` | Percent of workload to be analyzed for Response and QPS Calculations | `Number` | `100` |
| `partha_config.capture_errcode` | Capture HTTP Error codes | `Boolean` | `true` |
| `partha_config.enable_task_delays` | Enable Process Delays if not set | `Number` | `1` |
| `partha_config.logtofile` | Process Log sent to file instead of stdout/stderr. If true will use the `emptyDir` mount point for logging | `Boolean` | `true` |
| `partha_config` `.install_kern_headers` | Install Kernel Headers on hosts without Kernel Headers | `Boolean` | `false` |

### Other parameters

| Name        | Description          | Data Type | Default Value   |
| ----------- | -------------------- | --------- | --------------- |
| `nameOverride` | Set a new name if you want to override the release name used | `String` | `""` |
| `fullnameOverride` | Set a new name if you want to override the fullname used | `String` | `""` |
| `resources.requests` | Partha Container Resource Requests | `Object` | `{ "memory" : "200Mi" }` |
| `resources.limits` | Partha Container Resource Limits | `Object` | `{ "memory" : "1024Mi" }` |
| `podSecurityPolicy` | Enable PodSecurityPolicy (only for K8s versions < 1.25) | `Boolean` | `true` |
| `affinity` | Affinity constraint for pod scheduling | `Object` | `{}` |
| `mounts.volumes` | List of extra volumes to add to the Partha container | `Array` | `[]` |
| `mounts.volumeMounts` | List of extra volume mounts to add to the Partha container | `Array` | `[]` |
| `extra.env` | Extra environment variables to pass onto Partha container | `Object` | `{}` |
| `extra.args` | Extra Command Line Arguments (CLI) to pass onto Partha container | `Array` | `[]` |


:::info

If `partha_config.logtofile` is set to `true`, then the Partha process logs will be sent to `/hostdata/log/partha.log`.
Users can analyze the logs by running the command :

```bash
# Get the Partha pod name and fill in PARTHAPOD env
kubectl exec -it $PARTHAPOD -- more /hostdata/log/partha.log
```
:::

