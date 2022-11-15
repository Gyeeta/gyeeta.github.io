---
title: Alert Action Agent Installation
description: Alert Action Agent Installation
keywords:
  - alert
  - agent
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# Alert Action Agent Installation

## Network Connectivity Requirements {#network}

The Alert Action Agent is the application which is responsible for sending the Alert Notifications (Actions). 

The Alert Agent will communicate only with the Shyama Central Server and the Notification Servers as per Alert Config (such as Slack, Pagerduty).
If external Notification Servers are to be connected to for Alert Actions (such as an external Email server, Slack, etc), internet access will 
need to be provided to the host where the Alert Agent is installed.

## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shell-script)
- [Kubernetes Helm Chart](#helm-chart)
- [Running as a Docker container](#docker)
- [Install using native rpm or deb packages](#rpm-deb)
- [Manual Tar Package install](#tar-install)

Except for Kubernetes installs, please ensure that the the Alert Agent Config file in env file format is ready as per [Alert Agent Config](./alertaction_config).

### *Install using Shell script* {#shell-script} 

Users can download a shell script that takes care of the installation and configuration of the Alert Agent instance.

:::note

Before installing the Alert Agent, users need to create a config file as per the [Alert Agent Config](./alertaction_config).

:::


```bash

curl -o /tmp/install-gyeeta-alertaction.sh -s https://gyeeta.io/packages/install-gyeeta-alertaction.sh

# Then run the install script as : 
# sudo bash /tmp/install-gyeeta-alertaction.sh <Path to alertaction Config file in bash env format>

# Example Install Command (Please configure the /tmp/alertaction.env config file first) :

sudo bash /tmp/install-gyeeta-alertaction.sh /tmp/alertaction.env

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-alertaction.sh.sum)

#### Stopping/Starting/Uninstalling the Alert Agent

```bash title="Command to stop the Alert Agent"

sudo systemctl stop gyeeta-alertaction

```

```bash title="Command to start the Alert Agent"

sudo systemctl start gyeeta-alertaction

```

**Command to uninstall Alert Agent**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo apt-get remove gyeeta-alertaction
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo yum erase gyeeta-alertaction
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo zypper remove gyeeta-alertaction
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo dnf remove gyeeta-alertaction
</CodeBlock>
</TabItem>

</Tabs>



### *Kubernetes Helm Chart* {#helm-chart}

Kubernetes 1.18 or higher is needed along with Helm v3.

Refer to [Gyeeta Helm Charts](./k8s_helm) for a detailed explanation on installing different
Gyeeta components in Kubernetes.

A short explanation is shown below :

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts
helm show values gyeeta/alertaction > /tmp/alertaction.yaml

# Thereafter you can edit the /tmp/alertaction.yaml file if you need to change any option. 
# After editing the /tmp/alertaction.yaml, install the alertaction Helm chart using :

helm install --namespace gyeeta --create-namespace alertaction1  gyeeta/alertaction -f /tmp/alertaction.yaml

```

### *Running as a Docker container* {#docker}

An env  config file needs to be created first as per [Alert Agent Config](./alertaction_config)

In the example command below, /tmp/alertaction.env config file has already been created on the main host.

The docker container will only run under userid 1001 and groupid 1001.

```bash

docker run -td --rm --name gyeetaAlertAgent --read-only --user 1001:1001 --env CFG_ENV=/tmp/alertaction.env -v /tmp/alertaction.env:/tmp/alertaction.env:ro ghcr.io/gyeeta/alertaction

```

### *Install using native rpm or deb packages* {#rpm-deb}

Gyeeta native rpm or deb packages are available. The install is to be followed by Alert Agent configuration.

#### Debian/Ubuntu based deb package install

```bash

curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-alertaction

```

#### Yum or dnf based rpm Installs

For RHEL, Amazon Linux, CentOS, Rocky Linux, Fedora based distributions.

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo

if command -v yum > /dev/null; then 
	sudo yum -y update
	sudo yum install -y gyeeta-alertaction
else
	sudo dnf -y update
	sudo dnf install -y gyeeta-alertaction
fi	

```

#### OpenSUSE / SUSE Linux based rpm Installs

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-alertaction

```


#### Alert Agent Configuration post Installation

After the deb or rpm package has been installed, the alertaction config file `/opt/gyeeta/alertaction/.env` needs
to be edited as per [Alert Agent Config](./alertaction_config).

```bash title="Start alertaction after editing the .env"

# After editing the /opt/gyeeta/alertaction/.env config file

sudo systemctl start gyeeta-alertaction
sudo systemctl enable gyeeta-alertaction

```

#### Stopping/Starting/Uninstalling the Alert Agent

```bash title="Command to stop the Alert Agent"

sudo systemctl stop gyeeta-alertaction

```

```bash title="Command to start the Alert Agent"

sudo systemctl start gyeeta-alertaction

```

**Command to uninstall Alert Agent**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo apt-get remove gyeeta-alertaction
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo yum erase gyeeta-alertaction
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo zypper remove gyeeta-alertaction
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-alertaction; sudo dnf remove gyeeta-alertaction
</CodeBlock>
</TabItem>

</Tabs>



### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta Alert Agent component, a manual tarball extract and configure
can be used to install.

```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/Gyeeta/alertaction/releases/download/v0.1.0/alertaction.tar.gz | tar xzf -
cd ./alertaction

# Thereafter edit the .env Alert Agent config file and then start the Alert Agent as

./runalertaction.sh start

```


## Alert Agent Failover / Redundancy

Alert Agents can be setup for Multi Node High Availablity by installing 2 or more instances of Alert Agents.

Please refer to [Failover](./failover) for further details.

