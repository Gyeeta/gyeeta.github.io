---
title: shyama Server Installation
description: Shyama Central Server Installation
keywords:
  - shyama
  - installation
---

# Shyama Central Server Installation

Shyama Server is the only component in Gyeeta which will interact with all other components.

## Network Connectivity Requirements {#network}

As Shyama will communicate with all other components, Shyama needs to be installed on a host that can be
connected to by all other components and all Hosts that need to be monitored.

It is recommended that the Shyama server and its PostgresDB be in the same Network Regin and Zone to limit
Network costs and for better performance.

## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shell-script)
- [Kubernetes Helm Chart](#helm-chart)
- [Running as a Docker container](#docker)
- [Install using native rpm or deb packages](#rpm-deb)
- [Manual Tar Package install](#tar-install)

Except for Kubernetes installs, please ensure that the Postgres DB instance is installed and the Shyama Config
file in JSON format is ready as per [Shyama Config](./shyama_config).

### *Install using Shell script* {#shell-script} 

Users can download a shell script that takes care of the installation and configuration of the Shyama instance.

:::note

Before installing Shyama, users need to create a JSON config file as per the [Shyama Config](./shyama_config).

:::


```bash
curl -o /tmp/install-gyeeta-shyama.sh -s https://gyeeta.io/packages/install-gyeeta-shyama.sh

# Then run the install script as : 
# sudo bash /tmp/install-gyeeta-shyama.sh <Path to Shyama Config fiel in JSON format>

# Example Install Command (Please configure the /tmp/shyama.json config file first) :

sudo bash /tmp/install-gyeeta-shyama.sh /tmp/shyama.json

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-shyama.sh.sum)


### *Kubernetes Helm Chart* {#helm-chart}

Kubernetes 1.18 or higher is needed along with Helm v3.

Refer to [Gyeeta Helm Charts](./k8s_helm) for a detailed explanation on installing different
Gyeeta components in Kubernetes.

A short explanation is shown below :

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts
helm show values gyeeta/shyama > /tmp/shyama.yaml

# Thereafter you can edit the /tmp/shyama.yaml file if you need to change any option. 
# After editing the /tmp/shyama.yaml, install the Shyama Helm chart using :

helm install --namespace gyeeta --create-namespace shyama1  gyeeta/shyama -f /tmp/shyama.yaml

```

### *Running as a Docker container* {#docker}

A JSON config file needs to be created first as per [Shyama Config](./shyama_config)

In the example command below, /tmp/shyama.json config file has already been created on the main host.

The docker container will only run under userid 1001 and groupid 1001.

```bash

docker run --rm -td --name shyama --read-only --user 1001:1001 -p 10037:10037 --env CFG_MAIN_JSON=/tmp/shyama.json -v /tmp/shyama.json:/tmp/shyama.json:ro ghcr.io/gyeeta/shyama start

```

### *Install using native rpm or deb packages* {#rpm-deb}

Gyeeta native rpm or deb packages are available. The install is to be followed by Shyama configuration.

#### Debian/Ubuntu based deb package install

```bash

curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-shyama

```

#### Yum or dnf based rpm Installs

For RHEL, Amazon Linux, CentOS, Rocky Linux, Fedora based distributions.

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo

if command -v yum > /dev/null; then 
	sudo yum -y update
	sudo yum install -y gyeeta-shyama
else
	sudo dnf -y update
	sudo dnf install -y gyeeta-shyama
fi	

```

#### OpenSUSE / SUSE Linux based rpm Installs

```bash

sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-shyama

```


#### Shyama Configuration post Installation

After the deb or rpm package has been installed, the Shyama config file `/opt/gyeeta/shyama/cfg/shyama_main.json` needs
to be edited as per [Shyama Config](./shyama_config).

```bash title="Start Shyama after editing the shyama_main.json"

# After editing the /opt/gyeeta/shyama/cfg/shyama_main.json config file
sudo systemctl start gyeeta-shyama
sudo systemctl enable gyeeta-shyama

```


### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta Shyama component, a manual tarball extract and configure
can be used to install.

```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/Gyeeta/gyeeta/releases/download/v0.1.0/shyama.tar.gz | tar xzf -
cd ./shyama

# Thereafter create the cfg/shyama_main.json Shyama config file and then start the Shyama server as

./runshyama.sh start

```

## Shyama Failover / Redundancy

Shyama server can be setup for Multi Node High Availablity by installing 2 or more instances of Shyama
which interact with the same instance of Postgres DB in Active-Passive mode.

Please refer to [Failover](./failover) for further details.

