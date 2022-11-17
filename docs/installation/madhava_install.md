---
title: madhava Server Installation
description: Madhava Intermediate Server Installation
keywords:
  - madhava
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# Madhava Intermediate Server Installation

## Network Connectivity Requirements {#network}

Madhava Intermediate servers connect to Shyama Central server and also communicate with Partha Host Agents
and Node Webserver.

It is recommended that the Madhava server and its PostgresDB be in the same Network Region and Zone to limit
Network costs and for better performance.

Firewall rules must allow inbound access to the Madhava server on the configured Madhava port (default port is 10038).

## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shell-script)
- [Install using Kubernetes Helm Chart](#helm-chart)
- [Running as a Docker container](#docker)
- [Install using native rpm or deb packages](#rpm-deb)
- [Manual Tar Package install](#tar-install)

Except for Kubernetes installs, please ensure that the Postgres DB instance is installed and the Madhava Config
file in JSON format is ready as per [Madhava Config](./madhava_config).

### *Install using Shell script* {#shell-script} 

Users can download a shell script that takes care of the installation and configuration of the Madhava instance.

:::note

Before installing Madhava, users need to create a JSON config file as per the [Madhava Config](./madhava_config).

:::


```bash

curl -o /tmp/install-gyeeta-madhava.sh -s https://gyeeta.io/packages/install-gyeeta-madhava.sh

# Then run the install script as : 
# sudo bash /tmp/install-gyeeta-madhava.sh <Path to Madhava Config file in JSON format>

# Example Install Command (Please configure the /tmp/madhava.json config file first) :

sudo bash /tmp/install-gyeeta-madhava.sh /tmp/madhava.json

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-madhava.sh.sum)

#### Stopping/Starting/Uninstalling the Madhava Server

```bash title="Command to stop the Madhava Server"

sudo systemctl stop gyeeta-madhava

```

```bash title="Command to start the Madhava Server"

sudo systemctl start gyeeta-madhava

```

**Command to uninstall Madhava Server**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo apt-get remove gyeeta-madhava
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo yum erase gyeeta-madhava
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo zypper remove gyeeta-madhava
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo dnf remove gyeeta-madhava
</CodeBlock>
</TabItem>

</Tabs>


### *Install using Kubernetes Helm Chart* {#helm-chart}

Kubernetes 1.18 or higher is needed along with Helm v3.

Refer to [Gyeeta Helm Charts](./k8s_helm) for a detailed explanation on installing different
Gyeeta components in Kubernetes.

A short explanation is shown below :

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts
helm show values gyeeta/madhava > /tmp/madhava.yaml

# Thereafter you can edit the /tmp/madhava.yaml file if you need to change any option. 
# After editing the /tmp/madhava.yaml, install the Madhava Helm chart using :

helm install --namespace gyeeta --create-namespace madhava1  gyeeta/madhava -f /tmp/madhava.yaml

```

### *Running as a Docker container* {#docker}

A JSON config file needs to be created first as per [Madhava Config](./madhava_config)

In the example command below, /tmp/madhava.json config file has already been created on the main host.

The docker container will only run under userid 1001 and groupid 1001.

```bash

docker run --rm -td --name madhava --read-only --user 1001:1001 -p 10037:10037 --env CFG_MAIN_JSON=/tmp/madhava.json -v /tmp/madhava.json:/tmp/madhava.json:ro ghcr.io/gyeeta/madhava start

```

### *Install using native rpm or deb packages* {#rpm-deb}

Gyeeta native rpm or deb packages are available. The install is to be followed by Madhava configuration.

#### Debian/Ubuntu based deb package install

```bash

curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-madhava

```

#### Yum or dnf based rpm Installs

For RHEL, Amazon Linux, CentOS, Rocky Linux, Fedora based distributions.

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo

if command -v yum > /dev/null; then 
	sudo yum -y update
	sudo yum install -y gyeeta-madhava
else
	sudo dnf -y update
	sudo dnf install -y gyeeta-madhava
fi	

```

#### OpenSUSE / SUSE Linux based rpm Installs

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-madhava

```


#### Madhava Configuration post Installation

After the deb or rpm package has been installed, the Madhava config file `/opt/gyeeta/madhava/cfg/madhava_main.json` needs
to be edited as per [Madhava Config](./madhava_config).

```bash title="Start Madhava after editing the madhava_main.json"

# After editing the /opt/gyeeta/madhava/cfg/madhava_main.json config file
sudo systemctl start gyeeta-madhava
sudo systemctl enable gyeeta-madhava

```

#### Stopping/Starting/Uninstalling the Madhava Server

```bash title="Command to stop the Madhava Server"

sudo systemctl stop gyeeta-madhava

```

```bash title="Command to start the Madhava Server"

sudo systemctl start gyeeta-madhava

```

**Command to uninstall Madhava Server**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo apt-get remove gyeeta-madhava
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo yum erase gyeeta-madhava
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo zypper remove gyeeta-madhava
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-madhava; sudo dnf remove gyeeta-madhava
</CodeBlock>
</TabItem>

</Tabs>



### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta Madhava component, a manual tarball extract and configure
can be used to install.

```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/Gyeeta/gyeeta/releases/download/v0.1.0/madhava.tar.gz | tar xzf -
cd ./madhava

# Thereafter create the cfg/madhava_main.json Madhava config file and then start the Madhava server as

./runmadhava.sh start

```


## Madhava Failover / Redundancy

Madhava servers can be setup for Multi Node High Availablity by installing 2 or more instances of Madhava
which interact with the same instance of Postgres DB.

Please refer to [Failover](./failover) for further details.

