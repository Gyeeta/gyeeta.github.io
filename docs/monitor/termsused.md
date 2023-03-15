---
id: termsused
title: Technical Terms Used
description: Terms Used in Gyeeta
---

# Terms Used in Gyeeta

Some of the terms referenced in the Web UI and REST APIs are explained below. 

<div class="card-demo">

<div class="card">
<div class="card__header">

## Service

</div>

<div class="card__body">
<p>
Service refers to a TCP Listener listening on a specific IP/port of a specific host. If an application say <code>redis</code> listens on IP 0.0.0.0 and ports 6379 and 6380, that will count as two separate services, one for each port. Service in Gyeeta is not the same as <code>Kubernetes Services</code>. For service applications run in containers (<code>docker</code> or <code>lxd</code>), the network namespace is also considered so that two containers listening on same IP/port but on different network namespaces will count as two seperate services.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Subsystem

</div>

<div class="card__body">
<p>
Gyeeta metric categories are referred to as <i>subsystem</i>. Main subsystems include : Service State, Process State, Network Inbound and Outbound, Host State, Cluster State. Subsystems are analogous to database tables.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Grouped Process {#grouped-process}

</div>

<div class="card__body">
<p>
Gyeeta groups parent and child processes which run the same executable as a <i>Grouped Process</i>. All the processes within a Grouped Process have the same name and are created from the same binary and have the same parent/grandparent process. If after a parent creates a child process and then the child <code>exec</code>utes a new binary, the child will not be grouped along with the parent as it becomes a new Grouped Process. Grouped Processes can contain a minimum of 1 process.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Grouped Process Name

</div>

<div class="card__body">
<p>
A <i>Grouped Process</i> is named from the executable binary used to spawn the process. For example, say <code>postgres</code> binary has been run by the shell. The newly created <i>Process Group</i> will have its name as <code>postgres</code>. The Process Name is truncated to max 15 bytes. For interpreted applications such as <code>java</code>, <code>python</code>, <code>node</code> or <code>ruby</code>, all processes will have the name set as the interpreter used such as <code>java</code> or <code>node</code>. This makes it difficult to figure which exact application is being referenced. In such cases, users should check the process <code>cmdline</code> field within the resultset returned by Gyeeta to figure the actual application.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Service Name

</div>

<div class="card__body">
<p>
Gyeeta assigns each service a <i>Service Name</i> based on the <i>Grouped Process Name</i> of the process which started the service listener. The Service Name is truncated to max 15 bytes. For interpreted applications such as <code>java</code>, <code>python</code>, <code>node</code> or <code>ruby</code>, the services will have the name set as the interpreter used such as <code>java</code> or <code>node</code>. This makes it difficult to figure which exact service is being referenced. In such cases, users can check either of the <code>Listener IP/Port</code>, <code>cmdline</code>, <code>tag</code>, <code>domain</code> fields within the resultset returned by Gyeeta to figure the actual service.

</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>



<div class="card">
<div class="card__header">

## Cluster Name

</div>

<div class="card__body">
<p>
Each Monitored Host is assumed to be a part of a related Host Group or a <code>cluster</code>, say dev, test1, prod, etc. While configuring theHost Monitor agent <code>partha</code>, users need to 
configure the appropriate <i>Cluster Name</i>. In <code>Kubernetes</code> terminology, the <i>Cluster Name</i> could be the <code>current-cluster</code> in <code>kubectl config</code>. The cluster
name should be set as the same for related hosts which will enable in quicker filtering and identifying Service Cluster Groups.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## QPS (Queries/sec)

</div>

<div class="card__body">
<p>
QPS refers to Queries per sec. A query is a request and response pair with a request being the incoming data to a Service and response being the outbound data.
Gyeeta will monitor the actual QPS and Response Times of <strong>all</strong> services without any sampling.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Response Time (Latency)

</div>

<div class="card__body">
<p>
Response Time also referred to as Latency, indicates the time in msec that a Service takes to respond to a prior request sent by a Client. If a response from the
Service is spread out (staggered) with some data being sent initially followed later by some other data, Gyeeta will only report the time taken by the service
to send the initial data. In other words, Response Time in Gyeeta refers to the time taken by the service to <i>start</i> sending the response data.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>


<div class="card">
<div class="card__header">

## CPU Delay

</div>

<div class="card__body">
<p>
CPU Delay refers to the time in msec a <i>Grouped Process</i> had to wait for a CPU to become available while active. Non-zero values give an indication of either CPU contention or CPU Resource Limits such as <code>Kubernetes Limits</code>.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## IO Delay

</div>

<div class="card__body">
<p>
IO Delay refers to the time in msec a <i>Grouped Process</i> had to wait for the completion of a prior initiated synchronous block I/O. Non-zero values may indicate a Disk IO contention or a slow Block device.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Memory Delay

</div>

<div class="card__body">
<p>
Memory Delay refers to the time in msec a <i>Grouped Process</i> had to wait for a Virtual Memory operation to complete. Non-zero values may indicate Memory contention due to Page Swapping or Memory Reclaiming.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## CPU Throttled (CPU Limited) Process

</div>

<div class="card__body">
<p>
Gyeeta flags a <i>Grouped Process</i> as <i>CPU Throttled</i> if processes within the group belong to a <code>cgroup</code> with limits set for CPU utilization such as <code>Kubernetes</code> limits. 
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Memory Limited Process

</div>

<div class="card__body">
<p>
Gyeeta flags a <i>Grouped Process</i> as <i>Memory Limited</i> if processes within the group belong to a <code>cgroup</code> with limits set for max Resident Memory utilization such as <code>Kubernetes</code> limits.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## cgroup Memory Util %

</div>

<div class="card__body">
<p>
For <i>Grouped Processes</i> which are <i>Memory Limited</i>, this metric shows the current Memory cgroup Utilization percent. If the percent is approaching 100%, 
an Out of Memory OOM event may be trigered. 
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>


<div class="card">
<div class="card__header">

## Active Conns (Connections)

</div>

<div class="card__body">
<p>
Active Connections refer to the connections which have inbound or outbound traffic active during the time period requested.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>


<div class="card">
<div class="card__header">

## Upstream Service

</div>

<div class="card__body">
<p>
If a service connects to another service as a TCP client, the service connected to will be the <i>Upstream Service</i>.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Downstream Service/Application

</div>

<div class="card__body">
<p>
If a service/process connects to another service as a TCP client, the client service/process will be the <i>Downstream Service/Application</i>.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Aggregation

</div>

<div class="card__body">
<p>
<i>Aggregation</i> refers to operations on a set of individual records to form a reduced (aggregated) resultset. In Gyeeta, Aggregation operates on a time
duration of 1 min or more. <i>Aggregation intervals</i> define the step size used for aggregation operations on the resultset. The main Aggregation Operations include
: <i>average</i>, <i>minimum</i>, <i>maximum</i>, <i>sum</i>, <i>percentile</i>, <i>count</i>.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Virtual IP / Virtual Port {#virtual-ip-port}

</div>

<div class="card__body">
<p>
Virtual IP/Port refers to an IP/Port that client applications will connect to and these clients will then be routed to one or more actual service instances.
In <code>Kubernetes</code> terminology, these refer to <i>Service IP/Ports</i>. In most cases, the Virtual IP/Port will act as a proxy using NAT or in-kernel
proxying.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>

<div class="card">
<div class="card__header">

## Service Group {#service-group}

</div>

<div class="card__body">
<p>
A Service Group in Gyeeta refers to 2 or more services which are assumed by Gyeeta to be related and part of a possible Cluster. 
For example, a set of <code>nginx</code> instances listening on same Virtual IP/Port would be considered as a Service Group. Gyeeta does not connect 
to any Cluster Orchestrator (such as <i>Kubernetes API server</i>) and instead tries to itself identify Service Groups based on a few conditions such as
two services being in the same Cluster, having same name and interconnected to each other or having same Virtual IP/Ports.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>


<div class="card">
<div class="card__header">

## Virtual IP Service Group

</div>

<div class="card__body">
<p>
A Virtual IP Service Group in Gyeeta refers to 2 or more services which have the same executable name and same Cluster Names and which have the same 
Virtual IP and Virtual Port. Gyeeta assumes these services act as a Service Group.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>


<div class="card">
<div class="card__header">

## Interconnected Service Group

</div>

<div class="card__body">
<p>
An Interconnected Service Group in Gyeeta refers to 2 or more services which have the same executable name and same Cluster Names and which are 
connected to one another in a <i>mesh</i> style network. Gyeeta assumes these services act as a Service Group.
</p>
</div>
</div>
<div style={{ marginTop : 20 }}> </div>



</div>


