---
title: Host Agent Installation
description: Gyeeta Host Agent Installation
keywords:
  - partha
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {getsusecmd} from '../utils.js';

# Host Agent (*partha*) Installation

The Gyeeta Host Agent (named `partha`) is to be installed on each Linux host that needs to be monitored. 
The agent install can be done directly on the host using install packages or as a container with privileged access.

The agent is a lightweight process and uses max 10% of one CPU core and max 250 MB Memory RSS.

## Host Requirements to install Agent

The agent `partha` can be installed on Linux hosts with minimum kernel version 4.4 as it uses eBPF to monitor the host. 

The Linux distributions which are supported include :

| OS Distribution | Minimum version |
| :-------------: | :-------------: |
| Ubuntu | 16.04 |
| Debian | 9 (stretch) |
| RHEL | 8 |
| CentOS | 8 |
| Amazon Linux 2 | All Versions |
| Amazon Linux | Year 2017+ |
| Fedora | 28 |
| SuSE Linux | 12.5 |

Other Linux distributions based on RHEL or Debian/Ubuntu are supported as long as the base Linux Kernel is 4.4+

### CPU Architectures Supported 

Gyeeta currently (Jul 2022) supports only *x86_64* processors. Also, only *Intel/AMD* processors released after 2012 are supported.

### Requirement of Kernel Headers

The `partha` agent needs Kernel Headers package to be installed for eBPF support. 

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
</Tabs>


### Host Agent priviliges (capabilities)

The Host Agent `partha` needs to be run with sys_admin, net_admin and other capabilities as it utilizes eBPF and other monitoring methods. 
The installion process will set the `partha` file capabilities.

### Serverless monitoring not supported

Currently Gyeeta does not support monitoring of Serverless environments such as AWS Lambda and Fargate.

### Network Connectivity Requirements

The Host Agent needs to be connect to remote Central `shyama` server and Intermediate `madhava` server. The Host Agent will not listen on any
external port and no extra incoming connection firewall rules need to be set. It will just act as a TCP client and connect to remote `shyama`
and `madhava` servers.

## Installation Instructions

TODO


