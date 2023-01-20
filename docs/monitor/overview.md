---
id: overview
title: Monitoring Features & Limitations
description: Monitoring Features & Limitations
---

# Monitoring Features & Limitations

## Monitoring using eBPF and Kernel Statistics {#ebpf-kernel}

Gyeeta monitors the Application Performance in a completely non-intrusive manner using a combination of eBPF and Kernel Statistics to monitor the host. 
Gyeeta does not connect to any application. Gyeeta does not insert any probes / taps or instrument any application nor does it use any tracing such as OpenTracing.  

This implies that no code changes are needed in the applications and the application may use any programming language. This also ensures that there is no 
possibility of Gyeeta crashing or degrading the application as it is completely non-intrusive.

## Service / Process Discovery without any configuration {#service-discovery}

Gyeeta monitoring is completely automated and Gyeeta self discovers *all* TCP services in a host along with its clients and dependencies with *no code changes* 
and *no configuration inputs*. The Gyeeta Host Agent `partha` needs only a few config options such as `shyama` service IP/ports and Cluster Name and no other 
config inputs. 

Gyeeta will monitor all processes running on the host. If a service spawns multiple processes, all these process statistics are clubbed together while 
reporting the Service statistics.


## Integrations currently not supported

Gyeeta does not monitor the Performance statistics exposed by the application but figures out the statistics itself without any interaction with the application.
Gyeeta does not show Integration metrics exposed by platforms/applications such as AWS, Prometheus, Java, StatsD, Kubernetes directly. 
Instead, Gyeeta monitors platforms such as Kubernetes and applications using algorithms and corelating process and service level statistics. 

## Log Monitoring not supported

Gyeeta does not monitor logs exposed by the application.

## Only TCP Services Monitored

Gyeeta does not currently monitor UDP or Unix Domain Socket based Service Statistics.

## HTTP and Non-HTTP based Service Statistics {#http-nonhttp-stats}

Gyeeta reports the following main statistics for *all* services : Queries/sec, Response Time (Latency), Network Throughputs, Active Connection Counts, Process Statistics 
such as CPU, Memory utilization and Resource (CPU, Memory, IO) Bottleneck Delays. 

Even if the service is non-HTTP based and uses a binary network protocol or is a proprietary service, Gyeeta will report all these statistics seamlessly.

For HTTP and gRPC (without TLS) services, Gyeeta will additionally report Server and Client Error Counts. Currently for HTTPS (SSL/TLS encrypted) services, Error counts are 
not reported, although all other statistics will still be reported.

Additionally, Gyeeta will algorithmically auto detect Service degradation or contention and give a probable reason for the degradation.

## Monitored Subsystems

Gyeeta monitors the following main metric categories (subsystems) :

- ***Service State*** which includes metrics such as Service Queries/sec, Response Times, Network Throughputs and Anomaly Detection

- ***Process State*** which includes metrics such as Process CPU, Memory, TCP traffic, Delay Statistics and Anomaly Detection

- ***Network Flows*** which includes coalescing flows across hosts and mapping Clients to Servers (Service maps)

- ***Host State*** which includes monitoring Host CPU, Memory, Host level Service and Process aggregations and Delay Statistics

- ***Cluster State*** which includes Cluster level Service, Process and Host aggregations

Gyeeta terms these categories as ***subsystems***. 

Gyeeta will tag a state to every service, process, host and cluster such as `Idle`, `Good`, `OK`, `Bad` or `Severe` based on an algorithm that 
considers prior history and resource contention or saturation. This helps to quickly search for entities with issues.

## Query Mechanism

Gyeeta can be queried either using its Web UI or using REST APIs. Queries spanning multiple subsystems are not supported.
For example, a query that requests service state along with host state in a single resultset is not supported.

Queries can span multiple hosts with optional aggregation at custom time durations for queries of a single subsystem. 
This feature is extremely powerful as custom aggregation queries can aggregate statistics of services across thousands of hosts with a single query.

Query Responses are in JSON formats. PromQL querying is currently not supported though planned for a later release. 
The Web UI internally uses the REST APIs exposed to query the data.

## Alerts

Alerts in Gyeeta can be either Realtime alerts or based on an Aggregation Query for a prior interval. Alerts can be set on any of the subsystems mentioned above. 

Realtime alerts are near instantaneous such as a service response time of over 100 msec and over twice the p95 baseline or on HTTP 5xx server errors for a service 
extending to at least 3 Repeat Intervals.

Aggregated Query Alerts can fire alerts based on an aggregation query criteria for example, alert if any `redis` instance has state `Severe` for over 3 minutes.


