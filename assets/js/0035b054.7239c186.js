"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const s={id:"k8s",title:"Kubernetes Analysis",description:"Kubernetes Analysis"},a="Kubernetes Analysis",o={unversionedId:"querying/k8s",id:"querying/k8s",title:"Kubernetes Analysis",description:"Kubernetes Analysis",source:"@site/docs/querying/k8s.md",sourceDirName:"querying",slug:"/querying/k8s",permalink:"/docs/querying/k8s",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/querying/k8s.md",tags:[],version:"current",lastUpdatedAt:1658074330,formattedLastUpdatedAt:"Jul 17, 2022",frontMatter:{id:"k8s",title:"Kubernetes Analysis",description:"Kubernetes Analysis"},sidebar:"docs",previous:{title:"Network Flows / Service Maps",permalink:"/docs/querying/netflows"},next:{title:"Web UI",permalink:"/docs/category/web-ui"}},l={},p=[{value:"Pods",id:"pods",level:2},{value:"Service IP/Port",id:"service-ipport",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Containers",id:"containers",level:2},{value:"CPU and Memory Limits",id:"cpu-and-memory-limits",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kubernetes-analysis"},"Kubernetes Analysis"),(0,i.kt)("p",null,"Kubernetes analysis presents challenges due to the multiple elements involved :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clusters"),(0,i.kt)("li",{parentName:"ul"},"Namespaces"),(0,i.kt)("li",{parentName:"ul"},"Services"),(0,i.kt)("li",{parentName:"ul"},"Pods"),(0,i.kt)("li",{parentName:"ul"},"Containers")),(0,i.kt)("p",null,"Gyeeta does not directly interact with the Kubernetes API server. Instead, Gyeeta extracts the information non-intrusively as\nexplained below :"),(0,i.kt)("h2",{id:"pods"},"Pods"),(0,i.kt)("p",null,"Gyeeta extracts the Pod Information from Process Environment. This is not failsafe as processes may overwrite their environment\nvariables."),(0,i.kt)("p",null,"Gyeeta stores the Pod Name in the Service or Process ",(0,i.kt)("inlineCode",{parentName:"p"},"tagname")," field (",(0,i.kt)("em",{parentName:"p"},"Tag Name")," is the corresponding descriptive name)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To enable Kubernetes Pod Analysis, the monitored host ",(0,i.kt)("inlineCode",{parentName:"p"},"partha")," config file should have ",(0,i.kt)("inlineCode",{parentName:"p"},"is_kubernetes")," field set to true.\nIf not specified, ",(0,i.kt)("inlineCode",{parentName:"p"},"is_kubernetes")," is assumed to be true.")),(0,i.kt)("h2",{id:"service-ipport"},"Service IP/Port"),(0,i.kt)("p",null,"Gyeeta stores the Kubernetes Service IP/Port within the ",(0,i.kt)("inlineCode",{parentName:"p"},"svcip1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"svcport1")," fields (",(0,i.kt)("em",{parentName:"p"},"Virtual IP Address 1")," and\n",(0,i.kt)("em",{parentName:"p"},"Virtual Port 1")," being the corresponding descriptive names). Gyeeta extracts this information from the Network Flows\nseen. "),(0,i.kt)("p",null,"This implies, that if no network connections are seen for a service, its ",(0,i.kt)("inlineCode",{parentName:"p"},"svcip1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"svcport1")," fields will be empty."),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("p",null,"The Kubernetes Namespace name will be part of the Service Domain Names. For example, if a service, say ",(0,i.kt)("em",{parentName:"p"},"mysvc")," is part of Kubernetes\nNamespace ",(0,i.kt)("em",{parentName:"p"},"sockshop"),", the service DNS entry could be ",(0,i.kt)("em",{parentName:"p"},"mysvc.sockshop.svc.cluster.local"),"."),(0,i.kt)("p",null,"This implies that to get the namespace for a Service, the ",(0,i.kt)("inlineCode",{parentName:"p"},"svcdns")," field (",(0,i.kt)("em",{parentName:"p"},"Service Domain Name")," descriptive name) needs to be checked."),(0,i.kt)("p",null,"Also, the Process Info will not have any ",(0,i.kt)("inlineCode",{parentName:"p"},"svcdns")," field and so Kubernetes namespace of a Client process cannot be known in Gyeeta directly,\nunless the Client Process itself is also a Service."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Gyeeta will capture DNS entries only if was used by a Client application. If all clients directly use the IP instead of the domain,\nthe Service Domain will remain empty.")),(0,i.kt)("h2",{id:"containers"},"Containers"),(0,i.kt)("p",null,"Gyeeta monitors all containers as well as their corresponding cgroups. Currently, Gyeeta does not expose the cgroup statistics\ndirectly, but uses them internaly."),(0,i.kt)("h2",{id:"cpu-and-memory-limits"},"CPU and Memory Limits"),(0,i.kt)("p",null,"Gyeeta shows the Kubernetes CPU Limits and Memory Limits as a percentage of max allowed within the Process State or Process Info statistics.\nGyeeta will display whether the process is a CPU Throttled Process or a Memory Limited Process depending on whether Limits are set or not."),(0,i.kt)("p",null,"Gyeeta will also show the current Process cgroup CPU and Memory Utilization as a percentage value based on the Max CPU / Memory Allowed."),(0,i.kt)("p",null,"Gyeeta will also report the CPU Delays experienced by the process. If the process is a CPU Throttled process (CPU Limits specified) and\nif CPU Delays are being experienced by the process, it could imply either CPU throttling because of cgroup limits or overall\nsystem CPU contention or the process is taking up all CPU cores."))}m.isMDXComponent=!0}}]);