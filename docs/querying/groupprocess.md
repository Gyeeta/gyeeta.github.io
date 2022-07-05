---
id: groupprocess
title: Grouped Processes
description: Description of Grouped Processes
---

# Grouped Processes

Gyeeta groups parent and child processes which run the same executable as a Grouped Process. All the processes within a Grouped Process have the same name and 
are created from the same binary and have the same parent/grandparent process. 

If after a parent creates a child process and then the child executes a new binary, the child will not be grouped along with the parent as it becomes a new 
Grouped Process. Grouped Processes can contain a minimum of 1 process.

## Why Gyeeta groups individual processes

Many applications spawn child processes (`fork` processes) and these child processes run the same binary (no `execv` executed). 

For example, Apache Web Server can optionally spawn a child process per connection. This implies that in case there are 1000 connections to the Apache server, 
the server will spawn 1000 child processes. Similarly, PostgreSQL will spawn a child process for every new connection to the DB.

Grouping these child processes statistics such as CPU, Memory and Process Delays along with the parent gives users a consolidated Process State for multiple
individual OS processes.

## Limitations in Gyeeta

### Not All Grouped Process Statistics are stored in DB

Gyeeta will not store the Grouped Statistics in DB of all OS processes. Instead, Gyeeta will apply an algorithm to detect whether the OS process is significant
enough to store statistics.

**How Gyeeta identifies processes of interest to store in DB**

- TCP client/server processes will always be stored in DB
- Realtime and High CPU utilization processes (over a 60 sec interval) will be stored in DB
- High Memory utilization processes may be stored in DB depending on the process counts


### Detailed Grouped Process Info only for processes running over 60 sec

Detailed Grouped Process Info such as Command Line, Process tags, cgroup info are not stored in DB for short lived processes which run for less than 60 sec.  

This implies that any Network Flows initiated by a *new* Grouped Process and where all the processes within that group exit within 60 sec will have only 
Process Name and a few other Process Metadata. Command Line, Process Tags and other such info will not be available for these connection flows.

Note this limitation is only for new Grouped Processes. Once a Grouped Process is identified as important, any child processes which run for less than
60 sec will also be captured.

### Grouped Process statistics interval increase for idle processes

The minimum time duration fo storing Process Statistics in Gyeeta is 5 sec. But, Gyeeta will not store *all* Grouped Process statistics every 5 sec. 
Idle Processes that consume less than 1% CPU and do not have any Network Flows will be stored in 10 or 15 sec durations. The statistics for these
processes will still be collected every 5 sec but they will be stored to DB by aggregating 2 or 3 records into a single record.


