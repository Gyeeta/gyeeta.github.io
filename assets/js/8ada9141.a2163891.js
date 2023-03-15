"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7398],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var s=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return a?s.createElement(f,r(r({ref:t},p),{},{components:a})):s.createElement(f,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<n;c++)r[c]=a[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=a(7462),i=(a(7294),a(3905));const n={id:"stateclassify",title:"State Classification",description:"Classification of States"},r="Classification of States",o={unversionedId:"querying/stateclassify",id:"querying/stateclassify",title:"State Classification",description:"Classification of States",source:"@site/docs/querying/stateclassify.md",sourceDirName:"querying",slug:"/querying/stateclassify",permalink:"/docs/querying/stateclassify",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/querying/stateclassify.md",tags:[],version:"current",lastUpdatedAt:1678893896,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"stateclassify",title:"State Classification",description:"Classification of States"},sidebar:"docs",previous:{title:"Query Aggregation",permalink:"/docs/querying/aggregation"},next:{title:"Grouped Processes",permalink:"/docs/querying/groupprocess"}},l={},c=[{value:"Types of states classified",id:"types-of-states-classified",level:2},{value:"<em>Idle</em> State",id:"idle-state",level:3},{value:"<em>Good</em> State",id:"good-state",level:3},{value:"<em>OK</em> State",id:"ok-state",level:3},{value:"<em>Bad</em> State",id:"bad-state",level:3},{value:"<em>Severe</em> State",id:"severe-state",level:3},{value:"Sample Snapshot",id:"sample-snapshot",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"classification-of-states"},"Classification of States"),(0,i.kt)("p",null,"Gyeeta adds a Classifier field named ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," to the following subsystems :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CPU"),(0,i.kt)("li",{parentName:"ul"},"Memory"),(0,i.kt)("li",{parentName:"ul"},"Host State"))),(0,i.kt)("li",{parentName:"ul"},"Service"),(0,i.kt)("li",{parentName:"ul"},"Process")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," field indicates the current state of the subsystem as determined by Gyeeta based on an algorithmic deduction."),(0,i.kt)("h2",{id:"types-of-states-classified"},"Types of states classified"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," can have be one of the following states :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Idle"),(0,i.kt)("li",{parentName:"ul"},"Good"),(0,i.kt)("li",{parentName:"ul"},"OK"),(0,i.kt)("li",{parentName:"ul"},"Bad"),(0,i.kt)("li",{parentName:"ul"},"Severe")),(0,i.kt)("h3",{id:"idle-state"},(0,i.kt)("em",{parentName:"h3"},"Idle")," State"),(0,i.kt)("p",null,"This state indicates an idle or a mildly active subsystem. For example, in case of a Service, this state could mean the Service Queries\nare much lower than normal with no abnormal Response time (latency). Also the lower query count could not be deduced to some process issue."),(0,i.kt)("h3",{id:"good-state"},(0,i.kt)("em",{parentName:"h3"},"Good")," State"),(0,i.kt)("p",null,"This state indicates an active subsystem but which is neither saturated nor too idle. "),(0,i.kt)("p",null,"For example, in case of a Host, this state could mean the Host CPU, Memory statistics are around the baseline values and also, no\nprocess or service issues are seen."),(0,i.kt)("h3",{id:"ok-state"},(0,i.kt)("em",{parentName:"h3"},"OK")," State"),(0,i.kt)("p",null,"This state indicates a subsystem which is neither idle nor approaching saturation. Gyeeta will classify a subsystem as ",(0,i.kt)("em",{parentName:"p"},"OK")," if\nit determines that the state is mildly deteriorated from its baselines but not by a long way off so as to trigger a ",(0,i.kt)("em",{parentName:"p"},"Bad")," state."),(0,i.kt)("h3",{id:"bad-state"},(0,i.kt)("em",{parentName:"h3"},"Bad")," State"),(0,i.kt)("p",null,"This state indicates a subsystem which is deteriorated from its baselines. For example, in case of a process, Gyeeta will\nclassify the Process ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," as ",(0,i.kt)("em",{parentName:"p"},"Bad")," if it determines that the CPU delays the process is facing is over its baseline by a\nnon-infinitesimal amount."),(0,i.kt)("h3",{id:"severe-state"},(0,i.kt)("em",{parentName:"h3"},"Severe")," State"),(0,i.kt)("p",null,"This state indicates a subsystem which is severely deteriorated from its baselines. For example, in case of a process, Gyeeta will\nclassify the Process ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," as ",(0,i.kt)("em",{parentName:"p"},"Severe")," if it determines that the process is facing Memory Thrashing delays."),(0,i.kt)("h2",{id:"sample-snapshot"},"Sample Snapshot"),(0,i.kt)("p",null,"A sample snapshot of the ",(0,i.kt)("em",{parentName:"p"},"Process")," subsystem States is shown below :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Process States",src:a(5974).Z,width:"1920",height:"611"})),(0,i.kt)("p",null,"As seen from above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres")," process state is classified as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Bad"))," due to Major Page Faults."))}m.isMDXComponent=!0},5974:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/procstate1-fa92ff9be33c0b88b6fef5feac97401f.png"}}]);