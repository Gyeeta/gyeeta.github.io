---
id: aggregation
title: Query Aggregation
description: Query Aggregation
---

# Query Aggregation

Aggregation refers to operations on a set of individual records to form a reduced (aggregated) resultset. In Gyeeta, 
Aggregation operates on a time duration of 1 min or more. Aggregation intervals define the step size used for aggregation operations on the resultset.

Aggregation always starts with the resultset of a single host. For a multi host query (query spanning multiple hosts), aggregation will be done
per host as a first step followed by a later second pass aggregation. 

Within a single host, the aggregation will first retrieve the detailed resultset matching any filters (pre-aggregated filters) set. Thereafter,
the aggregation will apply the Aggregation Operators on each field. 

The Search Web UI Video shown below shows examples of Query Aggregation (both Predefined and Custom).

<iframe width="500px" height="300px" src="https://www.youtube.com/embed/_6nGLY2YcIo?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


## Aggregation Operators

Aggregation Operators supported in Gyeeta are :

### String Field Aggregation Operators

- Group By (implicitly used for all string fields unless other operators specified)
- First Element (`first_elem`)
- Last Element (`last_elem`)

### Numeric Field Aggregation Operators

- Average (mean) (`avg`)
- Sum of the fields (`sum`)
- Maximum (`max`)
- Minimum (`min`)
- Percentile (for e.g. p99) (`percentile`)
- First Element (`first_elem`)
- Last Element (`last_elem`)

### Boolean Field Aggregation Operators

- Boolean OR (`bool_or`)
- Boolean AND (`bool_and`)
- Count of condition (`count`)

After applying the desired Aggregation Operator on each field, the resultset will get reduced. For Single Host queries, the query is deemed complete
at this point.

For multi host queries, a second pass aggregation will next take place, which will aggregate across the first pass single host aggregated resultset.

## Aggregation Interval

Aggregation Intervals define the step size for Aggregations within a single Host. For example, if a query is for aggregating Service States for last
3 hours with an aggregation interval of 5 minutes, it implies multiple aggregations one after the other will be done on each 5 minute dataset.

If users want a single aggregated resultset the Aggregation Interval must be set to at least the entire query time duration. For example, in the 
above case, the Aggregation Interval must be at least 3 hours.

## Pre-Aggregation / Post-Aggregation Filters

Pre-Aggregation Filters are the first level filters that can be used to reduce the dataset needed for the aggregation. In other words,
Pre-Aggregation Filters are applied to the dataset *before* any aggregation is done.

For example, lets say you need to query Process State aggregation for a specific cluster. In this case the cluster name should be 
specified in the pre-aggregation filters. If the cluster name filter were instead specified in the post-aggregation filter, it would have 
resulted in an inefficient query, as the dataset for all clusters would have been scanned in the first pass.

Post-Aggregation filters are applied *after* the aggregation has been executed to further reduce the resultset. 


:::note

Post Aggregation filters are **mandatory** for DB Aggregation Alerts.

:::

:::tip

Gyeeta REST API querying by default, will assume non-aggregated (or detailed) resultsets. To specify aggregation in REST APIs, users need to
specify `aggregate` as true within the "options" JSON object of the request. 

An example cURL command showing the extsvcstate REST API call with both pre-aggregation and post-aggregation filters set 
(pre-aggregation filter within "filter" and post-aggregation within "aggrfilter" fields) :

```bash
curl 'http://dev204.local:10039/v1/extsvcState' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjI2MTgwNywiZXhwIjoxNjU2MzQ4MjA3fQ.tma_H727ek7RGDmKHPvL3lEI5CBVgETNYDwMREnsC4E' \
  -H 'Content-Type: application/json' \
  -d $'{"starttime":"2022-06-26T19:02:05+05:30","endtime":"2022-06-26T20:02:05+05:30","timeoutsec":500, "options":{"maxrecs":10000,"aggregate":true,"aggrsec":300,"aggroper":"avg","filter":" { cluster substr \'k8s\' } ","aggrfilter":" { nconns > 10 } "}}'

```

:::


## Predefined Subsystem Aggregations

Gyeeta provides Predefined Aggregation Queries for all subsystems which support aggregation for quick querying without knowing all the fields available.

The Predefined Aggregation Queries result in an aggregation which contains most of the fields available in the Detailed (non-aggregated) resultsets. 

These aggregations do not give the users many options to change the field aggregations. The only options supported are :

- Choice of Default Numerical Aggregation Operation (default is `avg`)
- Aggregation Interval 

Another side-effect of using the Predefined Subsystem Aggregations is that the fields in most subsystem predefined aggregates will also include Host unique
fields such as `parid` (Partha ID) and `host` (Hostname). The resultant aggregations will therefore not be aggregated across hosts but only within a host.

Also, Predefined Aggregations for subsystems such as Service State, Process State will include not just Host unique fields mentioned above, but also
globally unique fields such as `svcid` (Service ID) and `procid` (Grouped Process ID (not PID)). This will result in aggregations which are both
Host unique and Service or Process unique within the host as well. 

For example, lets say a Host has 2 separate instances of `redis` running resulting in 2 different `svcid`. The `extsvcstate` and `svcstate` subsystem
Predefined aggregations will then not combine statistics of these 2 instances for aggregations but will consider them as different instances which is 
what is needed in most cases. But if users want to combine statistics of all `redis` instances across all hosts and aggregate them, they will need
to use the Custom Aggregation Query.

Using the Predefined Aggregations gives users a quick way to get aggregated statistics. But if the users need more fine-tuned stats, they will need to define
a Custom Aggregation Query as explained below.


## Custom Aggregation Queries {#custom-aggregation}

Custom Aggregation Queries gives the user the option to select specific fields from within the detailed (non aggregated) resultset to use for aggregations
and allows users custom aggregation operations which are not provided in the Predefined Aggregations.

To aggregate statistics across hosts as a consolidated single row, Custom Aggregation is needed wherein the columns selected should not be Host specific.

For example, the following is a Custom Aggregation REST API example for svcstate subsystem with custom aggregation operations specified within the _columns_ field :

```bash

curl http://localhost:10039/v1/svcstate \
	-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjI2NjkwNCwiZXhwIjoxNjU2MzUzMzA0fQ.YQvdxawLsq_j6TcG5aeTVQffV84v8GRM3GJkoWamjHs" \
	-H "Content-Type: application/json" \
	-d $'{"timeoffsetsec" : 3600, "timeout" : 300,  "options" : { "aggregate" : true, "aggroper" : "max", "columns" : [ "name",  "ishttp", "max(iodelus)/1000 as maxiodelms", "avg(resp5s)/max(resp5s) * 100 as respratio", "sum(sererr + clierr)/sum(nqry5s)  * 100 as weberrpct", "avg(kbin15s + kbout15s)/1024 as avgnwmb", "last_elem(resp5s) as lastresp", "percentile(99, resp5s) as pctresp5s", "count(sererr + clierr > 0) as weberrs" ], "aggrfilter" : "( { maxiodelms > 0 } and { avgnwmb >= 1000 } )" , "filter" : "( { name in \'postgres\', \'node\', \'server\' } )" } }' 

```

The columns (fields) specified for the Custom Aggregation can also refer to the Predefined Aggregation fields (as seen from above where `name` and `ishttp`
are from Predefined fields).

:::note

The above Custom Query can also be executed from the Web UI Search Page which provides a simpler interface to quickly create Custom Aggregation columns.

:::


### Custom Aggregation Consolidation across madhava instances

Currently, consolidated Custom Aggregation will aggregate records seen within hosts of a single `madhava` Intermediate Server and not across all
`madhava` instances. In other words, each `madhava` instance will have its unique consolidated row instead of a single consolidated row
globally and there will be multiple rows within the final resultset, one for each `madhava`.

A single `madhava` can handle hundreds of hosts. So the Custom Aggregation will still span hundreds of hosts within a single row.

This limitation will be removed in a future release.


