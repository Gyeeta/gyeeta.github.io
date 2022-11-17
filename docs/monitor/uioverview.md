---
id: uioverview
title: Web UI Overview
description: Overview of Gyeeta Web UI
---

# Web UI Overview

A brief walkthrough of the Web UI is shown in the video below :


<iframe width="500px" height="300px" src="https://www.youtube.com/embed/xFsxN8vI64s?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>



## Connecting to Gyeeta Webserver

Gyeeta Web Server is by default an HTTP server and listening on default port 10039. Users can configure the Web Server to use HTTPS by providing
the TLS certificates. 

By default, only User Password Basic Authentication is supported. Users can configure Single Sign On using OIDC / OpenID by using OpenID reverse proxy
in front of the Gyeeta Webserver. This mechanism is currently not supported directly and requires manual changes.

## User Roles and Priviliges

Currently Gyeeta supports 3 basic User Roles : 

- **admin** : Administrator Role : Has all priviliges

- **readwrite** : ReadWrite Role 

    The ReadWrite Role users cannot add/modify/delete Alert Actions (Notifications) and cannot invoke the reload of the User-Password Mapping file.

- **readonly** : ReadOnly Role

    All other users are assigned the ReadOnly Role. These users cannot add/modify/delete Alert Definitions, Silences, Inhibits in addition to the restrictions
    for the ReadWrite Role users.

## Dashboards and Monitors

Gyeeta refers to Statistical views as *Dashboards* and refers to multiple graphical views as *Monitors*.

## UI Dashboards

Main UI Dashboards :

- Global Cluster Dashboard
- Global Host Dashboard
- Host Level Network Flow Dashboard
- Global, Cluster or Host Level Service State Dashboard
- Global Service Deployment Group Dashboard
- Global or Cluster Level Process Dashboard
- Alerts Dashboard

## UI Monitors

Similiar to the Dashboards are the corresponding Monitors :

- Single Cluster State Monitor
- Host CPU Memory Monitor
- Host State Monitor
- Service Monitor
- Process Monitor 

## Typical UI Workflows

The Web UI is intended to be used in a top-down approach : 

***Cluster level*** ---> ***Host level*** ---> ***Service level*** ---> ***Process level***

Users can start with the landing page which is Global Cluster Dashboard updated every 15 sec. This dashboard will list out the
potential problematic clusters i.e. clusters with any Service or Process issues or with Host CPU/Memory issues.
After identifying a cluster of interest from the Global Clusters, users can drill-down to either the Host with issues or if
the issue is a Process or Service Level, directly to the respective category.
Please refer to the Video of the UI Overview shown above for an example of this sort of a workflow.

Another possible workflow is to monitor a specific Service or a Process performance. For example, to monitor the performance of a config change.
In such cases, users should access the Service or Process State Monitor.

Users can also query Dashboards for Historical time durations data.

Another workflow could be to use the *Search* mechanism to search for specific cases. For example, search for a CPU Limited (Throttled) process
with more than 10 CPU Delay instances in last 5 minutes, or search for a newly started service with HTTP Server errors. 

A sample workflow is also provided in the video below :


<iframe width="500px" height="300px" src="https://www.youtube.com/embed/SubYfXe1mk4?rel=0" title="Gyeeta YouTube video player" frameBorder="0" hd="1" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


