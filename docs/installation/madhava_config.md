---
title: madhava Server Configuration
description: madhava Intermediate Server Configuration
keywords:
  - madhava
  - configuration
---

# Madhava Intermediate Server Configuration

Madhava is Gyeeta's Intermediate server. One or more Madhava instances serve as the Intermediate servers to which all
the monitored Hosts Partha instances will communicate with.

Madhava Servers will also connect to Shyama server and other Madhava instances in a mesh style network. 

Madhava server reads its configuration from a [JSON](https://en.wikipedia.org/wiki/JSON) file or as environment variables.
Environment variables will take precedence over the config file in case of a conflict.

A sample Madhava JSON config file is given [below](#sample-json).

The list of Config options include :

## Listen Port {#listener-port}

By default, Madhava will listen on TCP port 10038. The JSON field for the Listen Port 
is named `listener_port`. The corresponding environment variable is `CFG_LISTENER_PORT`.

This field is mandatory.

## Madhava Name {#madhava-name}

Each Madhava server is associated with its unique name. This name is also the DB name
to be used in PostgresDB.

The JSON field name is `madhava_name` and corresponding environment variable is `CFG_MADHAVA_NAME`.

This field is mandatory and max madhava name length is 64 bytes. 

## Shyama Hosts {#shyama-hosts}

This config param indicates the list of hostnames of the Shyama instances. The format 
of this param is a JSON array of one or more Shyama hostnames or IP addresses. 

This param is to be used along with [Shyama Ports](#shyama-ports) to indicate the Shyama servers.

If multiple Shyama instances are running due to High Availability, the number of elements in the 
JSON array will be more than 1. Under such cases, the Madhava instance will try connecting to only
the Active Shyama instance (Other instances being the Passive instances).

The JSON field name is `shyama_hosts` and corresponding environment variable is `CFG_SHYAMA_HOSTS`.

This field is mandatory. 

The Hostnames or IP Addresses mentioned in this option must be same as the
[Shyama Server Service Hostname](./shyama_config#service-hostname).

Example usage : [ "shyama1.local", "192.168.0.2" ] : Here 2 instances of Shyama are running in
Active Passive mode.

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

Example usage : [ 10037, 10037 ] : Here 2 instances of Shyama are running in Active Passive mode.

## Shyama Secret {#shyama-secret}

This is the configured [Shyama secret](./shyama_config#shyama-secret) phrase to be used to authenticate 
connecting Madhava instances.

The JSON field name is `shyama_secret` and corresponding environment variable is `CFG_SHYAMA_SECRET`.

This field is mandatory.

## Service Hostname {#service-hostname}

This indicates the Domain Name or IP Address that other components such as Partha Host Agents, Node Webserver
and other Madhava instances will use to connect to this Shyama instance.

In most instances this would be the Hostname of the Madhava server. But in cases where Virtual IP/Hostname/ NAT Translation is 
applicable such as Kubernetes, this would be the Virtual IP or Service Hostname.

:::note

The Madhava instance must be accessible to the Partha Host Monitor Agents and the Node Webserver through this
Service Hostname / IP. In case multiple Network Regions are active and multiple Madhava instances are assigned 
say one per Network Zone/Region, it is preferable though not mandatory that 
[VPC Network Peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) or some other 
such mechanism be active so that Madhava instances in other regions can connect to this Madhava instance in a 
mesh network topology.

:::

The JSON field is `service_hostname` and environment variable is `CFG_SERVICE_HOSTNAME`.

This field is mandatory.

## Service Port {#service-port}

This indicates the TCP Port that other components will use to connect to this Shyama instance.

In most instances this would be the Listener Port of the Shyama server. But in cases where Virtual Port or NAT Translation is 
applicable such as Kubernetes, this would be the Service Port.

The JSON field is `service_port` and environment variable is `CFG_SERVICE_PORT`.

This field is mandatory.

## Postgres Hostname {#postgres-hostname}

This indicates the Domain or IP address of the Postgres DB to be used by this Madhava instance.

The JSON field is `postgres_hostname` and environment variable is `CFG_POSTGRES_HOSTNAME`.

This field is mandatory.

## Postgres Port {#postgres-port}

This indicates the TCP port of the Postgres DB to be used by this Madhava instance.

The JSON field is `postgres_port` and environment variable is `CFG_POSTGRES_PORT`.

This field is mandatory.

## Postgres User {#postgres-user}

This indicates the Postgres Username to be used by this Madhava instance.

The JSON field is `postgres_user` and environment variable is `CFG_POSTGRES_USER`.

This field is mandatory.

## Postgres Password {#postgres-password}

This indicates the Postgres User Password to be used by this Madhava instance.

The JSON field is `postgres_password` and environment variable is `CFG_POSTGRES_PASSWORD`.

This field is mandatory.

## Postgres Storage History # Days {#postgres-storage-days}

This indicates the number of days of DB Hostory to be kept.

The JSON field is `postgres_storage_days` and environment variable is `CFG_POSTGRES_STORAGE_DAYS`.

This field is optional and default is 3 days.

## Cloud Operator Type {#cloud-type}

This field indicates the Cloud Operator this Madhava instance is running on. This is needed
to get the Network Region and Zone.

Currently supported Cloud Operator Metadata collection are : aws, gcp and azure. 

For other Cloud Operators or in case of own data centers, this field should be ignored.

The JSON field is `cloud_type` and environment variable is `CFG_CLOUD_TYPE`.

This field is optional.

## Network Region Name {#region-name}

This field must be used only if the preceding [Cloud Operator type](#cloud-type) is empty. This field
indicates the Network Region Name this Madhava host is operating under. 

The JSON field is `region_name` and environment variable is `CFG_REGION_NAME`.

This field is optional.

## Network Zone Name {#zone-name}

This field must be used only if the preceding [Cloud Operator type](#cloud-type) is empty. This field
indicates the Network Zone Name this Madhava host is operating under. 

The JSON field is `zone_name` and environment variable is `CFG_ZONE_NAME`.

This field is optional.

## Sample JSON Config file {#sample-json}

A sample Madhava JSON config file is provided below :

```json

{
		"listener_ip"		 	:	"0.0.0.0",
		"listener_port"			:	10038,
		"madhava_name"			:	"madhava_useast1",
		"service_hostname"		:	"madhava-useast1.local",
		"service_port"			:	10038,
		"cloud_type"			:	"aws",

		"shyama_hosts" 			:	[ "shyama1.local" ],
		"shyama_ports"			:	[ 10037 ],
		"shyama_secret"			:	"This is a secret",
		
		"postgres_hostname"		:	"db1.local",
		"postgres_port"			:	10040,
		"postgres_user"			:	"postgres",
		"postgres_password"		:	"dbPassword",
		"postgres_storage_days"	:	3
}
	

```

**Explanation of above sample config**

In the above sample config, the madhava server will listen on port 10038, with other Gyeeta componenets such 
as Partha Host Agents and other Madhava servers connecting to this Madhava instance at madhava-useast1.local:10038.

The Madhava instance will connect to Shyama server at shyama1.local:10037. 

The Madhava instance will connect to remote Postgres DB db1.local:10040 as `postgres` user with password 
as dbPassword and with max history of 3 days.


