---
title: Node Webserver Installation
description: Node Webserver Installation
keywords:
  - node
  - webserver
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# Node Webserver Installation

## Network Connectivity Requirements {#network}

Node Webserver connects to Shyama Central server and all Madhava server instances.

Firewall rules must allow inbound access to the Node Webserver on the configured Listener port (default port is 10039).

## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shell-script)
- [Kubernetes Helm Chart](#helm-chart)
- [Running as a Docker container](#docker)
- [Install using native rpm or deb packages](#rpm-deb)
- [Manual Tar Package install](#tar-install)

Except for Kubernetes installs, please ensure that the the Node Webserver Config file in env file format and optional User-Password Mapping
file in JSON format are ready as per [Node Webserver Config](./nodewebserver_config).

### *Install using Shell script* {#shell-script} 

Users can download a shell script that takes care of the installation and configuration of the Webserver instance.

:::note

Before installing the Webserver, users need to create a config file as per the [Node Webserver Config](./nodewebserver_config).

:::


```bash

curl -o /tmp/install-gyeeta-nodewebserver.sh -s https://gyeeta.io/packages/install-gyeeta-nodewebserver.sh

# Then run the install script as : 
# sudo bash /tmp/install-gyeeta-nodewebserver.sh <Path to nodewebserver Config file in bash env format>

# Example Install Command (Please configure the /tmp/nodewebserver.env config file first) :

sudo bash /tmp/install-gyeeta-nodewebserver.sh /tmp/nodewebserver.env

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-nodewebserver.sh.sum)

#### Stopping/Starting/Uninstalling the Node Webserver

```bash title="Command to stop the Node Webserver"

sudo systemctl stop gyeeta-nodewebserver

```

```bash title="Command to start the Node Webserver"

sudo systemctl start gyeeta-nodewebserver

```

**Command to uninstall Node Webserver**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo apt-get remove gyeeta-nodewebserver
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo yum erase gyeeta-nodewebserver
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo zypper remove gyeeta-nodewebserver
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo dnf remove gyeeta-nodewebserver
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
helm show values gyeeta/nodewebserver > /tmp/nodewebserver.yaml

# Thereafter you can edit the /tmp/nodewebserver.yaml file if you need to change any option. 
# After editing the /tmp/nodewebserver.yaml, install the nodewebserver Helm chart using :

helm install --namespace gyeeta --create-namespace nodewebserver1  gyeeta/nodewebserver -f /tmp/nodewebserver.yaml

```

### *Running as a Docker container* {#docker}

An env  config file needs to be created first as per [Node Webserver Config](./nodewebserver_config)

In the example command below, /tmp/nodewebserver.env config file has already been created on the main host.

The docker container will only run under userid 1001 and groupid 1001.

```bash

docker run -td --rm --name gyeetawebserver --read-only --user 1001:1001 -p 10039:10039  --env CFG_ENV=/tmp/nodewebserver.env -v /tmp/nodewebserver.env:/tmp/nodewebserver.env:ro ghcr.io/gyeeta/nodewebserver

```

### *Install using native rpm or deb packages* {#rpm-deb}

Gyeeta native rpm or deb packages are available. The install is to be followed by Node Webserver configuration.

#### Debian/Ubuntu based deb package install

```bash

curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-nodewebserver

```

#### Yum or dnf based rpm Installs

For RHEL, Amazon Linux, CentOS, Rocky Linux, Fedora based distributions.

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo

if command -v yum > /dev/null; then 
	sudo yum -y update
	sudo yum install -y gyeeta-nodewebserver
else
	sudo dnf -y update
	sudo dnf install -y gyeeta-nodewebserver
fi	

```

#### OpenSUSE / SUSE Linux based rpm Installs

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-nodewebserver

```


#### Node Webserver Configuration post Installation

After the deb or rpm package has been installed, the nodewebserver config file `/opt/gyeeta/nodewebserver/.env` needs
to be edited as per [Node Webserver Config](./nodewebserver_config).

```bash title="Start nodewebserver after editing the .env"

# After editing the /opt/gyeeta/nodewebserver/.env config file

sudo systemctl start gyeeta-nodewebserver
sudo systemctl enable gyeeta-nodewebserver

```
#### Stopping/Starting/Uninstalling the Node Webserver

```bash title="Command to stop the Node Webserver"

sudo systemctl stop gyeeta-nodewebserver

```

```bash title="Command to start the Node Webserver"

sudo systemctl start gyeeta-nodewebserver

```

**Command to uninstall Node Webserver**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo apt-get remove gyeeta-nodewebserver
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo yum erase gyeeta-nodewebserver
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo zypper remove gyeeta-nodewebserver
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-nodewebserver; sudo dnf remove gyeeta-nodewebserver
</CodeBlock>
</TabItem>

</Tabs>



### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta nodewebserver component, a manual tarball extract and configure
can be used to install.

```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/Gyeeta/nodewebserver/releases/download/v0.1.0/nodewebserver.tar.gz | tar xzf -
cd ./nodewebserver

# Thereafter edit the .env Node Webserver config file and then start the Webserver as

./runwebserver.sh start

```


## Node Webserver Failover / Redundancy

Node Webserver servers can be setup for Multi Node High Availablity by installing 2 or more instances of Node Webservers.

Please refer to [Failover](./failover) for further details.

