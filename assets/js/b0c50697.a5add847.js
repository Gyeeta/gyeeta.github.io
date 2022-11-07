"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"overview",title:"Overview & Limitations",description:"Overview/ Limitations of Gyeeta Monitoring"},s="Monitoring Overview & Limitations",a={unversionedId:"monitor/overview",id:"monitor/overview",title:"Overview & Limitations",description:"Overview/ Limitations of Gyeeta Monitoring",source:"@site/docs/monitor/overview.md",sourceDirName:"monitor",slug:"/monitor/overview",permalink:"/docs/monitor/overview",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/monitor/overview.md",tags:[],version:"current",lastUpdatedAt:1657016899,formattedLastUpdatedAt:"Jul 5, 2022",frontMatter:{id:"overview",title:"Overview & Limitations",description:"Overview/ Limitations of Gyeeta Monitoring"},sidebar:"docs",previous:{title:"Monitoring Guide",permalink:"/docs/category/monitoring-guide"},next:{title:"Technical Terms Used",permalink:"/docs/monitor/termsused"}},l={},c=[{value:"Monitoring using eBPF and Kernel Statistics",id:"ebpf-kernel",level:2},{value:"Service / Process Discovery without any configuration",id:"service-discovery",level:2},{value:"Integrations currently not supported",id:"integrations-currently-not-supported",level:2},{value:"Log Monitoring not supported",id:"log-monitoring-not-supported",level:2},{value:"Only TCP Services Monitored",id:"only-tcp-services-monitored",level:2},{value:"HTTP and Non-HTTP based Service Statistics",id:"http-nonhttp-stats",level:2},{value:"Monitored Subsystems",id:"monitored-subsystems",level:2},{value:"Query Mechanism",id:"query-mechanism",level:2},{value:"Alerts",id:"alerts",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-overview--limitations"},"Monitoring Overview & Limitations"),(0,i.kt)("h2",{id:"ebpf-kernel"},"Monitoring using eBPF and Kernel Statistics"),(0,i.kt)("p",null,"Gyeeta monitors the Application Performance in a completely non-intrusive manner using a combination of eBPF and Kernel Statistics to monitor the host.\nGyeeta does not connect to any application. Gyeeta does not insert any probes / taps or instrument any application nor does it use any tracing such as OpenTracing.  "),(0,i.kt)("p",null,"This implies that no code changes are needed in the applications and the application may use any programming language. This also ensures that there is no\npossibility of Gyeeta crashing or degrading the application as it is completely non-intrusive."),(0,i.kt)("h2",{id:"service-discovery"},"Service / Process Discovery without any configuration"),(0,i.kt)("p",null,"Gyeeta monitoring is completely automated and Gyeeta self discovers ",(0,i.kt)("em",{parentName:"p"},"all")," TCP services in a host along with its clients and dependencies with ",(0,i.kt)("em",{parentName:"p"},"no code changes"),"\nand ",(0,i.kt)("em",{parentName:"p"},"no configuration inputs"),". The Gyeeta Host Agent ",(0,i.kt)("inlineCode",{parentName:"p"},"partha")," needs only a few config options such as ",(0,i.kt)("inlineCode",{parentName:"p"},"shyama")," service IP/ports and Cluster Name and no other\nconfig inputs. "),(0,i.kt)("p",null,"Gyeeta will monitor all processes running on the host. If a service spawns multiple processes, all these process statistics are clubbed together while\nreporting the Service statistics."),(0,i.kt)("h2",{id:"integrations-currently-not-supported"},"Integrations currently not supported"),(0,i.kt)("p",null,"Gyeeta does not monitor the Performance statistics exposed by the application but figures out the statistics itself without any interaction with the application.\nGyeeta does not show Integration metrics exposed by platforms/applications such as AWS, Prometheus, Java, StatsD, Kubernetes directly.\nInstead, Gyeeta monitors platforms such as Kubernetes and applications using algorithms and corelating process and service level statistics. "),(0,i.kt)("h2",{id:"log-monitoring-not-supported"},"Log Monitoring not supported"),(0,i.kt)("p",null,"Gyeeta does not monitor logs exposed by the application."),(0,i.kt)("h2",{id:"only-tcp-services-monitored"},"Only TCP Services Monitored"),(0,i.kt)("p",null,"Gyeeta does not currently monitor UDP or Unix Domain Socket based Service Statistics."),(0,i.kt)("h2",{id:"http-nonhttp-stats"},"HTTP and Non-HTTP based Service Statistics"),(0,i.kt)("p",null,"Gyeeta reports the following main statistics for ",(0,i.kt)("em",{parentName:"p"},"all")," services : Queries/sec, Response Time (Latency), Network Throughputs, Active Connection Counts, Process Statistics\nsuch as CPU, Memory utilization and Resource (CPU, Memory, IO) Bottleneck Delays. "),(0,i.kt)("p",null,"Even if the service is non-HTTP based and uses a binary network protocol or is a proprietary service, Gyeeta will report all these statistics seamlessly."),(0,i.kt)("p",null,"For HTTP and gRPC (without TLS) services, Gyeeta will additionally report Server and Client Error Counts. Currently for HTTPS (SSL/TLS encrypted) services, Error counts are\nnot reported, although all other statistics will still be reported."),(0,i.kt)("p",null,"Additionally, Gyeeta will algorithmically auto detect Service degradation or contention and give a probable reason for the degradation."),(0,i.kt)("h2",{id:"monitored-subsystems"},"Monitored Subsystems"),(0,i.kt)("p",null,"Gyeeta monitors the following main metric categories (subsystems) :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Service State"))," which includes metrics such as Service Queries/sec, Response Times, Network Throughputs and Anomaly Detection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Process State"))," which includes metrics such as Process CPU, Memory, TCP traffic, Delay Statistics and Anomaly Detection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Network Flows"))," which includes coalescing flows across hosts and mapping Clients to Servers (Service maps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Host State"))," which includes monitoring Host CPU, Memory, host level Service and Process aggregations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Cluster State"))," which includes Cluster level Service, Process and Host aggregations"))),(0,i.kt)("p",null,"Gyeeta terms these categories as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"subsystems")),". "),(0,i.kt)("p",null,"Gyeeta will tag a state to every service, process, host and cluster such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Idle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Good"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Bad")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Severe")," based on an algorithm that\nconsiders prior history and resource contention or saturation. This helps to quickly search for entities with issues."),(0,i.kt)("h2",{id:"query-mechanism"},"Query Mechanism"),(0,i.kt)("p",null,"Gyeeta can be queried either using its Web UI or using REST APIs. Queries spanning multiple subsystems are not supported.\nFor example, a query that requests service state along with host state in a single resultset is not supported."),(0,i.kt)("p",null,"Queries can span multiple hosts with optional aggregation at custom time durations for queries of a single subsystem.\nThis feature is extremely powerful as custom aggregation queries can aggregate statistics of services across thousands of hosts with a single query."),(0,i.kt)("p",null,"Query Responses are in JSON formats. PromQL querying is currently not supported though planned for a later release.\nThe Web UI internally uses the REST APIs exposed to query the data."),(0,i.kt)("h2",{id:"alerts"},"Alerts"),(0,i.kt)("p",null,"Alerts in Gyeeta can be either Realtime alerts or based on an Aggregation Query for a prior interval. Alerts can be set on any of the subsystems mentioned above. "),(0,i.kt)("p",null,"Realtime alerts are near instantaneous such as a service response time of over 100 msec and over twice the p95 baseline or on HTTP 5xx server errors for a service\nextending to at least 3 Repeat Intervals."),(0,i.kt)("p",null,"Aggregated Query Alerts can fire alerts based on an aggregation query criteria for example, alert if any ",(0,i.kt)("inlineCode",{parentName:"p"},"redis")," instance has state ",(0,i.kt)("inlineCode",{parentName:"p"},"Severe")," for over 3 minutes."))}u.isMDXComponent=!0}}]);