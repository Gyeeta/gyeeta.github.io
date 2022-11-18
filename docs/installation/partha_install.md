---
title: Partha Agent Installation
description: Gyeeta Partha Host Agent Installation
keywords:
  - partha
  - agent
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {getsusecmd} from '../utils.js';


# Partha Host Agent Installation

The Gyeeta Host Agent (named `partha`) has to be installed on each Linux host that needs to be monitored. 
The Agent is a lightweight process and uses max 10% of one CPU core and less than 300 MB Memory RSS.

## Host Requirements to install partha

### Minimum Linux Kernel and CPU Requirements

The `partha` Host Agent requires a Linux Kernel with minimum kernel version of 4.4.

`partha` currently supports only *x86_64* processors. Also, only *Intel/AMD* processors released after 2012 are supported as
`partha` is compiled with avx instruction support.

### Requirement of Kernel Headers {#kernel-headers}

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

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
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

### Host Agent priviliged usage

The Host Agent `partha` needs to be run as a priviliged process with `sys_admin`, `net_admin` and other Linux capabilities as it utilizes 
eBPF and other monitoring methods. 

If `partha` is run as a container, `partha` needs to be a priviliged container. Also `partha` needs to run in the Host Network Namespace
and Host PID Namespace.

### Serverless monitoring not supported

Currently Gyeeta does not support monitoring of Serverless environments such as AWS Lambda and Fargate.

### GKE Support

Gyeeta supports Google Kubernetes Engine (Standard) mode only. GKE Autopilot is not supported.


### Network Connectivity Requirements

The `partha` Host Agent needs to connect to `shyama` Central server and a `shyama` assigned `madhava` Intermediate server. The `partha` Agent will 
not listen on any port and no incoming connection firewall rules need to be set. It will just act as a TCP client and connect 
to remote `shyama` and `madhava` servers.


## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shell-script)
- [Install using Kubernetes Helm Chart](#helm-chart)
- [Running as a Docker container](#docker)
- [Install using native rpm or deb packages](#rpm-deb)
- [Manual Tar Package install](#tar-install)

Except for Kubernetes installs, please ensure that the the Partha Config file in JSON format is ready as per [Partha Config](./partha_config).

### *Install using Shell script* {#shell-script} 

Users can download a shell script that takes care of the installation and configuration of the Partha Agent.

:::note

Before installing Partha, users need to create a JSON config file as per the [Partha Config](./partha_config).

Also, although this install script will try installing the Kernel Headers, if not present, users are advised to first
install the Linux Kernel Headers before running this script. Please refer to [Kernel Headers](#kernel-headers).

:::


```bash

curl -o /tmp/install-gyeeta-partha.sh -s https://gyeeta.io/packages/install-gyeeta-partha.sh

# Then run the install script as : 
# sudo bash /tmp/install-gyeeta-partha.sh <Path to Partha Config file in JSON format>

# Example Install Command (Please configure the /tmp/partha.json config file first) :

sudo bash /tmp/install-gyeeta-partha.sh /tmp/partha.json

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-partha.sh.sum)

#### Stopping/Starting/Uninstalling the Partha Agent

```bash title="Command to stop the Partha Agent"

sudo systemctl stop gyeeta-partha

```

```bash title="Command to start the Partha Agent"

sudo systemctl start gyeeta-partha

```

**Command to uninstall Partha Agent**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo apt-get remove gyeeta-partha
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo yum erase gyeeta-partha
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo zypper remove gyeeta-partha
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo dnf remove gyeeta-partha
</CodeBlock>
</TabItem>

</Tabs>



### *Install using Kubernetes Helm Chart* {#helm-chart}

Kubernetes 1.19 or higher is needed along with Helm v3.

Refer to [Gyeeta Helm Charts](./k8s_helm) for a detailed explanation on installing different
Gyeeta components in Kubernetes.

A short explanation is shown below :

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts
helm repo update
helm show values gyeeta/partha > /tmp/partha.yaml

# Thereafter you can edit the /tmp/partha.yaml file if you need to change any option. 
# After editing the /tmp/partha.yaml, install the partha Helm chart using :

helm install --namespace gyeeta --create-namespace partha1  gyeeta/partha -f /tmp/partha.yaml

```
:::note

Users are required to first install the Linux Kernel Headers before running the Partha Helm Chart. Please refer to [Kernel Headers](#kernel-headers).

:::


### *Running as a Docker container* {#docker}

:::note

Before running the Docker container, users need to install the Kernel Headers as per [Install Kernel Headers](#kernel-headers) link.

:::

The partha container needs to be run as a `priviliged` container and also needs to be in the Host Network and PID Namespace.

A JSON config file needs to be created first as per [partha Config](./partha_config)

In the example command below, /tmp/partha.json config file has already been created on the main host.

The docker container will only run as a root user.

```bash

docker run -td --rm --name partha --read-only --privileged --env CFG_JSON_FILE=/tmp/partha.json --network=host --pid=host --cgroupns=host -v /proc:/proc -v /sys/:/sys/ -v /tmp/partha.json:/tmp/partha.json:ro ghcr.io/gyeeta/partha

```

### *Install using native rpm or deb packages* {#rpm-deb}

Gyeeta native rpm or deb packages are available. The install is to be followed by Partha configuration.


```mdx-code-block
<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
```

```bash
curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-partha
```

```mdx-code-block
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo yum -y update
sudo yum install -y gyeeta-partha
```

```mdx-code-block
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-partha
```

```mdx-code-block
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo dnf -y update
sudo dnf install -y gyeeta-partha
```


```mdx-code-block
</TabItem>

</Tabs>
```


:::note

Although this install package will try installing the Kernel Headers, if not present, users are advised to first
install the Linux Kernel Headers before installing the package. Please refer to [Kernel Headers](#kernel-headers).

:::


#### partha Configuration post Installation

After the deb or rpm package has been installed, the Partha config file `/opt/gyeeta/partha/cfg/partha_main.json` needs
to be edited as per [Partha Config](./partha_config).

```bash title="Start Partha after editing the partha_main.json"

# After editing the /opt/gyeeta/partha/cfg/partha_main.json config file
sudo systemctl start gyeeta-partha
sudo systemctl enable gyeeta-partha

```

#### Stopping/Starting/Uninstalling the Partha Agent

```bash title="Command to stop the Partha Agent"

sudo systemctl stop gyeeta-partha

```

```bash title="Command to start the Partha Agent"

sudo systemctl start gyeeta-partha

```

**Command to uninstall Partha Agent**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo apt-get remove gyeeta-partha
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo yum erase gyeeta-partha
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo zypper remove gyeeta-partha
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-partha; sudo dnf remove gyeeta-partha
</CodeBlock>
</TabItem>

</Tabs>


### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta Partha agent, a manual tarball extract and configure
can be used to install. 

:::note

Before running the Manual Tar install, users need to install the Kernel Headers as per [Install Kernel Headers](#kernel-headers) link.

:::


```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/gyeeta/gyeeta/releases/download/$( curl https://api.github.com/repos/gyeeta/gyeeta/releases/latest -s | grep tag_name | awk -F\" '{print $4}' )/partha.tar.gz | tar xzf -
cd ./partha

# Set Partha capabilities : needs sudo
sudo ./setperm.sh

# Thereafter create the cfg/partha_main.json partha config file and then start the partha server as

./runpartha.sh start

```


