---
id: searchshow
title: Search Showcase
description: Gyeeta Search Showcase
---

# Gyeeta Search Showcase

Some examples of how Gyeeta Search can be used for querying are shown below. Each example
includes a Video showing the Web UI Search. The corresponding Search using REST APIs is also shown.

Please read the [Query Data Types & Filters](./querying/datatypes) link prior to reading this section.

## Search for a Service with HTTP 5xx Server Errors or Persistent Higher Response (Latency) than usual 

This query involves `extsvcstate` (Extended Service State) subsystem. Please note that Gyeeta will be able to
capture 4xx and 5xx HTTP Errors only for non-TLS Services. i.e. HTTPS services will not report 4xx and 5xx Errors.

To search for Higher Response or Latency than usual, users can check Service State field itself as Gyeeta will set
the Service State as *Bad* or *Severe* based on an Response Times (checking both average and p95 5 sec response times) and QPS. 

The video shows a query for last 30 min. No Pre-aggregation filters are set as this is a global query.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/J-I50Gt9bEE?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

The corresponding cURL REST API call is shown below.

```bash

curl 'http://localhost:8080/v1/extsvcstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk' \
  -H 'Content-Type: application/json' \
  -d '{"starttime":"2022-07-01T19:37:04+05:30","endtime":"2022-07-01T20:07:04+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"","aggrfilter":"( { svcissue > 0 }  or  { sererr > 0 } )"}}' 

```


## Search for a CPU Limited Process with persistent CPU throttling within a cluster

This query involves `extprocstate` (Extended Process State) subsystem. Pre-aggregation filter set for
cluster and CPU Throttles process. Post-aggregation filter specifies search for a process where 'Degrades by Process CPU Delay' > 0.

The query is for the last 15 min interval. Aggregation interval set as 5 hours. (Any Aggregation interval >= query interval will result in 
a single aggregated record  as aggregation will apply over the entire query period).


<iframe width="500px" height="300px" src="https://www.youtube.com/embed/hHE509EUw5Y?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


```bash

curl 'http://localhost:8080/v1/extprocstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-01T20:23:55+05:30","endtime":"2022-07-01T20:38:55+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"( { cluster = \'k8s1\' }  and  { cputhr = true } )","aggrfilter":" { incpudel > 3 } "}}' 

```

## Find Cumulative Query Count and Avg Latency for multiple Postgres Instances in a Cluster over last 1 hour

To get the Cumulative Statistics as a single record for multiple Service or Process instances, a Custom Aggregation is needed as
shown in the video below.

The Pre-Aggregation Filter is for a Cluster name and Service name (`postgres`). The default Numerical Aggregation is set as *Sum of interval*
as Cumulative stats are needed and not averages.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/wx-4km4RwP4?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extsvcstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-01T21:07:50+05:30","endtime":"2022-07-01T22:07:50+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"( { name = \'postgres\' }  and  { cluster = \'dev1\' } )","columns":["name","sum(nqry5s) as sum_nqry5s","avg(resp5s) as avg_resp5s","avg(p95resp5s) as avg_p95resp5s"]}}'

```

## Find all Kubernetes or Container Processes with Avg CPU approaching their CPU Limit 

This query uses the `extprocstate` (Extended Process State) subsystem. 

The query duration is of last 30 min. Aggregation interval is set as 5 min as we do not want averages of entire query duration skewing 
temporary peaks in CPU utilization.

The Pre-Aggregation filter is set for all CPU Limited processes with Cgroup CPU Limit > 0.

The Post-Aggregation filter is set as Avg CPU over 5 min * 1.3 > Cgroup CPU Limit %.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/Llb13OfJ4Zg?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extprocstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk' \
  -H 'Content-Type: application/json' \
  -d '{"starttime":"2022-07-01T22:37:11+05:30","endtime":"2022-07-01T23:07:11+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":300,"aggroper":"avg","filter":"( { cputhr = true }  and  { cgcpulimpct > 0 } )","aggrfilter":" { cpu * 1.3 > cgcpulimpct } "}}' 

```

## Find Kubernetes or Container Processes approaching their Memory Limit set

This query uses the `extprocstate` (Extended Process State) subsystem. 

The query duration is of last 30 min. Aggregation interval is set as 5 min as we do not want averages of entire query duration skewing 
temporary peaks in Memory RSS utilization.

The Pre-Aggregation filter is set for all Memory Limited processes.

The Post-Aggregation filter is set as 'cgroup Resident Memory %' > 80.


<iframe width="500px" height="300px" src="https://www.youtube.com/embed/huCEfXrvnBA?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extprocstate' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk' \
 -d'{"starttime":"2022-07-01T23:32:29+05:30","endtime":"2022-07-02T00:02:29+05:30","timeoutsec":100,"options":{"maxrecs":10000,"aggrsec":300,"aggroper":"avg","filter":" { memlim = true } "}}' 

```

## Find any service in a Cluster with a Higher Query Count than usual

This query uses the `extsvcstate` (Extended Service State) subsystem. 

The Pre-Aggregation filter is for a Cluster.

The Post-Aggregation filter is for Avg QPS over the entire query interval > p95 QPS or for 'Degrades by High QPS' > 0 which would be the case
for instantaneous bursts in QPS as well.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/nn35pi5iOYo?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extsvcstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njc1NTAzMywiZXhwIjoxNjU2ODQxNDMzfQ.Yq2JDNXCLol8TAsY_qacrBBRWTAI1RQGoI1A-jl8sqE' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-02T14:50:05+05:30","endtime":"2022-07-02T15:50:05+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"avg","filter":" { cluster = \'k8s1\' } ","aggrfilter":"( { nqry5s > p95qps }  or  { inqps > 0 } )","sortcolumns":["qps5s"],"sortdir":["desc"]}}' 

```

## Find all Hosts with unusually High New Process Spawns or High Runnable Process Counts

This query uses the `cpumem` (Host CPU Memory) subsystem. 

The Pre-Aggregation filter is for all Hosts with "CPU Issue Cause"  as either "High New Process Creation Rate" or "Runnable Process Count High".

Note, here the filtering is done in Pre-Aggregation stage to catch all instantaneous (sporadic) issues as well.

If consistent issue presence is needed, Pre-Aggregation filter should be empty and the Post-Aggregation filter set to 
"Degrades by New Process/sec" > 5 or "Degrades by Runnable Process" > 5 as Aggregation interval is over entire period and Default Numerical Aggregation Operation
set to "Sum of Interval".


<iframe width="500px" height="300px" src="https://www.youtube.com/embed/rSO66RAQenY?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/cpumem' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njc1NTAzMywiZXhwIjoxNjU2ODQxNDMzfQ.Yq2JDNXCLol8TAsY_qacrBBRWTAI1RQGoI1A-jl8sqE' \
  -H 'Content-Type: application/json' \
  -d '{"starttime":"2022-07-02T15:35:21+05:30","endtime":"2022-07-02T16:35:21+05:30","options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"avg","filter":" { cpuissue in  5, 6 } ","sortcolumns":["forks_sec"],"sortdir":["desc"]}}'

```

## Find all Realtime priority Processes which are CPU Limited (Throttled)

This query uses the `procinfo` (Process Info) subsystem as the `rtproc` (Real Time process) field is present in the `procinfo` subsystem only.

Pre-Aggregation filter is set to 'Real Time Process' is true and 'CPU Throttled Process' is true.
No Post-Aggregation filters are needed. 

The Default Numerical Aggregation Operation is set to "Max of interval" to get the max p95 CPU Delays if any.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/_o19Lh_SLB4?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/procinfo' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njc1NTAzMywiZXhwIjoxNjU2ODQxNDMzfQ.Yq2JDNXCLol8TAsY_qacrBBRWTAI1RQGoI1A-jl8sqE' \
  -H 'Content-Type: application/json' \
  --data-raw '{"starttime":"2022-07-02T16:39:24+05:30","endtime":"2022-07-02T17:09:24+05:30","options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"max","filter":"( { rtproc = true }  and  { cputhr = true } )","sortcolumns":["p95cpudel"],"sortdir":["desc"]}}' 

```

## Get Kubernetes Cumulative Service Statistics for Clustered Services based on Virtual IPs

This query uses the `extsvcstate` (Extended Service State) subsystem.

As Cumulative Statistics are needed for multiple Services, this requires a Custom Aggregation query. Also, the Default Numerical Aggregation Operation is to be 
"Sum of interval".

The Pre-Aggregation filter is used to filter out services without Virtual IP or Port set.

The Post-Aggregation Custom columns use a combination of averages and percentiles as shown in the video below.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/xUq_vGHxGOU?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extsvcstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-03T20:30:52+05:30","endtime":"2022-07-03T21:30:52+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"( { svcip1 != \'\' }  and  { svcport1 != 0 } )","columns":["name","cluster","svcip1","svcport1","avg(qps5s) as avg_qps5s","avg(resp5s) as avg_resp5s","avg(nactive) as avg_nactive","sum(kbin15s) as sum_kbin15s","sum(kbout15s) as sum_kbout15s","sum(sererr) as sum_sererr","sum(clierr) as sum_clierr","percentile(0.95, resp5s) as percentile_resp5s"],"sortcolumns":["avg_qps5s"],"sortdir":["desc"]}}'

```

## Find all Processes with unusual Disk IO Latency

This query uses the `extprocstate` (Extended Process State) subsystem.

The Default Numerical Operation is to be "Avg of Interval".

The Pre-Aggregation filter is for Cluster Name.

The Post-Aggregation filter is for "Degrades by Block IO Latency" > 0. This will match any process where at least 5-10 sec of unusual Block IO (Disk IO) activity
was seen. If a sustained Disk IO Latency search is needed, users should increase the count of "Degrades by Block IO Latency" to say 20 or more.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/zo3r9CKYDEc?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extprocstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-03T21:03:24+05:30","endtime":"2022-07-03T22:03:24+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"avg","filter":" { cluster = \'k8s1\' } ","aggrfilter":" { iniodel > 0 } "}}'

```

## Find all Services with unusually high Active Network Connections 

This query uses the `extsvcstate` (Extended Service State) subsystem.

The Default Numerical Operation is to be "Avg of Interval" with Aggregation over entire Query Period.

The Pre-Aggregation filter is for Cluster Name.

The Post-Aggregation filter is Avg Active Connections over entire query interval > its p95 or "Degrades by High Active Conns" > 0.
The latter condition will match any 5-10 sec period of unusual Active Connections. If a sustained High Active connections search is needed,
users can increase the count of Degrades to say over 20.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/L_Jein6LPls?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extsvcstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-03T12:38:29+05:30","endtime":"2022-07-04T00:38:29+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":432000,"aggroper":"avg","filter":" { cluster = \'k8s1\' } ","aggrfilter":"( { nactive > p95aconn }  or  { inaconn > 0 } )","sortcolumns":["nactive"],"sortdir":["desc"]}}'

```

## Find all Recently Started Services with HTTP 4xx Client Errors > 50% of all Queries

This query is for `extsvcstate` (Extended Service State) subsystem.

The Default Numerical Operation is to be "Sum of Interval" with Aggregation over entire Query Period.

The Pre-Aggregation filter is for Services with Start Time in the last 10 minutes.

The Post-Aggregation filter is for Client 4xx Errors * 2 > Total Query Count.

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/KyZjqKCvDCA?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

```bash

curl 'http://localhost:8080/v1/extsvcstate' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-07-04T00:27:07+05:30","endtime":"2022-07-04T00:57:07+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":" { tstart > \'2022-07-04 00:47:30+05:30\' } ","aggrfilter":" { clierr * 2 > inrecs } ","sortcolumns":["clierr"],"sortdir":["desc"]}}'

```


