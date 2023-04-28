---
title: shyama Server Configuration
description: Shyama Central Server Configuration
keywords:
  - shyama
  - configuration
---

# Shyama Central Server Configuration

Shyama is Gyeeta's Central Server interacting with all other componenets. In addition, it also acts as the Gyeeta Alert Manager.

Shyama Server is the only component in Gyeeta which will interact with all other components.

Shyama server reads its configuration from a [JSON](https://en.wikipedia.org/wiki/JSON) file or as environment variables.
Environment variables will take precedence over the config file in case of a conflict.

A sample Shyama JSON config file is given [below](#sample-json).

The list of Config options include :

## Listen Port {#listener-port}

By default, Shyama will listen on TCP port 10037. The JSON field for the Listen Port 
is named `listener_port`. The corresponding environment variable is `CFG_LISTENER_PORT`.

This field is mandatory.

## Shyama Name {#shyama-name}

Each Shyama server is associated with its unique name. This name is also the DB name
to be used in PostgresDB.

The field value must begin with the keyword `shyama` (For example, `shyama1`).

The JSON field name is `shyama_name` and corresponding environment variable is `CFG_SHYAMA_NAME`.

This field is mandatory and max shyama name length is 64 bytes. 

## Shyama Secret {#shyama-secret}

This is a secret phrase to be used to authenticate connecting Madhava instances.

The JSON field name is `shyama_secret` and corresponding environment variable is `CFG_SHYAMA_SECRET`.

This field is mandatory.

## Service Hostname {#service-hostname}

This indicates the Domain Name or IP Address that other components will use to connect to this Shyama instance.

In most instances this would be the Hostname of the Shyama server. But in cases where Virtual IP/Hostname/ NAT Translation is 
applicable such as Kubernetes, this would be the Virtual IP or Service Hostname.

:::note

The Shyama instance must be accessible to all other Gyeeta components through this
Service Hostname / IP. In case multiple Network Regions or Zones are active, it is mandatory that components
in other Network Regions / Zones can connect to this Shyama instance.
[VPC Network Peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) or some other 
such mechanism can be used to enable this.

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

This indicates the Domain or IP address of the Postgres DB to be used by this Shyama instance.

The JSON field is `postgres_hostname` and environment variable is `CFG_POSTGRES_HOSTNAME`.

This field is mandatory.

## Postgres Port {#postgres-port}

This indicates the TCP port of the Postgres DB to be used by this Shyama instance.

The JSON field is `postgres_port` and environment variable is `CFG_POSTGRES_PORT`.

This field is mandatory.

## Postgres User {#postgres-user}

This indicates the Postgres Username to be used by this Shyama instance. In most cases,
this value would be `postgres`.

The JSON field is `postgres_user` and environment variable is `CFG_POSTGRES_USER`.

This field is mandatory.

## Postgres Password {#postgres-password}

This indicates the Postgres User Password to be used by this Shyama instance.

The JSON field is `postgres_password` and environment variable is `CFG_POSTGRES_PASSWORD`.

This field is mandatory.

## Postgres Storage History # Days {#postgres-storage-days}

This indicates the number of days of DB Hostory to be kept.

The JSON field is `postgres_storage_days` and environment variable is `CFG_POSTGRES_STORAGE_DAYS`.

This field is optional and default is 3 days.

## Webserver URL {#webserver-url}

This indicates the URL of the Gyeeta Webserver that external clients will use to connect. 
This field enables the user to Acknowledge or Resolve Alerts using external Alert Notfication channels such as Pagerduty or Slack.

In case there is no external Reverse Proxy Webserver to used, this will then indicate the 
Hostname or Domain Name of the gyeeta-nodewebserver component. 

The JSON field is `webserver_url` and environment variable is `CFG_WEBSERVER_URL`.

This field is optional and if not specified the Webserver hostname is set as localhost.
Sample Usage : http://192.168.0.1:10039

## Minimum Madhava Instances {#min-madhava}

This field indicates the minimum number of Madhava instances that should first register with this
Shyama instance before Shyama server assigns a Madhava server to Partha Host Agent.

If the number of mnimum Madhava instances have not connected to Shyama, no monitoring data will be
collected.

The JSON field is `min_madhava` and environment variable is `CFG_MIN_MADHAVA`.

This field is optional and default minimum Madhava instances is 1.

## Cloud Operator Type {#cloud-type}

This field indicates the Cloud Operator this Shyama instance is running on. This is needed
to get the Network Region and Zone.

Currently supported Cloud Operator Metadata collection are : aws, gcp and azure. 

For other Cloud Operators or in case of own data centers, this field should be ignored.

The JSON field is `cloud_type` and environment variable is `CFG_CLOUD_TYPE`.

This field is optional.

## Network Region Name {#region-name}

This field must be used only if the preceding [Cloud Operator type](#cloud-type) is empty. This field
indicates the Network Region Name this Shyama host is operating under. 

The JSON field is `region_name` and environment variable is `CFG_REGION_NAME`.

This field is optional.

## Network Zone Name {#zone-name}

This field must be used only if the preceding [Cloud Operator type](#cloud-type) is empty. This field
indicates the Network Zone Name this Shyama host is operating under. 

The JSON field is `zone_name` and environment variable is `CFG_ZONE_NAME`.

This field is optional.

## Sample JSON Config file {#sample-json}

A sample Shyama JSON config file is provided below :

```json
{
		"listener_ip"	 		:	"0.0.0.0",
		"listener_port"			:	10037,
		"service_hostname"		:	"shyama1.local",
		"service_port"			:	10037,
		"cloud_type"			:	"gcp",

		"shyama_name"			:	"shyama1",
		"shyama_secret"			:	"This is a secret",

		"min_madhava"			:	1,
		
		"postgres_hostname"		:	"dbshyama1.local",
		"postgres_port"			:	10040,
		"postgres_user"			:	"postgres",
		"postgres_password"		:	"dbPassword",
		"postgres_storage_days"	:	3,

		"webserver_url"			:	"http://gyeetawebhost.local:10039"
}	


```

**Explanation of above sample config**

In the above sample config, the Shyama server will listen on port 10037, with other Gyeeta componenets such 
as Madhava servers, Partha Host Agents connecting to this Shyama instance at shyama1.local:10037.

The Shyama instance will connect to remote Postgres DB dbshyama1.local:10040 as `postgres` user with password 
as dbPassword and with max history of 3 days.

Shyama servers will start accepting Partha Host Agents only after at least 1 Madhava server has connected to this
Shyama instance (`min_madhava`).


