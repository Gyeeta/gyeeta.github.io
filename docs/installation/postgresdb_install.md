---
title: PostgresDB Installation
description: Gyeeta PostgresDB Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# Gyeeta PostgresDB Installation

Gyeeta Shyama and Madhava servers use PostgresDB as a data store.

A single instance of Postgres can support 1 Shyama server and upto 3 Madhava server instances.

:::info

For Kubernetes Helm Charts based installs, Postgres does not need to be installed separately, as the PostgresDB
container is installed as a sidecar container automatically.

:::

## Shyama Postgres Disk Space Requirement {#shyama-dbspace}

The PostgresDB instance to be used by Shyama will need about 10 GB of disk space for a typical environment.

## Madhava Postgres Disk Space Requirement {#madhava-dbspace}

Maximum 3 instances of Madhava can share a single PostgresDB instance.

The PostgresDB instance to be used by each Madhava will need about 0.5 GB per day of free disk space per monitored host.

As an example, lets say there are 200 hosts to be monitored in total and maximum 3 days of statistics history is needed. 

This implies that an average of 200 x 0.5 x 3 = 300 GB of free disk space is needed for these 200 hosts.


## CPU and Memory Requirements for PostgresDB {#db-cpu-mem}

Shyama PostgresDB instances will need minimal CPU and Memory requirements :

> Max 10% of 1 core CPU and upto 512 MB RAM

Madhava Postgres insatnces need more CPU and Memory requirements :

> Max 100% of 1 core CPU and memory ranging from 1 GB to 32 GB RAM depending on the number of hosts the Madhava instance handles


## Network Connectivity Requirements {#network}

Network connectivity to the PostgresDB instance will need to be provided to the Shyama or Madhava instances using that DB. Firewall rules
must allow inbound access to the Postgres DB on the configured Postgres port (default port is 10040).

## Installation Instructions

Different Install Options exist :

- [Install using Shell Script](#shellscript)
- [Running as a Docker container](#docker)
- [Install using native rpm or deb packages](#rpm-deb)
- [Manual Tar Package install](#tar-install)

For Kubernetes, no separate Helm chart needs to be installed as Postgres is automatically installed along with Shyama and Madhava.

### *Install using Shell script* {#shell-script}

Users can download a shell script that takes care of the installation and configuration of the PostgresDB instance.

```bash
curl -o /tmp/install-gyeeta-postgresdb.sh -s https://gyeeta.io/packages/install-gyeeta-postgresdb.sh

# Then run the install script as : 
# sudo bash /tmp/install-gyeeta-postgresdb.sh <Path to DB Data dir> <DB 'postgres' user Password> <Postgres Port to Listen on> <Optional DB Max Memory Shared buffers in MB>

# The DB Data dir will be created if it does not exist. Please ensure that the DB Data dir has adequate Free Disk Space.

# Example Command with gyeetadbPassword as the password :

sudo bash /tmp/install-gyeeta-postgresdb.sh /opt/gyeeta/postgresdb/data gyeetadbPassword 10040

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-postgresdb.sh.sum)

#### Stopping/Starting/Uninstalling the Postgres DB

```bash title="Command to stop the Postgres DB"

sudo systemctl stop gyeeta-postgresdb

```

```bash title="Command to start the Postgres DB"

sudo systemctl start gyeeta-postgresdb

```

**Command to uninstall Gyeeta PostgresDB**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo apt-get remove gyeeta-postgresdb
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo yum erase gyeeta-postgresdb
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo zypper remove gyeeta-postgresdb
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo dnf remove gyeeta-postgresdb
</CodeBlock>
</TabItem>

</Tabs>



### *Running as a Docker container* {#docker}

Running Postgres as a Docker container is a 2 step process. 

1. A one time DB init is needed.
2. Therafter, the DB docker container can be run multiple times.

The docker container needs the following inputs :

- A Volume mount dir for storing the DB data
- Init DB Password and Port number

The docker container will only run under userid 1001 and groupid 1001. The volume mount dir needs to have its ownership
changed to userid:groupid as 1001:1001.

#### Run postgresdb DB init first (only once)

```bash title="Example Docker Init Command"

docker run -td --rm --name gyeetaInitPostgres --read-only --user 1001:1001 -v /opt/gyeeta/dbdata:/dbdata --env CFG_POSTGRES_PASSWORD=gyeetadbPassword --env CFG_POSTGRES_PORT=10040 ghcr.io/gyeeta/postgresdb --initdb

```

#### Run postgresdb after init

```bash title="Example Docker Command After Init"

docker run -td --rm --name gyeetaPostgres --read-only --user 1001:1001 -p 10040:10040 -v /opt/gyeeta/dbdata:/dbdata ghcr.io/gyeeta/postgresdb 

```

### *Install using native rpm or deb packages* {#rpm-deb}

Gyeeta native rpm or deb packages are available. The install is to be followed by DB initialization and configuration.

```mdx-code-block
<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
```

```bash
curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list
sudo apt-get update
sudo apt-get install -y gyeeta-postgresdb
```

```mdx-code-block
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo yum -y update
sudo yum install -y gyeeta-postgresdb
```

```mdx-code-block
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo zypper -q -n install gyeeta-postgresdb
```

```mdx-code-block
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
```

```bash
sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public
sudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo
sudo dnf -y update
sudo dnf install -y gyeeta-postgresdb
```


```mdx-code-block
</TabItem>

</Tabs>
```


#### PostgresDB Configuration post Installation

After the deb or rpm package has been installed, a one time DB initialization is needed. The command to
run the init is :

`sudo -H -u gyeeta $INSTALLDIR/db_install.sh <DB Data directory path> <DB 'postgres' user Password> <Postgres Port to Listen on> <Optional DB Max Shared buffers in MB>`

The DB Data dir will be created if it does not exist. Please ensure that the DB Data dir has adequate Free Disk Space.

```bash title="Example Configure Command"

sudo -H -u gyeeta /opt/gyeeta/postgresdb/db_install.sh /opt/gyeeta/postgresdb/data gyeetadbPassword 10040

# Thereafter start the gyeeta-postgresdb 
sudo systemctl start gyeeta-postgresdb
sudo systemctl enable gyeeta-postgresdb

```

#### Stopping/Starting/Uninstalling the Postgres DB

```bash title="Command to stop the Postgres DB"

sudo systemctl stop gyeeta-postgresdb

```

```bash title="Command to start the Postgres DB"

sudo systemctl start gyeeta-postgresdb

```

**Command to uninstall Gyeeta PostgresDB**


<Tabs>
<TabItem value="UbuntuDebian" label="Ubuntu / Debian" default>
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo apt-get remove gyeeta-postgresdb
</CodeBlock>
</TabItem>

<TabItem value="rhel" label="RHEL / Rocky Linux / Amazon Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo yum erase gyeeta-postgresdb
</CodeBlock>
</TabItem>

<TabItem value="suse" label="SuSE / OpenSuSE">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo zypper remove gyeeta-postgresdb
</CodeBlock>
</TabItem>

<TabItem value="fedora" label="Fedora Linux">
<CodeBlock language="sh">
sudo systemctl disable gyeeta-postgresdb; sudo dnf remove gyeeta-postgresdb
</CodeBlock>
</TabItem>

</Tabs>



### *Manual Tar Package install* {#tar-install}

If none of the above options can be used to install the Gyeeta PostgresDB component, a manual tarball extract and configure
can be used to install.

```bash title="Example Install Command"

mkdir ~/gyeeta
cd ~/gyeeta
curl -L https://github.com/gyeeta/postgresdb/releases/download/$( curl https://api.github.com/repos/gyeeta/postgresdb/releases/latest -s | grep tag_name | awk -F\" '{print $4}' )/postgresdb.tar.gz | tar xzf -
cd ./postgresdb

# Thereafter configure the DB
# ./db_install.sh <DB Data directory> <DB 'postgres' user password> <Postgres Port to Listen on> <Optional DB Max Shared buffers in MB>

./db_install.sh ./data dbPassword 10040

# Then start the DB
./rundb.sh start

```

## Using a non Gyeeta based Postgres DB install

We recommend only using Gyeeta's Postgres DB as the Gyeeta Postgres install also includes various utilities and functions needed by
the Madhava and Shyama servers. 

Using other Postgres installs or Postgres compliant DBs is currently not supported.


