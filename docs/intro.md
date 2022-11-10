---
id: introduction
title: Introduction
description: Introduction to Gyeeta
slug: /
---

# Introduction

***Gyeeta*** is a non intrusive, *100% Open Source (GPLv3)* and *Free* Infrastructure, Services and Process Level monitor (*Linux* only).  

## Salient Features

- Monitor Hosts, Services, Processes at *Global* scale (scales to *tens of thousands* of hosts).
- Completely Open Source including Agent and Server components. Free to use *forever*.
- Completely non-intrusive monitoring using a combination of [eBPF](https://ebpf.io/) and Kernel Statistics.
- All Data In-House (On Prem). No external data transfer. 
- Monitor Kubernetes and other Cloud Native Cluster orchestrators.

## Key Observability Capabilities

1. Service Level Statistics such as Queries/sec, Response Times (Latency) and HTTP Errors (if HTTP based) with no manual inputs or integrations.
   Monitors binary / proprietary network protocol or non HTTP Service statistics as well.
2. Query Global Aggregated Statistics from multiple servers using a single query either from Web UI or REST APIs.
3. Self Learning Algorithms that can detect Anomalies, Contention or Degradation without any manual inputs. 
4. Advanced Cluster, Service or Process Level Alerts using a powerful Web UI or REST APIs.
5. Detect Process Level *CPU starvation, Virtual Memory or IO Bottlenecks*. 
6. Monitors all applications without any instrumentation or tapping irrespective of the programming language used.
7. Auto Detect Service Dependencies and Service Network Flows (Service Maps).

## Why Gyeeta?

- Few Free and Open source tools are available which will non-intrusively monitor infrastructure and services with minimal overhead and 
  without manual configuration.

- Commercial SaaS tools exist with varying degrees of Metrics and Observability capabilities but are expensive both in terms of cost 
  and Host CPU, Memory and IO resources.

- Gyeeta is meant to be a lightweight tool which can be deployed on thousands of hosts with minimal configuration. Gyeeta being a Free 
  and 100% Open source tool, users can deploy Gyeeta on all their data centers or Cloud Environments without worrying about Monitoring costs.

- Gyeeta is completely non-intrusive and uses a combination of eBPF and Kernel Statistics. No Application changes are needed. Gyeeta can monitor 
  both HTTP and non-HTTP based applications without Tracing or inserting probes.

- Gyeeta works on all Linux Kernels released since 2016 (Linux Kernels 4.4 or higher).


