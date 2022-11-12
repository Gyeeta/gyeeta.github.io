---
title: Partha Agent Configuration
description: Partha Host Agent Configuration
keywords:
  - partha
  - configuration
---

# Partha Host Agent Configuration

The Partha Host Agent is to be installed on each host that requires to be monitored. The Partha Agent will
communicate with the Shyama Central Server and the assigned Madhava server.

Partha agent reads its configuration from a [JSON](https://en.wikipedia.org/wiki/JSON) file or as environment variables.
Environment variables will take precedence over the config file in case of a conflict.

A sample Partha JSON config file is given [below](#sample-json).

The list of Config options include :

## Cluster Name {#cluster-name}

Each Monitored host is assumed to be part of a Cluster. This field indicates the Cluster name this host
is part of. Cluster names are symbolic and are used internally by Madhava servers to detect Network
Flow dependencies.

The JSON field name is `cluster_name` and corresponding environment variable is `CFG_CLUSTER_NAME`.

This field is mandatory and max cluster name length is 64 bytes. 


## Shyama Hosts {#shyama-hosts}

This config param indicates the list of hostnames of the Shyama instances. The format 
of this param is a JSON array of one or more Shyama hostnames or IP addresses. 

This param is to be used along with [Shyama Ports](#shyama-ports) to indicate the Shyama servers.

If multiple Shyama instances are running due to High Availability, the number of elements in the 
JSON array will be more than 1. Under such cases, the Partha agent will try connecting to only
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


## Is Kubernetes {#is-kubernetes}

This boolean field indicates whether the Host to be monotored is part of a Kubernetes Cluster. This
field is used to extract the Kubernetes Pod Name tags for the Host Processes.

For Helm Chart installs, this parameter is set to `true` by default. For other install options, the
default is `false`

The JSON field name is `is_kubernetes` and corresponding environment variable is `CFG_IS_KUBERNETES`.

This field is optional and can contain values of either `true` or `false`.

## Service Response Sampling Percent {#sampling-percent}

The Partha Agent will collect Queries/sec and Response Time (Latency) for each TCP Listener (Service).
This field indicates what percent of the Queries should be checked for calculating the statistics.

The default percent is 100% (No sampling). Users can specify minimum of 10%.

The JSON field name is `response_sampling_percent` and corresponding environment variable is `CFG_RESPONSE_SAMPLING_PERCENT`.

This field is optional and can contain integer values from 10 to 100.


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
		"cluster_name"				:	"cluster1",
		"cloud_type"				:	"aws",

		"shyama_hosts" 				:	[ "shyama1.local" ],
		"shyama_ports"				:	[ 10037 ],

		"response_sampling_percent"	:	100,
		"is_kubernetes"				:	true
	}

```

