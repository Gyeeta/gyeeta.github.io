---
id: alertwalkthru
title: Alerting Walkthrough
description: Alerting Process Walkthrough
---

# Alerting Process Walkthrough

This section gives a walkthrough of the entire process involved in Gyeeta Alerting from the trigger to the resolution of the alert.

For the sake of simplicity, only Realtime Alerts are explained in this section. Most of the concepts will also apply to DB Aggregated Alerts.

Let us assume an Alert Definition has been set to fire an Alert if any `redis`, `mysql` or `postgres` service has states `Bad` or `Severe` over
5 consecutive evaluations.

:::tip Pre-Aggregation Filter for use with REST APIs for above condition

`({ name in 'postgres','redis','mysql' } and { state in 'Bad','Severe' })`

:::

This alert is for `extsvcstate` subsystem i.e. related to Service State. Gyeeta updates Service States every 5 sec in the `madhava` Intermediate Servers. 

On every 5 sec Service State update, `madhava` will check if the above filter expression matches any Service State. If
a match is found, `madhava` will check the number of consecutive occurences of this alert for that specific Service. 

If it is the fifth occurence, then as per the Alert Definition, `madhava` will then send a preliminary alert to `shyama` Alertmanager.

The `shyama` Alertmanager, on receiving this _pre-alert_ will check the following conditions which will cancel out (suppress) this alert :

1. Check if the Alert is Silenced as per this Alert Definition specific Silence Rules
2. Check if _All_ Alerts are disabled which could be because of an Alert Storm
3. Check if the Alert is Silenced as per Global Alerts Silencing Rules
4. Check if the Alert is Inhibited because of a prior Alert as per Inhibition Rules

If all checks passed, `shyama` will check if the Alert Definition has _Grouping_ enabled. If _Grouping_ is enabled, the Alert is 
pushed to the respective Alert Group. Thereafter, when the Group Wait period completes, the Alert will be become active.

If _Grouping_ is disabled, the Alert becomes Active. The `shyama` Alertmanager will then send the new Alert to the remote 
Alert Action Agent. The Alert Action Agent will execute all the Actions (Notifications) set for that alert.

At this point, the Alert is Active and is also pushed to the `shyama` `postgres` DB. The Alert can also be seen in the Web UI Alerts Dashboard.
If the Alert was cancelled out due to any of the checks above, the Alert will not be visible in the UI nor will it be databased.

Now assume, the Alert Definition has set the Alert to be _Repeated_ if the Alert remains active for over 1 hour. 

Now, on every 5 sec Service State update, the corresponding `madhava` instance will check the Alert Filter and set the Alert as active if the
condition keeps getting hit. 

Let us assume, the Alert condition is still active 1 hour after the initial alert. The corresponding `madhava` instance will thereafter send a
_Repeat_ alert to `shyama`. 

On receiving this _Repeat_ alert, `shyama` will again evaluate all the Checks for cancelling and if the checks pass, will send the Repeat Alert
to the remote Alert Action Agent for the next round of notifications.

Now let us assume, a Service State update is seen where the Alert filter expression failed for that specific service. The corresponding `madhava`
instance will thereafter mark this alert as _Resolved_ and will intimate the `shyama` Alertmanager. 

On Alert Resolution, `shyama` will update the DB and the Web UI will also show the Alert as _Resolved_. If the Alert Definition specified 
sending of Notifications on Alert Resolution, then `shyama` will send the notification to the Action Agent who will execute the action.

Each Alert Definition is associated with an Alert Expiry Duration (defaults to 10 hours and upto a max of 24 hours).

`shyama` Alertmanager will periodicaly check for Alert Expiries on an expiry will mark that alert as _Expired_ and the DB updated. The Web UI will
show the Alert as _Expired_. If the Alert Definition specified sending of Notifications on Alert Resolution, then `shyama` will send the 
Expired Alert notification to the Action Agent who will execute the action.

If the Alert Definition had specified _Manual Alert Resolution_ instead of the default, auto resolution, then the `shyama` Alertmanager will not
set the Alert as _Resolved_ until users click on the _Set as Resolved_ button from the Web UI Alerts Dashboard or call the corresponding REST API call.
Alert Expiry Rules will still be active for Manual Resolve Alerts as well.


