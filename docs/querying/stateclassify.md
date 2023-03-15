---
id: stateclassify
title: State Classification
description: Classification of States
---

# Classification of States

Gyeeta adds a Classifier field named `state` to the following subsystems :

- Host
  - CPU
  - Memory
  - Host State
- Service
- Process

The `state` field indicates the current state of the subsystem as determined by Gyeeta based on an algorithmic deduction.

## Types of states classified

The `state` can have be one of the following states :

- Idle
- Good
- OK
- Bad
- Severe

### *Idle* State

This state indicates an idle or a mildly active subsystem. For example, in case of a Service, this state could mean the Service Queries
are much lower than normal with no abnormal Response time (latency). Also the lower query count could not be deduced to some process issue.

### *Good* State

This state indicates an active subsystem but which is neither saturated nor too idle. 

For example, in case of a Host, this state could mean the Host CPU, Memory statistics are around the baseline values and also, no
process or service issues are seen.

### *OK* State

This state indicates a subsystem which is neither idle nor approaching saturation. Gyeeta will classify a subsystem as *OK* if 
it determines that the state is mildly deteriorated from its baselines but not by a long way off so as to trigger a *Bad* state.

### *Bad* State

This state indicates a subsystem which is deteriorated from its baselines. For example, in case of a process, Gyeeta will
classify the Process `state` as *Bad* if it determines that the CPU delays the process is facing is over its baseline by a 
non-infinitesimal amount.

### *Severe* State

This state indicates a subsystem which is severely deteriorated from its baselines. For example, in case of a process, Gyeeta will
classify the Process `state` as *Severe* if it determines that the process is facing Memory Thrashing delays.


## Sample Snapshot

A sample snapshot of the *Process* subsystem States is shown below :

![Process States](/img/procstate1.png)

As seen from above, the `postgres` process state is classified as ___Bad___ due to Major Page Faults.


