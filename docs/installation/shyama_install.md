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

### Install using Shell script 

Users can download a shell script that takes care of the installation and configuration of the Shyama instance.
Before installing Shyama, users need to craete a JSON config file as per the [Shyama Config](./shyama_config).


```bash
curl -o /tmp/install-gyeeta-shyama.sh -s https://gyeeta.io/packages/install-gyeeta-shyama.sh
```

Then run the install script as : 

`sudo bash /tmp/install-gyeeta-shyama.sh <Path to Shyama Config fiel in JSON format>`

```bash title="Example Install Command"

sudo bash /tmp/install-gyeeta-shyama.sh /tmp/shyama.json

```

The install script SHA256 can be checked before installing. The SHA256 of the install script is available at [SHA256 file](https://gyeeta.io/packages/install-gyeeta-shyama.sh.sum)

### Running as a Docker container {#docker}

A JSON config file is first needed as per [Shyama Config](./shyama_config)

```bash

docker run --rm -td --name shyama --read-only --user 1001:1001 -p 10037:10037 --env CFG_MAIN_JSON=/tmp/shyama.json -v /tmp/shyama.json:/tmp/shyama.json:ro ghcr.io/gyeeta/shyama start

```

In the above command, /tmp/shyama.jso file is already presnet in the main host.

### Kubernetes Helm Chart {#helm-chart}

Kubernetes 1.18 or higher is needed along with Helm v3.

Execute the command : 

```bash

helm repo add gyeeta https://gyeeta.io/helmcharts

helm show values gyeeta/shyama > /tmp/shyama.yaml

```

Thereafter you can edit the /tmp/shyama.yaml file if you need to change any option. 

Therafter, install the Shyama Helm chart using :

```bash

helm install --namespace gyeeta --create-namespace shyama1  gyeeta/shyama -f /tmp/shyama.yaml

```

