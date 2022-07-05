---
id: alertoverview
title: Alerts Overview
description: Alerts Overview
---

# Alerts Overview

## Alerting Architecture

Gyeeta supports two types of alerts :

- Realtime Alerts where the Alerting rules are evaluated on every new event

- DB Aggregated Alerts where a delayed evaluation occurs based on previous historical data within the DB datasets

Alerting Rules are evaluated both from any of the _Madhava_ intermediate servers and from the _Shyama_ central server itself. 
_Shyama_ server has an Alertmanager component which is the final step in the Alert Evaluation chain and on an Alert trigger, the
Alertmanager within _Shyama_ will send the Alert Action (Notification) to a remote Alert Action Agent which will execute the
Alert Action.

Alert Definitions and Actions are configured using either the Web UI or using REST APIs. To add or modify Alert Actions, users need
to have admin role priviliges. To add or modify Alert Definitions, Silences or Inhibits users need to have readwrite priviliges.

### Failover Considerations

Multiple instances of `shyama` can be run with 1 Active instance and 1 or more passive instances. Failure of the Active instance will
result in one of the Passive instances taking over. 

The Failover mechanism takes up to 3 minutes. Currently, on a `shyama` failover, notifications for all on-going Alerts will not be sent. 
Only new alerts will be handled.

Multiple instances of the Alert Action Agent can be run for high availability as well.

## Terms used {#alert-terms-concepts}

### Alert Actions (Notifications) {#alert-actions}

Alert Actions (Notifications) currently supported :

- Email
- Slack
- Pagerduty
- Webhooks

Alert Actions need to be configured prior to the Alert Definitions creation. Alert Actions need admin priviliges. An alert
definition can optionally change some of the fields within the Action specific to the Alert Definition. 

Alert Definitions can configure upto 8 Actions and these actions can also be dynamically called/skipped depending on the Alert Data.

### Silencing

Silencing refers to the process of suppressing any Alert before it goes Active. Silencing can be either Global Silences for all Alert 
Definitions or specific to a single Alert Definition. 

Silences definitions specify a Time Range during which the alerts would be suppressed. Global Silences can have optional Filters for the 
Alert data set and only alerts which match the Filters will be then silenced.

### Inhibition

Alert Inhibition refers to the process of suppressing any new Alert before it goes Active, based on the prior occurence of some other
Alert. Alert Inhibition can be used to prevent Alerts cascading. For example, an Inhibit rule can be set to prevent Warning severity
alerts for a specific cluster, if a prior Critical severity alert say for the same Alert Definition has occured and is active.

### Alert Acknowledgement

Acknowledgement refers to the process of suppressing any Repeat Alerts for a currently Active Alert. Once an Active Alert has been 
Acknowledged, no Repeat Alert Notifications will be sent and only on Alert Resolution or Expiry will the next notification occur for
that specific alert.

### Alert Grouping

Grouping refers to the process whereby alerts of the same Alert Definition are grouped together (upto max 8 alerts at a time). 
Grouping is based on setting a _Group Wait Duration_ (max 10 minutes) and can be optionally set to include fields within the Alert data which
must match to be in the same group. 

If Grouping is enabled, then alerts of the same Alert Definition and having the same _Group Alert Fields_ will be clubbed together and 
will be sent only after the _Group Wait Duration_ is complete.

Alert Actions using Email or Slack will be sent as a single notification whereas Pagerduty or Webhooks will be sent individually.

For Alert Resolution, grouping is not considered and individual alert notifications will be sent as and when they resolve.

