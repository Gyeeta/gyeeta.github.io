"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"introduction",title:"Introduction",description:"Introduction to Gyeeta",slug:"/"},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Introduction to Gyeeta",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1658404661,formattedLastUpdatedAt:"Jul 21, 2022",frontMatter:{id:"introduction",title:"Introduction",description:"Introduction to Gyeeta",slug:"/"},sidebar:"docs",next:{title:"Architecture",permalink:"/docs/architecture"}},s={},c=[{value:"Salient Features",id:"salient-features",level:2},{value:"Key Observability Capabilities",id:"key-observability-capabilities",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Gyeeta"))," is a non intrusive, ",(0,o.kt)("em",{parentName:"p"},"100% Open Source (GPLv3)")," and ",(0,o.kt)("em",{parentName:"p"},"Free")," Infrastructure, Services and Process Level monitor (",(0,o.kt)("em",{parentName:"p"},"Linux")," only).  "),(0,o.kt)("h2",{id:"salient-features"},"Salient Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitor Hosts, Services, Processes at ",(0,o.kt)("em",{parentName:"li"},"Global")," scale (scales to ",(0,o.kt)("em",{parentName:"li"},"tens of thousands")," of hosts)."),(0,o.kt)("li",{parentName:"ul"},"Completely Open Source including Agent and Server components. Free to use ",(0,o.kt)("em",{parentName:"li"},"forever"),"."),(0,o.kt)("li",{parentName:"ul"},"Completely non-intrusive monitoring using a combination of ",(0,o.kt)("a",{parentName:"li",href:"https://ebpf.io/"},"eBPF")," and Kernel Statistics."),(0,o.kt)("li",{parentName:"ul"},"All Data In-House (On Prem). No external data transfer. "),(0,o.kt)("li",{parentName:"ul"},"Monitor Kubernetes and other Cloud Native Cluster orchestrators.")),(0,o.kt)("h2",{id:"key-observability-capabilities"},"Key Observability Capabilities"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Service Level Statistics such as Queries/sec, Response Times (Latency) and HTTP Errors (if HTTP based) with no manual inputs or integrations.\nMonitors binary / proprietary network protocol or non HTTP Service statistics as well."),(0,o.kt)("li",{parentName:"ol"},"Query Global Aggregated Statistics from multiple servers using Web UI or REST APIs."),(0,o.kt)("li",{parentName:"ol"},"Self Learning Algorithms that can detect Anomalies, Contention or Degradation without any manual inputs. "),(0,o.kt)("li",{parentName:"ol"},"Advanced Cluster, Service or Process Level Alerts."),(0,o.kt)("li",{parentName:"ol"},"Detect Process Level ",(0,o.kt)("em",{parentName:"li"},"CPU starvation, Virtual Memory or IO Bottlenecks"),". "),(0,o.kt)("li",{parentName:"ol"},"Monitors all applications without any instrumentation or tapping irrespective of the programming language used."),(0,o.kt)("li",{parentName:"ol"},"Auto Detect Service Dependencies and Service Network Flows (Service Maps).")))}p.isMDXComponent=!0}}]);