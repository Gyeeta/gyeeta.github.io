---
title: TL;DR Quick Server Install
description: TL;DR Quick Server Install
keywords:
  - tldr
  - installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# TL;DR Quick Server Installation

Gyeeta provides a single command TLDR Quick Install method to install all Server Components with no other 
configuration requirements. This provides a very quick way to install the Gyeeta server components on a single host.

:::info

The TL;DR script will install the native deb/rpm packages and only work on Linux distributions supporting these
native package formats. For other environments, users will need to use other install methods such as Docker containers,
Kubernetes Helm Charts or manual tarball extraction.

This script also requires Internet access so that the required packages can be downloaded.

:::

The components that will be installed on a single host as part of this script are :

- One instance of Postgres DB which will be shared between Shyama and Madhava servers
- [Shyama Central Server](../architecture#central-server-shyama)
- One instance of [Madhava Intermediate Server](../architecture#intermediate-server-madhava)
- [Node Webserver](../architecture#node-webserver)
- [Alert Action Agent](../architecture#alert-action-agent)

Users will then need to install [Partha Agents](../architecture#host-monitor-agent-partha) on all hosts which need to be monitored.

The TLDR Quick Install will not install any Failover (High Availability) Components and if required, users will need
to install the Failover instances separately as per the [Failover Handling](./failover) link.


## Inputs needed for TLDR Quick Install script

- Postgres DB Data directory path which should have adequate Free Disk Space (minimum 10 GB)
- Postgres DB `postgres` user Password string which will be the DB password
- Web UI `admin` user Password string which will be used as a password for logging using a Web Browser or REST APIs

## Command to run the TLDR Quick Install Script

```bash title="Sample Command for TLDR Quick Install"

curl -o /tmp/install-gyeeta-all-quick.sh -s https://gyeeta.io/packages/install-gyeeta-all-quick.sh && \
	sudo bash /tmp/install-gyeeta-all-quick.sh /opt/gyeeta/postgresdb/data dbPassword adminPassword

```

*Please substitute the appropriate DB dir path, DB `postgres` user password needed and Web UI `admin` user password in
the above command before running it in your environment.*

Note in the above command, the DB Data dir specified (`/opt/gyeeta/postgresdb/data`) will be created if it does not exist. 

Please ensure that the DB Data dir has adequate Free Disk Space. Please refer to 
[Madhava Postgres Disk Space Requirements](./postgresdb_install#madhava-dbspace).

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at 
[SHA256 file](https://gyeeta.io/packages/install-gyeeta-all-quick.sh.sum).


:::info

The above command will not install the Partha Host Agent. Users need to run the Partha Installs using
any of the supported [Partha Install mechanisms](./partha_install).

The TLDR Quick Install script will also create a sample Partha Config file which can be used as an input Config file for the 
Partha installs.

Users can skip all subsequent sections pertaining to Installation of Gyeeta Server components and Alert Agent.

:::


## Network and Firewall Requirements

The server components installed by the TLDR Quick Install script will listen on the following ports :

- Shyama Server on port 10037
- Madhava Server on port 10038
- Node Webserver on port 10039

Firewall rules must allow inbound access for these 3 ports. 

The Postgres DB will listen on port 10040. If this host Postgres DB will also be used by Madhava servers installed on other
hosts, then external hosts inbound access to port 10040 will need to be allowed. 

Partha Host Monitors will connect to both Shyama (port 10037) and Madhava (port 10038) and the Webserver will be connected to from 
Browsers to access the Web UI.

Also, the Hostname of the host on which the TLDR script is run will need to be resolved from external hosts. In other words,
the hostname needs to be a cluster wide valid hostname.

If Alert Actions (Notifications) need to access an external Server on the Internet, say a PagerDuty or Slack server, then Internet
access will be needed from this Install Host as well.

## Connecting to the Gyeeta Webserver using a browser

After the TL;DR install script runs successfully, users can access the Web UI by pointing their browsers to 

`http://<Hostname or IP of TLDR server>:10039`

The login username to be used is `admin` and the password would be the password specified while running the TLDR script. In the above
sample command, `adminPassword` was the password specified.

Gyeeta Node Webserver is by default an HTTP server and listening on default port 10039. Users can configure the Web Server to use HTTPS by providing
the TLS certificates, or change the HTTP port by editing the `/opt/gyeeta/nodewebserver/.env` config and restarting gyeeta-nodewebserver. 


## Max Number of Monitored Hosts

The TLDR Quick Install script only installs a single instance of Madhava Intermediate Server. This implies that the maximum number of 
Monitored Hosts that can be monitored will be limited by the CPU and Memory specs of the host on which the TLDR Quick Install script
is run.

It is recommended that the TLDR Quick Install script be run on a host with adequate CPU and RAM specs as per the max Monitored
Hosts in your environment.

A single Madhava instance can monitor upto *50 monitored hosts* for a smaller host with 2 CPU cores and 4 GB RAM whereas a host with
with 16 cores and 64 GB RAM can monitor upto *400 monitored hosts*.

In case more number of Monitored Hosts are expected, other instances of Madhava need to be installed either on same host or some other
host.


## Stopping/Starting/Uninstalling the Quick Install components

### Postgres DB

The `gyeeta-postgresdb` component is installed at `/opt/gyeeta/postgresdb`.

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

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
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


### Shyama Server

The `gyeeta-shyama` component is installed at `/opt/gyeeta/shyama`. The Shyama logs can be 
accessed at `/opt/gyeeta/shyama/log/shyama.log`.

To change the Shyama settings, users can edit the `/opt/gyeeta/shyama/cfg/shyama_main.json` config file.


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

<TabItem value="rhel" label="RHEL / CentOS / Amazon Linux">
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


### Madhava Server

The `gyeeta-madhava` component is installed at `/opt/gyeeta/madhava`. The Madhava logs can be 
accessed at `/opt/gyeeta/madhava/log/madhava.log`.

To change the Madhava settings, users can edit the `/opt/gyeeta/madhava/cfg/madhava_main.json` config file.


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


### Node Webserver

The `gyeeta-nodewebserver` component is installed at `/opt/gyeeta/nodewebserver`. 

To change the Webserver settings such as the Webserver port or admin password, users can edit the `/opt/gyeeta/nodewebserver/.env` env file.

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


### Alert Agent

The `gyeeta-alertaction` component is installed at `/opt/gyeeta/alertaction`. 

To change the Alert Agent settings, users can edit the `/opt/gyeeta/alertaction/.env` env file.

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


