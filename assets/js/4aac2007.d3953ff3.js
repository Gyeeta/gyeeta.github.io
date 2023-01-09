"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,v=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(v,l(l({ref:n},p),{},{components:t})):a.createElement(v,l({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"Gyeeta Failover Handling",description:"Gyeeta Server Components Failover Redundancy",keywords:["failover","redundancy"]},l="Gyeeta Server Components Failover / Redundancy",o={unversionedId:"installation/failover",id:"installation/failover",title:"Gyeeta Failover Handling",description:"Gyeeta Server Components Failover Redundancy",source:"@site/docs/installation/failover.md",sourceDirName:"installation",slug:"/installation/failover",permalink:"/docs/installation/failover",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/failover.md",tags:[],version:"current",lastUpdatedAt:1668972740,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{title:"Gyeeta Failover Handling",description:"Gyeeta Server Components Failover Redundancy",keywords:["failover","redundancy"]},sidebar:"docs",previous:{title:"Alert Action Agent Installation",permalink:"/docs/installation/alertaction_install"},next:{title:"Kubernetes Helm Charts",permalink:"/docs/installation/k8s_helm/"}},s={},d=[{value:"Shyama Server Redundancy",id:"shyama-redundancy",level:2},{value:"Madhava Server Redundancy",id:"madhava-redundancy",level:2},{value:"Node Webserver Redundancy",id:"nodewebserver-redundancy",level:2},{value:"Alert Agent Redundancy",id:"alertaction-redundancy",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gyeeta-server-components-failover--redundancy"},"Gyeeta Server Components Failover / Redundancy"),(0,i.kt)("p",null,"Gyeeta supports Failover Handling (High Availability) for its Server components :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shyama Central Server (Active-Passive mode)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Madhava Intermediate Servers (Active-Passive mode)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Node Webservers (Active-Active mode)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alert Action Agent (Active-Active mode)"))),(0,i.kt)("p",null,"For Postgres DB Failover, we recommend using a Shared Disk Failover as by default, Replication is disabled."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section can be ignored for Kubernetes based Gyeeta Installs.")),(0,i.kt)("p",null,"It is recommended that the failover installs be done on a separate host as compared to the Active installation\nfor better Redundancy."),(0,i.kt)("h2",{id:"shyama-redundancy"},"Shyama Server Redundancy"),(0,i.kt)("p",null,"Shyama Server Redundancy is provided by sharing the Postgres DB amongst the Active-Passive Shyama instances."),(0,i.kt)("p",null,"For this, all the Active-Passive Shyama instances will need to have some of the Config Options shared across all instances.\nNamely, the following Config fields need to be same across the Active-Passive Shyama instances :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shyama_name")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_NAME")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shyama_secret")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_SECRET")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_madhava")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_MIN_MADHAVA")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_hostname")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_HOSTNAME")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_port")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_PORT")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_user")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_USER")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_password")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_PASSWORD")," env")),(0,i.kt)("p",null,"In addition to the config fields above, any ",(0,i.kt)("a",{parentName:"p",href:"./shyama_install#cli-args"},"CLI arguments")," passed to all Shyama Instances needs to be same for all instances."),(0,i.kt)("p",null,"The Passive Shyama instances will monitor the Active Shyama status and on detecting a Failure condition,\none of the Passive Shyama instances will then take over as the next Active Instance."),(0,i.kt)("p",null,"The Failover can take upto 3 minutes time duration."),(0,i.kt)("h2",{id:"madhava-redundancy"},"Madhava Server Redundancy"),(0,i.kt)("p",null,"Madhava Server Redundancy is provided by sharing the Postgres DB amongst the Active-Passive Madhava instances."),(0,i.kt)("p",null,"For this, all the Active-Passive Madhava instances will need to have some of the Config Options shared across all instances.\nNamely, the following Config fields need to be same across the Active-Passive Madhava instances :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shyama_hosts")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_HOSTS")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shyama_ports")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_PORTS")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shyama_secret")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_SECRET")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"madhava_name")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_MADHAVA_NAME")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_hostname")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_HOSTNAME")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_port")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_PORT")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_user")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_USER")," env"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_password")," json field or ",(0,i.kt)("inlineCode",{parentName:"li"},"CFG_POSTGRES_PASSWORD")," env")),(0,i.kt)("p",null,"The Passive Madhava instances will monitor the Active Madhava status and on detecting a Failure condition,\none of the Passive Madhava instances will then take over as the next Active Instance."),(0,i.kt)("p",null,"The Failover can take upto 3 minutes time duration."),(0,i.kt)("h2",{id:"nodewebserver-redundancy"},"Node Webserver Redundancy"),(0,i.kt)("p",null,"Node Webserver Redundancy can be provided by installing multiple instances of the Webserver in an Active-Active mode."),(0,i.kt)("p",null,"For this, all the Active-Active Webserver instances will need to have some of the Config Options shared across all instances."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_HOSTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_PORTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_ADMINPASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_USERPASSFILE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_TOKENEXPIRY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_JWTSECRET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_USEHTTP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_TLSCERTFILE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_TLSKEYFILE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_TLSPASSPHRASE"))),(0,i.kt)("p",null,"As the Webserver instances are running in Active-Active mode, users can connect to any of the Webserver instances to\naccess the Web UI or use for REST APIs."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Although any of the Webserver instances can be used for querying, it is recommended that users query from a single\nWebserver instance for better querying performance as Resultset caching is not shared across Webserver instances.")),(0,i.kt)("h2",{id:"alertaction-redundancy"},"Alert Agent Redundancy"),(0,i.kt)("p",null,"Alert Agent Redundancy can be provided by installing multiple instances of the Alert Agent in an Active-Active mode."),(0,i.kt)("p",null,"For this, all the Active-Active Webserver instances will need to have some of the Config Options shared across all instances."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_HOSTS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CFG_SHYAMA_PORTS"))),(0,i.kt)("p",null,"As the Alert Agent instances are running in Active-Active mode, the Shyama server will assign any of the Alert Agents the\nNotification responsibilities."))}c.isMDXComponent=!0}}]);