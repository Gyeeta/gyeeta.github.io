---
title: shyama Server Configuration
description: Shyama Central Server Configuration
keywords:
  - shyama
  - configuration
---

# Shyama Central Server Configuration

Shyama server reads its configuration from a [JSON](https://en.wikipedia.org/wiki/JSON) file or as environment variables.
Environment variables will take precedence over the config file in case of a conflict.

A sample Shyama JSON config file is available in `sample_shyama_main.json` file in Shyama install dir.

The list of Config options include :

## Listen Port {#listener-port}

By default, Shyama will listen on TCP port 10037. The JSON field for the Listen Port 
is named `listener_port`. The corresponding environment variable is `CFG_LISTENER_PORT`.

This field is mandatory.

## Shyama Name {#shyama-name}

Each Shyama server is associated with its unique name. This name is also the DB name
to be used in PostgresDB.

The JSON field name is `shyama_name` and corresponding environment variable is `CFG_SHYAMA_NAME`.

This field is mandatory.

## Shyama Secret {#shyama-secret}

This is a secret phrase to be used to authenticate connecting Madhava and Node Webserver instances.

The JSON field name is `shyama_secret` and corresponding environment variable is `CFG_SHYAMA_SECRET`.

This field is mandatory.

## Service Hostname {#service-hostname}

This indicates the Domain Name or IP Address that other components will use to connect to this Shyama instance.

In most instances this would be the Hostname of the Shyama server. But in cases where Virtual IP/Hostname/ NAT Translation is 
applicable such as Kubernetes, this would be the Virtual IP or Service Hostname.

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

This indicates the Postgres Username to be used by this Shyama instance.

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
This field is needed as Shyama uses this field to send Alert metadata to external Alert Handlers
such as Pagerduty or Slack.

In case there is no external Reverse Proxy Webserver to used, this will then indicate the 
Hostname or Domain Name of the gyeeta-nodewebserver component. 

The JSON field is `webserver_url` and environment variable is `CFG_WEBSERVER_URL`.

This field is mandatory.

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

Currently supported Cloud Operator Metadata collection are : AWS, GCP and Azure. 

For other Cloud Operators or in case of own data centers, this field should be ignored.

The JSON field is `cloud_type` and environment variable is `CFG_CLOUD_TYPE`.

This field is optional.

## Network Region Name {#region-name}

This field must be used only if the preceding Cloud Operator type is empty. This field
indicats the Network Region Name this Shyama host is operating under. 

The JSON field is `region_name` and environment variable is `CFG_REGION_NAME`.

This field is optional.

## Network Zone Name {#zone-name}

This field must be used only if the preceding Cloud Operator type is empty. This field
indicats the Network Zone Name this Shyama host is operating under. 

The JSON field is `zone_name` and environment variable is `CFG_ZONE_NAME`.

This field is optional.

## Sample JSON Config file 

A sample JSON config file is provided below :

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
		"postgres_password"		:	"gyeeta",
		"postgres_storage_days"		:	3,

		"webserver_url"			:	"http://gyeetaweb.local:10039"
}	


```

