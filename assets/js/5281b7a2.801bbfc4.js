"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(a),c=r,u=h["".concat(l,".").concat(c)]||h[c]||d[c]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"architecture",title:"Architecture",description:"Gyeeta Architecture and Components",keywords:["architecture","components"]},o="Gyeeta Architecture",s={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Gyeeta Architecture and Components",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1669481815,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{id:"architecture",title:"Architecture",description:"Gyeeta Architecture and Components",keywords:["architecture","components"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Installation & Configuration",permalink:"/docs/category/installation--configuration"}},l={},p=[{value:"Components in Gyeeta",id:"components-in-gyeeta",level:2},{value:"Highly Scalable",id:"highly-scalable",level:3},{value:"<em>Partha</em> Host Monitor Agent",id:"host-monitor-agent-partha",level:2},{value:"<em>Shyama</em> Central Server",id:"central-server-shyama",level:2},{value:"<em>Madhava</em> Intermediate Server",id:"intermediate-server-madhava",level:2},{value:"<em>Postgres</em> Database",id:"postgres-database",level:2},{value:"<em>Node</em> Webserver",id:"node-webserver",level:2},{value:"Alert Action Agent",id:"alert-action-agent",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gyeeta-architecture"},"Gyeeta Architecture"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Gyeeta")," is an Observability product utilizing ",(0,r.kt)("a",{parentName:"p",href:"https://ebpf.io/"},"eBPF")," and Linux kernel statistics."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Gyeeta")," is a free and 100% ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gyeeta/gyeeta"},"Open Source")," (GPLv3) product. "),(0,r.kt)("h2",{id:"components-in-gyeeta"},"Components in Gyeeta"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Gyeeta")," consists of the following components :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Host Monitor Agent (named ",(0,r.kt)("a",{parentName:"p",href:"#host-monitor-agent-partha"},(0,r.kt)("inlineCode",{parentName:"a"},"partha")),") to be installed on each of the hosts which needs to be monitored")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Central Server (named ",(0,r.kt)("a",{parentName:"p",href:"#central-server-shyama"},(0,r.kt)("inlineCode",{parentName:"a"},"shyama")),") which serves as both an Aggregating Server and an Alert Manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One or more Intermediate Servers (named ",(0,r.kt)("a",{parentName:"p",href:"#intermediate-server-madhava"},(0,r.kt)("inlineCode",{parentName:"a"},"madhava")),") analyzing metrics from multiple monitored hosts (",(0,r.kt)("inlineCode",{parentName:"p"},"partha"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"#webserver"},"NodeJS Webserver")," which handles Web UI and REST API queries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("a",{parentName:"p",href:"#alert-action-agent"},"Alert Agent")," which interacts with ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," AlertManager and executes the Alert Trigger Actions (Notifications)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One or more ",(0,r.kt)("a",{parentName:"p",href:"#postgres-database"},"Postgres DBs")," to be used as the datastore for ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," servers"))),(0,r.kt)("p",null,"The image below shows the high level overview of how the different components interact with each other :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gyeeta Architecture",src:a(2914).Z,width:"500",height:"500"})),(0,r.kt)("h3",{id:"highly-scalable"},"Highly Scalable"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Gyeeta")," supports monitoring of tens of thousands of hosts using a single ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," instance and multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," instances. "),(0,r.kt)("h2",{id:"host-monitor-agent-partha"},(0,r.kt)("em",{parentName:"h2"},"Partha")," Host Monitor Agent"),(0,r.kt)("p",null,"The Gyeeta Host Monitor Agent (named ",(0,r.kt)("inlineCode",{parentName:"p"},"partha"),") needs to be installed on every host that is to be monitored and preferably started at init (startup) so that all process\nactivity can be monitored. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," application is a lightweight priviliged process using eBPF and Kernel Statistics to monitor all activities on each monitored host.\nIt can monitor hosts with thousands of connections, hundreds of processes/sec, or tens of thousands of queries/sec, all with under 10% single core CPU utilzation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monitors all Services and gathers statistics such as Queries/sec, Response Time (Latency), HTTP Errors (for HTTP services)"),(0,r.kt)("li",{parentName:"ul"},"Monitors all Network Flows within host and across hosts as well and correlates them with ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")),(0,r.kt)("li",{parentName:"ul"},"Monitors Host and Processes Resource usage "),(0,r.kt)("li",{parentName:"ul"},"Auto detects any anomalies and flags any Degradation in Host, Service or Process performance including CPU, Memory or IO Contention"),(0,r.kt)("li",{parentName:"ul"},"Monitors all services with statistics for all TCP traffic. Does not use sampling."),(0,r.kt)("li",{parentName:"ul"},"Interacts with a single ",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," assigned ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," Intermediate Server and sends all statistics over a TCP connection"),(0,r.kt)("li",{parentName:"ul"},"No local disk storage is needed as all data is sent to the Intermediate server"),(0,r.kt)("li",{parentName:"ul"},"Lightweight with ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"max"))," ",(0,r.kt)("em",{parentName:"li"},"10% of one CPU core")," (",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"p99"))," ",(0,r.kt)("em",{parentName:"li"},"4% of one core"),") (averaged over a 5 sec interval) and max ",(0,r.kt)("em",{parentName:"li"},"300 MB RSS Memory"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more from links below")," :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/partha_config"},(0,r.kt)("strong",{parentName:"a"},"Partha Agent Configuration"))," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/partha_install"},(0,r.kt)("strong",{parentName:"a"},"Partha Agent Installation and Host Requirements")),"  "),(0,r.kt)("h2",{id:"central-server-shyama"},(0,r.kt)("em",{parentName:"h2"},"Shyama")," Central Server"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," Central Server serves as both an Aggregating Server and an Alert Manager and is the only component which interacts with all\nother components. "),(0,r.kt)("p",null,"A single ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," instance needs to be installed on any Linux host with minimal CPU and RAM requirements. The ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama"),"\ninstance needs to have Network Connectivity with all monitored hosts and all ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," instances."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assigns appropriate ",(0,r.kt)("a",{parentName:"li",href:"#intermediate-server-madhava"},(0,r.kt)("inlineCode",{parentName:"a"},"madhava"))," intermediate servers to each of the monitored hosts (",(0,r.kt)("inlineCode",{parentName:"li"},"partha"),") based on\nNetwork adjacency and availability."),(0,r.kt)("li",{parentName:"ul"},"Acts as the Alert Manager and co-ordinates Alert Trigger Actions with the ",(0,r.kt)("a",{parentName:"li",href:"#alert-action-agent"},"Alert Agent")),(0,r.kt)("li",{parentName:"ul"},"Coordinates with the one or more ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," to resolve Network Flow Dependencies"),(0,r.kt)("li",{parentName:"ul"},"Tracks Cluster wide Service and other Statistics"),(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#postgres-database"},"Postgres DB")," as the datastore to store Cluster and Global level statistics including Alerts"),(0,r.kt)("li",{parentName:"ul"},"Communicates with the Monitored Hosts ",(0,r.kt)("inlineCode",{parentName:"li"},"partha")," instances only at the ",(0,r.kt)("inlineCode",{parentName:"li"},"partha")," startup while assigning ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," instances to each ",(0,r.kt)("inlineCode",{parentName:"li"},"partha"),". This limits\ninter-region network communication if the ",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," instance is in a separate region from ",(0,r.kt)("inlineCode",{parentName:"li"},"partha")," host"),(0,r.kt)("li",{parentName:"ul"},"Communicates with the ",(0,r.kt)("a",{parentName:"li",href:"#webserver"},"Webserver")," for web query responses"),(0,r.kt)("li",{parentName:"ul"},"Optional Redundancy in Active Passive modes with one active and one or more passive ",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," instances")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more from links below")," :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/shyama_config"},(0,r.kt)("strong",{parentName:"a"},"Shyama Server Configuration"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/shyama_install"},(0,r.kt)("strong",{parentName:"a"},"Shyama Server Installation")),"  "),(0,r.kt)("h2",{id:"intermediate-server-madhava"},(0,r.kt)("em",{parentName:"h2"},"Madhava")," Intermediate Server"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," Intermediate Server analyzes the monitored Host Statistics and interacts with ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," Host Agents, ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," Central Server, other\n",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," server instances and the Webserver. "),(0,r.kt)("p",null,"The number of ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," instances to be installed depends on the number of monitored hosts and Network Connectivity (adjacency) requirements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," instance can handle upto 500 Hosts (",(0,r.kt)("inlineCode",{parentName:"li"},"partha"),") interaction and monitoring depending on the ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," host CPU and RAM specs"),(0,r.kt)("li",{parentName:"ul"},"Coordinates with ",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," and other ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," instances to resolve Network Flow Dependencies"),(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#postgres-database"},"Postgres DB")," as the datastore to store the data pertaining to the monitored hosts"),(0,r.kt)("li",{parentName:"ul"},"Communicates with the ",(0,r.kt)("a",{parentName:"li",href:"#webserver"},"Webserver")," for query responses"),(0,r.kt)("li",{parentName:"ul"},"Optional Redundancy in Active Passive modes with one active and one or more passive ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," instances")),(0,r.kt)("p",null,"It is recommended that at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," server be installed in each active Network zone to limit inter-zone or\ninter-region Network egress costs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more from links below")," :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/madhava_config"},(0,r.kt)("strong",{parentName:"a"},"Madhava Server Configuration"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/madhava_install"},(0,r.kt)("strong",{parentName:"a"},"Madhava Server Installation")),"  "),(0,r.kt)("h2",{id:"postgres-database"},(0,r.kt)("em",{parentName:"h2"},"Postgres")," Database"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," is used as the datastore for ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," servers. Upto 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," servers can share the same Postgres\ninstance as the datastore. As the number of madhava instances increase the requirement for additional Postgres instances will arise."),(0,r.kt)("p",null,"It is recommended to use a Postgres DB in the same Network Region/Zone as the ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," instance for better performance and lower costs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more from link below")," :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/postgresdb_install"},(0,r.kt)("strong",{parentName:"a"},"Postgres DB Installation"))),(0,r.kt)("h2",{id:"node-webserver"},(0,r.kt)("em",{parentName:"h2"},"Node")," Webserver"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs")," based webserver handles Web UI and REST queries and forwards them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," servers. "),(0,r.kt)("p",null,"A single instance of Webserver needs to be installed on a host with Network Connectivity to ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," and all ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," instances."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accumulates query responses from multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," servers for Global or Cluster Level queries"),(0,r.kt)("li",{parentName:"ul"},"Supports a minimal but powerful WebUI on default HTTP with optional HTTPS support"),(0,r.kt)("li",{parentName:"ul"},"A comprehensive REST API based framework is exposed both for API Querying and CRUD operations such as creating Alerts"),(0,r.kt)("li",{parentName:"ul"},"Currently the WebUI and REST API queries are authenticated using a fixed User Password Basic Authentication. SSO (Single Sign-on)\nbased Authentication and Authorization using OIDC / OAuth2 is planned for a later release"),(0,r.kt)("li",{parentName:"ul"},"Maintains persistent connections with the ",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," and all the ",(0,r.kt)("inlineCode",{parentName:"li"},"madhava")," servers"),(0,r.kt)("li",{parentName:"ul"},"Multiple Webserver instances can be started for redundancy purposes")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more from links below")," :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/nodewebserver_config"},(0,r.kt)("strong",{parentName:"a"},"Node Webserver Configuration"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/nodewebserver_install"},(0,r.kt)("strong",{parentName:"a"},"Node Webserver Installation")),"  "),(0,r.kt)("h2",{id:"alert-action-agent"},"Alert Action Agent"),(0,r.kt)("p",null,"The Alert Action Agent is involved in executing the Alert Actions (Notifications) as per the configured Alert rules. "),(0,r.kt)("p",null,"A single instance of the Alert agent needs to be installed on a host with Network Connectivity to ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama"),". If the Alert Action needs\nNetwork connectivity to an external service such as Slack or Pagerduty, the Alert Action Host must have Internet Connectivity as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently ",(0,r.kt)("em",{parentName:"li"},"Gyeeta")," supports Email, Slack, PagerDuty, Webhooks as the Alert Action (Notification)"),(0,r.kt)("li",{parentName:"ul"},"Maintains persistent connections with the ",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," server (",(0,r.kt)("inlineCode",{parentName:"li"},"shyama")," also acts as the Alert Manager)"),(0,r.kt)("li",{parentName:"ul"},"Multiple Alert Action Agents can be started for redundancy purposes")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more from links below")," :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/alertaction_config"},(0,r.kt)("strong",{parentName:"a"},"Alert Agent Configuration"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./installation/alertaction_install"},(0,r.kt)("strong",{parentName:"a"},"Alert Agent Installation"))))}d.isMDXComponent=!0},2914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gyeeta_arch-c4baca0a6b130889ade6206080d3f787.jpg"}}]);