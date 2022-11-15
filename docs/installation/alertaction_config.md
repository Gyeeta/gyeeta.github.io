---
title: Alert Action Agent Configuration
description: Alert Action Agent Configuration
keywords:
  - alert
  - agent
  - configuration
---

# Alert Action Agent Configuration

The Alert Action Agent is the application which is responsible for sending the Alert Notifications (Actions). The Alert Agent will
communicate only with the Shyama Central Server and the Notification Servers as per Alert Config (such as Slack, Pagerduty).

Alert Agent reads its config options as environment variables or from a .env environment variable file.

A sample Alert Agent .env config file is given [below](#sample-env).

The list of Config options include :


## Shyama Hosts {#shyama-hosts}

This config param indicates the list of hostnames of the Shyama instances. The format 
of this param is a JSON array of one or more Shyama hostnames or IP addresses. 

This param is to be used along with [Shyama Ports](#shyama-ports) to indicate the Shyama servers.

If multiple Shyama instances are running due to High Availability, the number of elements in the 
JSON array will be more than 1. Under such cases, the Alert agent will try connecting to only
the Active Shyama instance (Other instances being the Passive instances).

The JSON field name is `shyama_hosts` and corresponding environment variable is `CFG_SHYAMA_HOSTS`.

This field is mandatory. 

The Hostnames or IP Addresses mentioned in this option must be same as the
[Shyama Server Service Hostname](./shyama_config#service-hostname).

Example usages : 

[ "shyamahost1.local" ] : Here a single instance of Shyama is specified.

[ "shyama1.local", "192.168.0.2" ] : Here 2 instances of Shyama are running in Active Passive mode.

## Shyama Ports {#shyama-ports}

This config param indicates the list of TCP ports of the Shyama instances. The format 
of this param is a JSON array of one or more Shyama TCP ports.

This param is to be used along with [Shyama Hosts](#shyama-hosts) to indicate the Shyama servers.
The number of elements in this JSON array must match the number of elements specified in 
[Shyama Hosts](#shyama-hosts). 

The JSON field name is `shyama_ports` and corresponding environment variable is `CFG_SHYAMA_PORTS`.

This field is mandatory.

The TCP Ports mentioned in this option must be same as the 
[Shyama Server Service Port](./shyama_config#service-port).

Example usages : 

[ 10037 ] : Here a single instance of Shyama is specified.

[ 10037, 10037 ] : Here 2 instances of Shyama are running in Active Passive mode.


## Sample Alert Agent env Config file {#sample-env}

A sample env config file is provided below :

```bash

CFG_SHYAMA_HOSTS='[ "shyama1.local" ]'
CFG_SHYAMA_PORTS='[ 10037 ]'

# If CFG_LOGFILE not specified output is to stdout
# CFG_LOGFILE=/var/tmp/gyeeta_action.log

```

The above sample config specifies the Shyama server as a single instance located at shyama1.local:10037.


