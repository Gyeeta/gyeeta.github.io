---
title: shyama Server Installation
description: Shyama Central Server Installation
keywords:
  - shyama
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# Shyama Central Server Installation

Shyama Server is the only component in Gyeeta which will interact with all other components.

## Network Connectivity Requirements {#network}

As Shyama will communicate with all other components, Shyama needs to be installed on a host that can be
connected to by all other components and all Hosts that need to be monitored.

It is recommended that the Shyama server and its PostgresDB be in the same Network Region and Zone to limit
Network costs and for better performance.

Firewall rules must allow inbound access to the Shyama server on the configured Shyama port (default port is 10037).

## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shell-script)
- [Install using Kubernetes Helm Chart](#helm-chart)
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
# sudo bash /tmp/install-gyeeta-shyama.sh <Path to Shyama Config file in JSON format>

# Example Install Command (Please configure the /tmp/shyama.json config file first) :

sudo bash /tmp/install-gyeeta-shyama.sh /tmp/shyama.json

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-shyama.sh.sum)

#### Stopping/Starting/Uninstalling the Shyama Server

```bash title="Command to stop the Shyama Server"

sudo systemctl stop gyeeta-shyama

```

```bash title="Command to start the Shyama Server"

sudo systemctl start gyeeta-shyama

```

**Command to uninstall Shyama Server**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo apt-get remove gyeeta-shyama
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo yum erase gyeeta-shyama
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo zypper remove gyeeta-shyama
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo dnf remove gyeeta-shyama
</CodeBlock>
</TabItem>

</Tabs>


### *Install using Kubernetes Helm Chart* {#helm-chart}

Kubernetes 1.19 or higher is needed along with Helm v3.

Refer to [Shyama Helm Chart](./k8s_helm/shyama_helm) for a detailed explanation on installing Shyama Server in Kubernetes.

A short explanation is shown below :

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts
helm repo update
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

```mdx-code-block
<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
```

```bash
curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-shyama
```

```mdx-code-block
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo yum -y update
sudo yum install -y gyeeta-shyama
```

```mdx-code-block
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-shyama
```

```mdx-code-block
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo dnf -y update
sudo dnf install -y gyeeta-shyama
```


```mdx-code-block
</TabItem>

</Tabs>
```


#### Shyama Configuration post Installation

After the deb or rpm package has been installed, the Shyama config file `/opt/gyeeta/shyama/cfg/shyama_main.json` needs
to be edited as per [Shyama Config](./shyama_config).

```bash title="Start Shyama after editing the shyama_main.json"

# After editing the /opt/gyeeta/shyama/cfg/shyama_main.json config file
sudo systemctl start gyeeta-shyama
sudo systemctl enable gyeeta-shyama

```

#### Stopping/Starting/Uninstalling the Shyama Server

```bash title="Command to stop the Shyama Server"

sudo systemctl stop gyeeta-shyama

```

```bash title="Command to start the Shyama Server"

sudo systemctl start gyeeta-shyama

```

**Command to uninstall Shyama Server**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo apt-get remove gyeeta-shyama
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo yum erase gyeeta-shyama
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo zypper remove gyeeta-shyama
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-shyama; sudo dnf remove gyeeta-shyama
</CodeBlock>
</TabItem>

</Tabs>


### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta Shyama component, a manual tarball extract and configure
can be used to install.

```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/gyeeta/gyeeta/releases/download/$( curl https://api.github.com/repos/gyeeta/gyeeta/releases/latest -s | grep tag_name | awk -F\" '{print $4}' )/shyama.tar.gz | tar xzf -
cd ./shyama

# Thereafter create the cfg/shyama_main.json Shyama config file and then start the Shyama server as

./runshyama.sh start

```

## Shyama Failover / Redundancy

Shyama server can be setup for Multi Node High Availablity by installing 2 or more instances of Shyama
which interact with the same instance of Postgres DB in Active-Passive mode.

Please refer to [Failover](./failover) for further details.

## Shyama Runtime CLI arguments {#cli-args}

In addition to the Shyama config file or config environment variables, users can pass command line arguments (CLI)
to Shyama which will take precedence over any other config file or environment variable. 

Some of the important CLI Options :

- `--cfg_main_json <Path to Shyama Config JSON>` 

  This option provides a way to override the default Shyama config files and will take precedence over any env variable

- `--cfg_alertdefs_json <Path to Alert Definitions JSON file>`

  This option provides a way to set all Alert Definitions using a predefined Alert Definition JSON array. Any existing
  Alert Definitions will be ignored and only the definitions defined in the JSON file will be considered.

- `--cfg_actions_json <Path to Alert Actions (Notifications) JSON file>`

  This option provides a way to set all Alert Actions using a predefined Alert Actions JSON array. Any existing
  Alert Actions will be ignored and only the actions defined in the JSON file will be considered.

- `--cfg_inhibits_json <Path to Alert Inhibits JSON file>`

  This option provides a way to set all [Alert Inhibits](../alerts/alertoverview#inhibition) using a predefined Alert Inhibitions JSON array. 
  Any existing Alert Inhibits will be ignored and only the inhibitions defined in the JSON file will be considered.

- `--cfg_silences_json <Path to Alert Silences JSON file>`

  This option provides a way to set all [Alert Silences](../alerts/alertoverview#silencing) using a predefined Alert Silences JSON array. 
  Any existing Alert Silences will be ignored and only the silences defined in the JSON file will be considered.

- `--nolog`

  This option if specified, the Shyama process will not send its logs to a file and instead send all logs to `stdout` or `stderr` streams.

