---
id: partha_req
title: partha Host Requirements
description: Host Requirements to install partha Agent
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {getsusecmd} from '../utils.js';


# Host Requirements to install partha

The agent `partha` can be installed on Linux hosts with minimum kernel version 4.4 as it uses eBPF to monitor the host. 

The Linux distributions which are supported include :

| OS Distribution | Minimum version |
| :-------------: | :-------------: |
| Ubuntu | 16.04+ |
| Debian | 9+ |
| RHEL, CentOS, Rocky Linux | 8+ |
| Amazon Linux 2 | All Versions |
| Amazon Linux | Year 2017+ |
| Google Container OS (COS) | Linux Kernel 4.14+ |
| Fedora | 28+ |
| SuSE Linux | 12.5+ |

Other Linux distributions based on RHEL or Debian/Ubuntu are supported as long as the base Linux Kernel is 4.4+

## CPU Architectures Supported 

Gyeeta currently supports only *x86_64* processors. Also, only *Intel/AMD* processors released after 2012 are supported as
Gyeeta is compiled with avx instruction support.

## Requirement of Kernel Headers

The `partha` agent needs Kernel Headers package to be installed for eBPF support. Users need to ensure that the Kernel Headers 
package is installed on the hosts to be monitored as otherwise `partha` will not run. 

On Google Container Optimized OS (COS), the `partha` container will itself download the currently running Kernel's Headers and so,
the Kernel Package is not needed.

If `partha` is run as a container, a configurable option is provided whereby the `partha` container itself will install the relevant Kernel Headers 
package to the base host if enabled, but this option is currently beta.


**Command to install Kernel Headers :**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo apt update && sudo apt-get -y install linux-headers-$(uname -r)
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo yum -y install kernel-devel-$(uname -r)
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
{getsusecmd()}  
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo dnf install -y kernel-devel-$(uname -r)
</CodeBlock>
</TabItem>

</Tabs>

## Host Agent priviliged usage

The Host Agent `partha` needs to be run as a priviliged process with sys_admin, net_admin and other Linux capabilities as it utilizes 
eBPF and other monitoring methods. 

If `partha` is run as a container, `partha` needs to be a priviliged container. Also `partha` needs to run in the Host Network Namespace
and Host PID Namespace.

## Serverless monitoring not supported

Currently Gyeeta does not support monitoring of Serverless environments such as AWS Lambda and Fargate.

## GKE Support

Gyeeta supports Google Kubernetes Engine (Standard) mode only. GKE Autopilot is not supported.


## Network Connectivity Requirements

The `partha` Host Agent needs to connect to Central `shyama` server and a `shyama` assigned Intermediate `madhava` server. The Host Agent will 
not listen on any external port and no extra incoming connection firewall rules need to be set. It will just act as a TCP client and connect 
to remote `shyama` and `madhava` servers.

