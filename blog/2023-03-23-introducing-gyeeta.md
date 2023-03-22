---
slug: introducing-gyeeta
title: Introducing Gyeeta
authors: [kvdevel]
tags: [introduction, announcement, welcome]
---

Hello Everyone,

We are excited to announce the public release of [Gyeeta](https://gyeeta.io).

Gyeeta is a free, eBPF based Open Source (GPLv3) Observability tool which provides the following capabilities :

- Service Level Statistics such as Queries/sec (Requests/sec), Response Times (Latency) and HTTP Errors (if HTTP based) with no manual inputs or integrations. Monitors binary / proprietary network protocol or non HTTP Service statistics as well.
- Service Maps, Process and Host level Network Flows with info on all Services and Processes.
- Detection of Host and Process Level CPU starvation, Virtual Memory or IO Bottlenecks. 
- Monitor all applications without any instrumentation or tapping irrespective of the programming language used.
- Self Learning Algorithms that can detect Anomalies, Contention or Degradation without any manual inputs. 
- Advanced Cluster, Service or Process Level Alerts using a powerful Web UI or REST APIs.
- All Data In-House (On Prem). Not a SaaS tool. 
- All Linux Kernels released since 2016 supported (Linux Kernels v4.4.x or higher).

Gyeeta is optimized (C++ based) for minimal CPU and Memory requirements. 

We felt there was a need for a product like Gyeeta for the following reasons :

- Few tools exist currently in the Free and Open source Observability space which can be quickly deployed
  without application changes and without any manual configuration.

- Commercial SaaS tools exist which utilize a combination of APM, Tracing, Kernel Monitors, eBPF
  to provide a rich variety of metrics but these products are expensive both in terms of costs as
  well as Host CPU, Memory and IO usage and require manual configuration in many cases as well.

We hope you try Gyeeta in your environment and find it a useful tool.

**Some snapshots of Gyeeta Web UI :**

![Service State Monitor](/img/servicemon.png)

![Process Network Flow Dashboard](/img/procflow.png)

![Process States](/img/procstate1.png)


**Important links related to Gyeeta :**

Website : [https://gyeeta.io](https://gyeeta.io)

Github Source : [https://github.com/Gyeeta/gyeeta](https://github.com/Gyeeta/gyeeta)

Documentation : [https://gyeeta.io/docs](https://gyeeta.io/docs)

Live Web UI Demo : [Live Demo](https://gyeeta.io/docs/livedemo)

Youtube Channel : [Gyeeta on Youtube](https://youtube.com/@gyeeta)


