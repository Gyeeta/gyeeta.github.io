"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=i,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return r?a.createElement(g,n(n({ref:t},u),{},{components:r})):a.createElement(g,n({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var c=2;c<s;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const s={id:"searchshow",title:"Search Showcase",description:"Gyeeta Search Showcase"},n="Gyeeta Search Showcase",o={unversionedId:"searchshow",id:"searchshow",title:"Search Showcase",description:"Gyeeta Search Showcase",source:"@site/docs/searchshow.md",sourceDirName:".",slug:"/searchshow",permalink:"/docs/searchshow",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/searchshow.md",tags:[],version:"current",lastUpdatedAt:1657971868,formattedLastUpdatedAt:"Jul 16, 2022",frontMatter:{id:"searchshow",title:"Search Showcase",description:"Gyeeta Search Showcase"},sidebar:"docs",previous:{title:"Alerts Dashboard",permalink:"/docs/monitor/alertdash"},next:{title:"Alerts Guide",permalink:"/docs/category/alerts-guide"}},l={},c=[{value:"Search for a Service with HTTP 5xx Server Errors or Persistent Higher Response (Latency) than usual",id:"search-for-a-service-with-http-5xx-server-errors-or-persistent-higher-response-latency-than-usual",level:2},{value:"Search for a CPU Limited Process with persistent CPU throttling within a cluster",id:"search-for-a-cpu-limited-process-with-persistent-cpu-throttling-within-a-cluster",level:2},{value:"Find Cumulative Query Count and Avg Latency for multiple Postgres Instances in a Cluster over last 1 hour",id:"find-cumulative-query-count-and-avg-latency-for-multiple-postgres-instances-in-a-cluster-over-last-1-hour",level:2},{value:"Find all Kubernetes or Container Processes with Avg CPU approaching their CPU Limit",id:"find-all-kubernetes-or-container-processes-with-avg-cpu-approaching-their-cpu-limit",level:2},{value:"Find Kubernetes or Container Processes approaching their Memory Limit set",id:"find-kubernetes-or-container-processes-approaching-their-memory-limit-set",level:2},{value:"Find any service in a Cluster with a Higher Query Count than usual",id:"find-any-service-in-a-cluster-with-a-higher-query-count-than-usual",level:2},{value:"Find all Hosts with unusually High New Process Spawns or High Runnable Process Counts",id:"find-all-hosts-with-unusually-high-new-process-spawns-or-high-runnable-process-counts",level:2},{value:"Find all Realtime priority Processes which are CPU Limited (Throttled)",id:"find-all-realtime-priority-processes-which-are-cpu-limited-throttled",level:2},{value:"Get Kubernetes Cumulative Service Statistics for Clustered Services based on Virtual IPs",id:"get-kubernetes-cumulative-service-statistics-for-clustered-services-based-on-virtual-ips",level:2},{value:"Find all Processes with unusual Disk IO Latency",id:"find-all-processes-with-unusual-disk-io-latency",level:2},{value:"Find all Services with unusually high Active Network Connections",id:"find-all-services-with-unusually-high-active-network-connections",level:2},{value:"Find all Recently Started Services with HTTP 4xx Client Errors &gt; 50% of all Queries",id:"find-all-recently-started-services-with-http-4xx-client-errors--50-of-all-queries",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gyeeta-search-showcase"},"Gyeeta Search Showcase"),(0,i.kt)("p",null,"Some examples of how Gyeeta Search can be used for querying are shown below. Each example\nincludes a Video showing the Web UI Search. The corresponding Search using REST APIs is also shown."),(0,i.kt)("p",null,"All the showed Search examples can also be used as Alert conditions."),(0,i.kt)("p",null,"Please read the ",(0,i.kt)("a",{parentName:"p",href:"./querying/datatypes"},"Query Data Types & Filters")," link prior to reading this section."),(0,i.kt)("h2",{id:"search-for-a-service-with-http-5xx-server-errors-or-persistent-higher-response-latency-than-usual"},"Search for a Service with HTTP 5xx Server Errors or Persistent Higher Response (Latency) than usual"),(0,i.kt)("p",null,"This query involves ",(0,i.kt)("inlineCode",{parentName:"p"},"extsvcstate")," (Extended Service State) subsystem. Please note that Gyeeta will be able to\ncapture 4xx and 5xx HTTP Errors only for non-TLS Services. i.e. HTTPS services will not report 4xx and 5xx Errors."),(0,i.kt)("p",null,"To search for Higher Response or Latency than usual, users can check Service State field itself as Gyeeta will set\nthe Service State as ",(0,i.kt)("em",{parentName:"p"},"Bad")," or ",(0,i.kt)("em",{parentName:"p"},"Severe")," based on an Response Times (checking both average and p95 5 sec response times) and QPS. "),(0,i.kt)("p",null,"The video shows a query for last 30 min. No Pre-aggregation filters are set as this is a global query."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/J-I50Gt9bEE?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("p",null,"The corresponding cURL REST API call is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extsvcstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"starttime":"2022-07-01T19:37:04+05:30","endtime":"2022-07-01T20:07:04+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"","aggrfilter":"( { svcissue > 0 }  or  { sererr > 0 } )"}}\' \n\n')),(0,i.kt)("h2",{id:"search-for-a-cpu-limited-process-with-persistent-cpu-throttling-within-a-cluster"},"Search for a CPU Limited Process with persistent CPU throttling within a cluster"),(0,i.kt)("p",null,"This query involves ",(0,i.kt)("inlineCode",{parentName:"p"},"extprocstate")," (Extended Process State) subsystem. Pre-aggregation filter set for\ncluster and CPU Throttles process. Post-aggregation filter specifies search for a process where 'Degrades by Process CPU Delay' > 0."),(0,i.kt)("p",null,"The query is for the last 15 min interval. Aggregation interval set as 5 hours. (Any Aggregation interval >= query interval will result in\na single aggregated record  as aggregation will apply over the entire query period)."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/hHE509EUw5Y?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extprocstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-01T20:23:55+05:30","endtime":"2022-07-01T20:38:55+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"( { cluster = \\\'k8s1\\\' }  and  { cputhr = true } )","aggrfilter":" { incpudel > 3 } "}}\' \n\n')),(0,i.kt)("h2",{id:"find-cumulative-query-count-and-avg-latency-for-multiple-postgres-instances-in-a-cluster-over-last-1-hour"},"Find Cumulative Query Count and Avg Latency for multiple Postgres Instances in a Cluster over last 1 hour"),(0,i.kt)("p",null,"To get the Cumulative Statistics as a single record for multiple Service or Process instances, a Custom Aggregation is needed as\nshown in the video below."),(0,i.kt)("p",null,"The Pre-Aggregation Filter is for a Cluster name and Service name (",(0,i.kt)("inlineCode",{parentName:"p"},"postgres"),"). The default Numerical Aggregation is set as ",(0,i.kt)("em",{parentName:"p"},"Sum of interval"),"\nas Cumulative stats are needed and not averages."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/wx-4km4RwP4?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extsvcstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-01T21:07:50+05:30","endtime":"2022-07-01T22:07:50+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"( { name = \\\'postgres\\\' }  and  { cluster = \\\'dev1\\\' } )","columns":["name","sum(nqry5s) as sum_nqry5s","avg(resp5s) as avg_resp5s","avg(p95resp5s) as avg_p95resp5s"]}}\'\n\n')),(0,i.kt)("h2",{id:"find-all-kubernetes-or-container-processes-with-avg-cpu-approaching-their-cpu-limit"},"Find all Kubernetes or Container Processes with Avg CPU approaching their CPU Limit"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extprocstate")," (Extended Process State) subsystem. "),(0,i.kt)("p",null,"The query duration is of last 30 min. Aggregation interval is set as 5 min as we do not want averages of entire query duration skewing\ntemporary peaks in CPU utilization."),(0,i.kt)("p",null,"The Pre-Aggregation filter is set for all CPU Limited processes with Cgroup CPU Limit > 0."),(0,i.kt)("p",null,"The Post-Aggregation filter is set as Avg CPU over 5 min * 1.3 > Cgroup CPU Limit %."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/Llb13OfJ4Zg?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extprocstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"starttime":"2022-07-01T22:37:11+05:30","endtime":"2022-07-01T23:07:11+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":300,"aggroper":"avg","filter":"( { cputhr = true }  and  { cgcpulimpct > 0 } )","aggrfilter":" { cpu * 1.3 > cgcpulimpct } "}}\' \n\n')),(0,i.kt)("h2",{id:"find-kubernetes-or-container-processes-approaching-their-memory-limit-set"},"Find Kubernetes or Container Processes approaching their Memory Limit set"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extprocstate")," (Extended Process State) subsystem. "),(0,i.kt)("p",null,"The query duration is of last 30 min. Aggregation interval is set as 5 min as we do not want averages of entire query duration skewing\ntemporary peaks in Memory RSS utilization."),(0,i.kt)("p",null,"The Pre-Aggregation filter is set for all Memory Limited processes."),(0,i.kt)("p",null,"The Post-Aggregation filter is set as 'cgroup Resident Memory %' > 80."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/huCEfXrvnBA?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extprocstate\' \\\n  -H \'Accept: application/json, text/plain, */*\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1NjY2NzU3OSwiZXhwIjoxNjU2NzUzOTc5fQ.U9JRM7YlhILj-PQRLx69pNK7bTncNXJ6ycPzapfB4rk\' \\\n -d\'{"starttime":"2022-07-01T23:32:29+05:30","endtime":"2022-07-02T00:02:29+05:30","timeoutsec":100,"options":{"maxrecs":10000,"aggrsec":300,"aggroper":"avg","filter":" { memlim = true } "}}\' \n\n')),(0,i.kt)("h2",{id:"find-any-service-in-a-cluster-with-a-higher-query-count-than-usual"},"Find any service in a Cluster with a Higher Query Count than usual"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extsvcstate")," (Extended Service State) subsystem. "),(0,i.kt)("p",null,"The Pre-Aggregation filter is for a Cluster."),(0,i.kt)("p",null,"The Post-Aggregation filter is for Avg QPS over the entire query interval > p95 QPS or for 'Degrades by High QPS' > 0 which would be the case\nfor instantaneous bursts in QPS as well."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/nn35pi5iOYo?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extsvcstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njc1NTAzMywiZXhwIjoxNjU2ODQxNDMzfQ.Yq2JDNXCLol8TAsY_qacrBBRWTAI1RQGoI1A-jl8sqE\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-02T14:50:05+05:30","endtime":"2022-07-02T15:50:05+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"avg","filter":" { cluster = \\\'k8s1\\\' } ","aggrfilter":"( { nqry5s > p95qps }  or  { inqps > 0 } )","sortcolumns":["qps5s"],"sortdir":["desc"]}}\' \n\n')),(0,i.kt)("h2",{id:"find-all-hosts-with-unusually-high-new-process-spawns-or-high-runnable-process-counts"},"Find all Hosts with unusually High New Process Spawns or High Runnable Process Counts"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"cpumem")," (Host CPU Memory) subsystem. "),(0,i.kt)("p",null,'The Pre-Aggregation filter is for all Hosts with "CPU Issue Cause"  as either "High New Process Creation Rate" or "Runnable Process Count High".'),(0,i.kt)("p",null,"Note, here the filtering is done in Pre-Aggregation stage to catch all instantaneous (sporadic) issues as well."),(0,i.kt)("p",null,'If consistent issue presence is needed, Pre-Aggregation filter should be empty and the Post-Aggregation filter set to\n"Degrades by New Process/sec" > 5 or "Degrades by Runnable Process" > 5 as Aggregation interval is over entire period and Default Numerical Aggregation Operation\nset to "Sum of Interval".'),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/rSO66RAQenY?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/cpumem\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njc1NTAzMywiZXhwIjoxNjU2ODQxNDMzfQ.Yq2JDNXCLol8TAsY_qacrBBRWTAI1RQGoI1A-jl8sqE\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"starttime":"2022-07-02T15:35:21+05:30","endtime":"2022-07-02T16:35:21+05:30","options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"avg","filter":" { cpuissue in  5, 6 } ","sortcolumns":["forks_sec"],"sortdir":["desc"]}}\'\n\n')),(0,i.kt)("h2",{id:"find-all-realtime-priority-processes-which-are-cpu-limited-throttled"},"Find all Realtime priority Processes which are CPU Limited (Throttled)"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"procinfo")," (Process Info) subsystem as the ",(0,i.kt)("inlineCode",{parentName:"p"},"rtproc")," (Real Time process) field is present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"procinfo")," subsystem only."),(0,i.kt)("p",null,"Pre-Aggregation filter is set to 'Real Time Process' is true and 'CPU Throttled Process' is true.\nNo Post-Aggregation filters are needed. "),(0,i.kt)("p",null,'The Default Numerical Aggregation Operation is set to "Max of interval" to get the max p95 CPU Delays if any.'),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/_o19Lh_SLB4?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/procinfo\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njc1NTAzMywiZXhwIjoxNjU2ODQxNDMzfQ.Yq2JDNXCLol8TAsY_qacrBBRWTAI1RQGoI1A-jl8sqE\' \\\n  -H \'Content-Type: application/json\' \\\n  --data-raw \'{"starttime":"2022-07-02T16:39:24+05:30","endtime":"2022-07-02T17:09:24+05:30","options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"max","filter":"( { rtproc = true }  and  { cputhr = true } )","sortcolumns":["p95cpudel"],"sortdir":["desc"]}}\' \n\n')),(0,i.kt)("h2",{id:"get-kubernetes-cumulative-service-statistics-for-clustered-services-based-on-virtual-ips"},"Get Kubernetes Cumulative Service Statistics for Clustered Services based on Virtual IPs"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extsvcstate")," (Extended Service State) subsystem."),(0,i.kt)("p",null,'As Cumulative Statistics are needed for multiple Services, this requires a Custom Aggregation query. Also, the Default Numerical Aggregation Operation is to be\n"Sum of interval".'),(0,i.kt)("p",null,"The Pre-Aggregation filter is used to filter out services without Virtual IP or Port set."),(0,i.kt)("p",null,"The Post-Aggregation Custom columns use a combination of averages and percentiles as shown in the video below."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/xUq_vGHxGOU?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extsvcstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-03T20:30:52+05:30","endtime":"2022-07-03T21:30:52+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":"( { svcip1 != \\\'\\\' }  and  { svcport1 != 0 } )","columns":["name","cluster","svcip1","svcport1","avg(qps5s) as avg_qps5s","avg(resp5s) as avg_resp5s","avg(nactive) as avg_nactive","sum(kbin15s) as sum_kbin15s","sum(kbout15s) as sum_kbout15s","sum(sererr) as sum_sererr","sum(clierr) as sum_clierr","percentile(0.95, resp5s) as percentile_resp5s"],"sortcolumns":["avg_qps5s"],"sortdir":["desc"]}}\'\n\n')),(0,i.kt)("h2",{id:"find-all-processes-with-unusual-disk-io-latency"},"Find all Processes with unusual Disk IO Latency"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extprocstate")," (Extended Process State) subsystem."),(0,i.kt)("p",null,'The Default Numerical Operation is to be "Avg of Interval".'),(0,i.kt)("p",null,"The Pre-Aggregation filter is for Cluster Name."),(0,i.kt)("p",null,'The Post-Aggregation filter is for "Degrades by Block IO Latency" > 0. This will match any process where at least 5-10 sec of unusual Block IO (Disk IO) activity\nwas seen. If a sustained Disk IO Latency search is needed, users should increase the count of "Degrades by Block IO Latency" to say 20 or more.'),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/zo3r9CKYDEc?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extprocstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-03T21:03:24+05:30","endtime":"2022-07-03T22:03:24+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"avg","filter":" { cluster = \\\'k8s1\\\' } ","aggrfilter":" { iniodel > 0 } "}}\'\n\n')),(0,i.kt)("h2",{id:"find-all-services-with-unusually-high-active-network-connections"},"Find all Services with unusually high Active Network Connections"),(0,i.kt)("p",null,"This query uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extsvcstate")," (Extended Service State) subsystem."),(0,i.kt)("p",null,'The Default Numerical Operation is to be "Avg of Interval" with Aggregation over entire Query Period.'),(0,i.kt)("p",null,"The Pre-Aggregation filter is for Cluster Name."),(0,i.kt)("p",null,'The Post-Aggregation filter is Avg Active Connections over entire query interval > its p95 or "Degrades by High Active Conns" > 0.\nThe latter condition will match any 5-10 sec period of unusual Active Connections. If a sustained High Active connections search is needed,\nusers can increase the count of Degrades to say over 20.'),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/L_Jein6LPls?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extsvcstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-03T12:38:29+05:30","endtime":"2022-07-04T00:38:29+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":432000,"aggroper":"avg","filter":" { cluster = \\\'k8s1\\\' } ","aggrfilter":"( { nactive > p95aconn }  or  { inaconn > 0 } )","sortcolumns":["nactive"],"sortdir":["desc"]}}\'\n\n')),(0,i.kt)("h2",{id:"find-all-recently-started-services-with-http-4xx-client-errors--50-of-all-queries"},"Find all Recently Started Services with HTTP 4xx Client Errors > 50% of all Queries"),(0,i.kt)("p",null,"This query is for ",(0,i.kt)("inlineCode",{parentName:"p"},"extsvcstate")," (Extended Service State) subsystem."),(0,i.kt)("p",null,'The Default Numerical Operation is to be "Sum of Interval" with Aggregation over entire Query Period.'),(0,i.kt)("p",null,"The Pre-Aggregation filter is for Services with Start Time in the last 10 minutes."),(0,i.kt)("p",null,"The Post-Aggregation filter is for Client 4xx Errors * 2 > Total Query Count."),(0,i.kt)("iframe",{width:"500px",height:"300px",src:"https://www.youtube.com/embed/KyZjqKCvDCA?rel=0",title:"Gyeeta YouTube video player",frameBorder:"0",hd:"1",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl \'http://localhost:8080/v1/extsvcstate\' \\\n  -H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY1Njg2MjUwMCwiZXhwIjoxNjU2OTQ4OTAwfQ.q_cIu7t9Qx20VN_jjFwLVeKZbTua_3-feDHQh_wLga4\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{"starttime":"2022-07-04T00:27:07+05:30","endtime":"2022-07-04T00:57:07+05:30","timeoutsec":500,"options":{"maxrecs":10000,"aggregate":true,"aggrsec":18000,"aggroper":"sum","filter":" { tstart > \\\'2022-07-04 00:47:30+05:30\\\' } ","aggrfilter":" { clierr * 2 > inrecs } ","sortcolumns":["clierr"],"sortdir":["desc"]}}\'\n\n')))}p.isMDXComponent=!0}}]);