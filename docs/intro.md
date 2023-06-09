---
id: introduction
title: Introduction
description: Introduction to Gyeeta
slug: /
---

# Introduction

***Gyeeta*** is a *100% [Open Source](https://github.com/gyeeta/gyeeta) (GPLv3)* and *Free* eBPF based Observability tool for Linux.  

## Salient Features

- Gyeeta provides all the 4 [Golden Signals of Monitoring](https://sre.google/sre-book/monitoring-distributed-systems) namely, 
Response Times or Latency, Traffic, Errors, and Saturation. 
- Monitor Hosts, Services, Processes at *Global* scale (scales to *tens of thousands* of hosts).
- Completely Open Source including Agent and Server components. Free to use *forever*.
- Completely non-intrusive monitoring using a combination of [eBPF](https://ebpf.io/) and Kernel Statistics.
- All Data In-House (On Prem). No external data transfer. 
- Monitor Kubernetes or any other Cluster orchestrators.

## Key Observability Capabilities

1. Service Level Statistics such as Queries/sec, Response Times (Latency) and HTTP Errors (if HTTP based) with no manual inputs or integrations.
   Monitors binary / proprietary network protocol or non HTTP Service statistics as well.
2. Host and Process Level *CPU starvation, Virtual Memory or IO Bottlenecks*. 
3. Service Maps, Process and Host level Network Flows with info on all Services and Processes in near realtime.
4. Query Global Aggregated Statistics from multiple hosts and servers using a single query either from Web UI or REST APIs.
5. Self Learning Algorithms that can detect Anomalies, Contention or Degradation without any manual inputs. 
6. Advanced Cluster, Service or Process Level Alerts using a powerful Web UI or REST APIs.
7. Monitors all applications without any instrumentation or tapping irrespective of the programming language used.

Gyeeta does not use Log Analysis or APM Tracing and instead relies on eBPF and Kernel Statistics. 

## Why Gyeeta?

- Few Free and Open source tools are available which will non-intrusively monitor infrastructure and services with minimal overhead and 
  without manual configuration. 

- Gyeeta is completely non-intrusive and uses a combination of eBPF and Kernel Statistics. No Application changes are needed. Gyeeta can monitor 
  both HTTP and non-HTTP based services and can provide statistics such as Queries/sec, Response Times, Network Throughputs, Service Network 
  Flows for any service (even proprietary or TLS encrypted).

- Gyeeta does not connect to any application. Gyeeta does not insert any probes, taps or instruments any 
  application nor does it use any tracing such as OpenTracing. This makes Gyeeta completely non-intrusive and does not require any 
  configuration to monitor any service.

- Commercial SaaS tools exist with varying degrees of Metrics and Observability capabilities but are expensive both in terms of cost 
  and Host CPU, Memory and IO resources.

- Gyeeta is meant to be a lightweight tool which can be deployed on thousands of hosts with minimal configuration. Gyeeta being a free, 
  optimized (C++ based) and 100% Open source tool, users can deploy Gyeeta on all of their data centers or Cloud Environments without 
  worrying about Observability expenses.

- Gyeeta works on all Linux Kernels released since 2016 (Linux Kernels 4.4 or higher).


