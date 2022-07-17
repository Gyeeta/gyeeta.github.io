---
id: netflows
title: Network Flows / Service Maps
description: Network Flows / Service Maps
---

# Network Flows / Service Maps

Service Maps refer to the realtime Visual representation of the Network Traffic to and from the Services monitored.

## Querying Network Flows

Gyeeta separates the Network Flows inbound to a Service from the Network Flows outbound from a Client Application.

The Inbound Network Flows to any Service is available from either the *activeconn* or *extactiveconn* subsystems.
The Outbound Network Flows from any Client Application is available from either the *clientconn* or *extclientconn* subsystems.

This implies that to get the complete set of all inbound connections to a service and outbound connections from that service
requires multiple API calls.

:::info

*activeconn* or *extactiveconn* always require a Service as input and act on Services alone whereas *clientconn* or
*extclientconn* APIs always require a Grouped Process as input as they act on a Client Application.

:::

## Web UI Network Flows Process

The Web UI Network Flow pages execute multiple calls to show the complete Service Map.

![Network Flows](/img/procflow.png)

For example, for the snapshot shown above, the Web UI will execute the following steps :

1. First *activeconn* API is called for the Service requested. This will fetch all inbound connections for the time requested.
2. Next *svcprocmap* API is called for the Service requested. This will fetch all Grouped Processes for the Service requested.
3. Thereafter, for all the Grouped Processes of that Service, *clientconn* APIs are called to get the complete set of outbound connections.

## Limitations in Network Flow Analysis

For connections spanning multiple hosts, Gyeeta will require Network Connections to be at least 30 sec for the Client Application and Service
endpoint analysis. Short Lived connections (less than 30 sec) across hosts will have only one endpoint identified. This limitation is only for
connections across hosts. Connections within the same host have no such limitation.

For example, consider a Client Application *App1* connecting to a remote host Service say *Svc1*. If the connection from *App1* to *Svc1* lasts
less than 30 sec, then the *clientconn* record will have the application *App1* statistics but with the Service listed as 'Unresolved'.
Similarly, the *activeconn* record for *Svc1* will have all the *Svc1* connection statistics, but the Client application will be listed as 'Unresolved'.


