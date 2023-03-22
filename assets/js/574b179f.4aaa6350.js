"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,u=c["".concat(i,".").concat(m)]||c[m]||h[m]||o;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Install Planning and Options",description:"Gyeeta Install Planning and Options",keywords:["installation"]},l="Gyeeta Install Planning and Options",s={unversionedId:"installation/install_options",id:"installation/install_options",title:"Install Planning and Options",description:"Gyeeta Install Planning and Options",source:"@site/docs/installation/install_options.md",sourceDirName:"installation",slug:"/installation/install_options",permalink:"/docs/installation/install_options",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/install_options.md",tags:[],version:"current",lastUpdatedAt:1679489762,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{title:"Install Planning and Options",description:"Gyeeta Install Planning and Options",keywords:["installation"]},sidebar:"docs",previous:{title:"Installation & Configuration",permalink:"/docs/category/installation--configuration"},next:{title:"TL;DR Quick Server Install",permalink:"/docs/installation/tldr_quick_install"}},i={},d=[{value:"Install Options for Gyeeta components",id:"install-options",level:2},{value:"Host Requirements",id:"host-requirements",level:2},{value:"CPU Architectures Supported",id:"cpu-architectures-supported",level:3},{value:"Serverless monitoring not supported",id:"serverless-monitoring-not-supported",level:3},{value:"GKE Support",id:"gke-support",level:3},{value:"Minimum Linux Kernel Versions",id:"minimum-linux-kernel-versions",level:3},{value:"Supported Linux Distributions",id:"supported-linux-distributions",level:3},{value:"Planning the Gyeeta Deployment",id:"planning-the-gyeeta-deployment",level:2},{value:"Number of Madhava Servers needed",id:"num-madhava",level:3},{value:"Network Connectivity &amp; Firewall Considerations",id:"network-connectivity--firewall-considerations",level:3},{value:"TL;DR Quick Single Command Install",id:"tldr-quick-single-command-install",level:2},{value:"Recommended Install Sequence",id:"install-sequence",level:2}],p={toc:d};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gyeeta-install-planning-and-options"},"Gyeeta Install Planning and Options"),(0,r.kt)("p",null,"Readers are advised to read the ",(0,r.kt)("a",{parentName:"p",href:"../architecture"},"Gyeeta Architecture")," page before reading this section."),(0,r.kt)("h2",{id:"install-options"},"Install Options for Gyeeta components"),(0,r.kt)("p",null,"Gyeeta components can be installed using any of the following methods :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bash Script based Installation and Configuration (Easiest install option)"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes Helm Chart"),(0,r.kt)("li",{parentName:"ul"},"Docker Containers"),(0,r.kt)("li",{parentName:"ul"},"rpm / deb based native packages for dnf/yum, apt-get or zypper"),(0,r.kt)("li",{parentName:"ul"},"Manual Tar Package download and configure")),(0,r.kt)("p",null,"Installing using either the Bash Script or Kubernetes Helm Charts are the easiest ways to deploy the various Gyeeta\ncomponents."),(0,r.kt)("h2",{id:"host-requirements"},"Host Requirements"),(0,r.kt)("h3",{id:"cpu-architectures-supported"},"CPU Architectures Supported"),(0,r.kt)("p",null,"Gyeeta currently supports only ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64")," processors. Also, only Intel/AMD processors released after 2012 are supported as Gyeeta is\ncompiled with ",(0,r.kt)("inlineCode",{parentName:"p"},"avx")," instruction support."),(0,r.kt)("h3",{id:"serverless-monitoring-not-supported"},"Serverless monitoring not supported"),(0,r.kt)("p",null,"Currently Gyeeta does not support monitoring of Serverless environments such as AWS Lambda and Fargate."),(0,r.kt)("h3",{id:"gke-support"},"GKE Support"),(0,r.kt)("p",null,"Gyeeta supports Google Kubernetes Engine (GKE) - Standard mode only. GKE Autopilot is not supported."),(0,r.kt)("h3",{id:"minimum-linux-kernel-versions"},"Minimum Linux Kernel Versions"),(0,r.kt)("p",null,"Gyeeta components support only hosts with Linux Kernel 4.4 or higher (Linux 4.4 was released in 2016)."),(0,r.kt)("h3",{id:"supported-linux-distributions"},"Supported Linux Distributions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"OS Distribution"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Supported Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16 & higher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Debian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"9 & higher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"RHEL, CentOS, Rocky Linux, Oracle Linux"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8 & higher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Amazon Linux 2023"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All Versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Amazon Linux 1 and 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All Versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Google Container OS (COS)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Linux Kernel 4.14 & Higher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Fedora"),(0,r.kt)("td",{parentName:"tr",align:"center"},"28 & higher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"OpenSUSE, SUSE Linux"),(0,r.kt)("td",{parentName:"tr",align:"center"},"15 & higher")))),(0,r.kt)("p",null,"Other Linux distributions based on Debian/Ubuntu or RHEL are supported as long as the base Linux Kernel is 4.4+"),(0,r.kt)("p",null,"Container Platforms such as Kubernetes or Docker Swarm are also supported using Helm Charts or Docker containers."),(0,r.kt)("h2",{id:"planning-the-gyeeta-deployment"},"Planning the Gyeeta Deployment"),(0,r.kt)("p",null,"To setup Gyeeta, users need to install the following minimal components :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"One or more instances of PostgresDB Servers for both Shyama and Madhava servers"),(0,r.kt)("li",{parentName:"ol"},"One instance of Shyama Central Server "),(0,r.kt)("li",{parentName:"ol"},"One or more instances of Madhava Intermediate Servers"),(0,r.kt)("li",{parentName:"ol"},"On each host to be monitored, a Partha Host Monitor Agent to be installed"),(0,r.kt)("li",{parentName:"ol"},"One instance of Node Webserver"),(0,r.kt)("li",{parentName:"ol"},"One instance of Alert Action Agent responsible for executing Alert Actions (Notifications)")),(0,r.kt)("p",null,"The image below shows the high level overview of how the different components interact with each other :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gyeeta Architecture",src:n(9639).Z,width:"960",height:"720"})),(0,r.kt)("h3",{id:"num-madhava"},"Number of Madhava Servers needed"),(0,r.kt)("p",null,"The number of Madhava Intermediate servers that are needed depends on the max number of monitored hosts and Network Locality of\nthe monitored hosts with the Madhava servers."),(0,r.kt)("p",null,"The maximum number of monitored hosts a single Madhava server instance can handle depends on the Madhava host CPU and RAM specs and\ncan range from ",(0,r.kt)("em",{parentName:"p"},"50 monitored hosts")," for a small Madhava host with 2 CPU cores and 4 GB RAM to ",(0,r.kt)("em",{parentName:"p"},"500 monitored hosts")," for a server with 16 cores\nand 64 GB RAM."),(0,r.kt)("p",null,"Also, it is recommended that the monitored hosts and the Madhava server reside in the same Network Zone for better performance\nand to reduce Network egress costs."),(0,r.kt)("p",null,"The Shyama server will assign each monitored host a Madhava server depending on Network Locality and Madhava server\navailability."),(0,r.kt)("p",null,"A maximum of 3 Madhava servers can share a single Postgres DB instance. This implies that as the number of Madhava servers\nincreases, the number of Postgres DB instances will also increase."),(0,r.kt)("h3",{id:"network-connectivity--firewall-considerations"},"Network Connectivity & Firewall Considerations"),(0,r.kt)("p",null,"The Partha Monitor Agent does not open any TCP port. No incoming connections will be made to any Partha agent. The Partha agent will\nneed to connect externally to the Shyama server and Shyama assigned Madhava servers though."),(0,r.kt)("p",null,"The Shyama server, the Madhava Intermediate servers and the Node Webserver are all connected to each other in a mesh style\nnetwork. So in case of multi-region/multi-zone deployments, the Shyama server, the Madhava servers and Node Webserver need to be able\nto connect to each other."),(0,r.kt)("p",null,"The Shyama Server needs to be accessable to all the Monitored Hosts as well as to other Gyeeta components (Postgres DB, Madhava,\nWebserver, Alert Agent)."),(0,r.kt)("p",null,"The Madhava Server needs to be accessable to a subset of the Monitored Hosts (same Network Zone/Region), to the Shyama server,\nother Madhava server instances, the Postgres DB and Webserver. "),(0,r.kt)("p",null,"The Webserver needs to connect to the Shyama server and all Madhava instances. The Webserver will not connect to any Monitored\nHosts."),(0,r.kt)("p",null,"The Alert Agent needs to connect to the Shyama Server only. If external Alert Actions (Notifications) are setup such as a Slack or\nPagerduty Notification, the Alert Agent will need to access the Internet in such cases."),(0,r.kt)("h2",{id:"tldr-quick-single-command-install"},"TL;DR Quick Single Command Install"),(0,r.kt)("p",null,"In case you need to quickly install and try out Gyeeta in your environment, please refer to\n",(0,r.kt)("a",{parentName:"p",href:"./tldr_quick_install"},"TLDR Quick Server Install")," link."),(0,r.kt)("p",null,"This will install all Server components (One Postgres DB, One Shyama, one Madhava, Node Webserver) and Alert Agent on a single host\nusing a single command. Users will then need to install additional Partha Agents on all hosts which need to be monitored."),(0,r.kt)("p",null,"If using the TLDR Quick Install, users can skip all subsequent sections pertaining to Installation of Gyeeta Server components and\nAlert Agent."),(0,r.kt)("h2",{id:"install-sequence"},"Recommended Install Sequence"),(0,r.kt)("p",null,"The recommended sequence for installing various components include :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and configure one or more Postgres DB server(s)."),(0,r.kt)("li",{parentName:"ol"},"Install the Shyama server."),(0,r.kt)("li",{parentName:"ol"},"Install one or more Madhava servers depending on the number of hosts to be monitored."),(0,r.kt)("li",{parentName:"ol"},"Install the Partha Host Agents on each host that needs to be monitored."),(0,r.kt)("li",{parentName:"ol"},"Install the Node Webserver."),(0,r.kt)("li",{parentName:"ol"},"Install the Alert Action Agent.")),(0,r.kt)("p",null,"For information on Kubernetes Helm chart deployment, please refer to ",(0,r.kt)("a",{parentName:"p",href:"./k8s_helm"},"Kubernetes Helm Charts")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing the Shyama Postgres DB "))),(0,r.kt)("p",null,"The first component that should be installed is the Shyama server's Postgres DB server. The Postgres DB must be installed\nin the same Network Zone as the Shyama server. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step can be ignored for Kubernetes Helm chart installs as the Helm chart deploys a Postgres DB\ncontainer automatically.")),(0,r.kt)("p",null,"More info about the Install Steps, Disk space needed and CPU, Memory requirements can be found at\n",(0,r.kt)("a",{parentName:"p",href:"./postgresdb_install"},"Postgres DB Install")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing the Shyama Central Server "))),(0,r.kt)("p",null,"The Shyama Server is the component to which all other Gyeeta components and all monitored hosts will connect to. This implies that the\nShyama Central Server needs to be accessible from other components and if other components or monitored hosts are located in\ndifferent Network Regions/Zones, connectivity to Shyama server is needed (for example, using VPC Network Peering)."),(0,r.kt)("p",null,"More info about the Shyama Central Server Install Steps can be found at ",(0,r.kt)("a",{parentName:"p",href:"./shyama_install"},"Shyama Install")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing one or more Madhava Postgres DBs "))),(0,r.kt)("p",null,"The Madhava Postgres DB must be installed in the same Network Zone as the Madhava servers. In case the Madhava server is located\nin the same Network Zone as the Shyama server, the Shyama Postgres DB can also be used by upto 3 Madhava servers."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step can be ignored for Kubernetes Helm chart installs as the Helm chart deploys a Postgres DB\ncontainer automatically.")),(0,r.kt)("p",null,"More info about the Install Steps, Disk space needed and CPU, Memory requirements can be found at\n",(0,r.kt)("a",{parentName:"p",href:"./postgresdb_install"},"Postgres DB Install")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing one or more Madhava Intermediate Servers "))),(0,r.kt)("p",null,"The number of the Madhava servers should be decided and accordingly installed."),(0,r.kt)("p",null,"The Madhava servers need to be able to connect to the Shyama Central Server and other Madhava server instances.\nEach Partha Host Agent will connect to its Shyama assigned Madhava Server and so monitored hosts need to be\nable to connect to the Madhava servers."),(0,r.kt)("p",null,"Also, the Webserver will connect to each Madhava server instance for Query resultsets."),(0,r.kt)("p",null,"More info about the Madhava Server Install Steps can be found at ",(0,r.kt)("a",{parentName:"p",href:"./madhava_install"},"Madhava Install")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing Partha Host Monitor Agent on all hosts to be monitored "))),(0,r.kt)("p",null,"The Partha Host Agent needs to be installed on each of the monitored hosts. The Partha Agent needs to be able\nto connect to the Shyama Central Server who will then assign the nearest Madhava Intermediate server and then all further\ncommunication of the Partha agent will be with the Madhava server."),(0,r.kt)("p",null,"No incoming connections will be made to any Partha agent."),(0,r.kt)("p",null,"More info about the Partha Host Agent Install Steps can be found at ",(0,r.kt)("a",{parentName:"p",href:"./partha_install"},"Partha Install")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing Node Webserver "))),(0,r.kt)("p",null,"The Nodejs Webserver needs to be installed on a host which can connect to the Shyama Central Server and all Madhava\nIntermediate servers."),(0,r.kt)("p",null,"Users will connect to the Node Webserver for the Web UI and REST API querying."),(0,r.kt)("p",null,"More info about the Node Webserver Install Steps can be found at ",(0,r.kt)("a",{parentName:"p",href:"./nodewebserver_install"},"Node Webserver Install")," link."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Installing Alert Action Agent "))),(0,r.kt)("p",null,"The Alert Action Agent is responsible for executing the Alert Notifications or Actions and communicates with\nthe Shyama instance as Shyama server also acts as the Alert Managet."),(0,r.kt)("p",null,"The Alert Action Agent needs to be installed on a host which can connect to the Shyama Central Server. If external\nAlert Notifications are to be executed (for example, email action, PagerDuty), the Alert Action Agent will need to\ncommunicate with those external servers as well."),(0,r.kt)("p",null,"More info about the Alert Action Agent Install Steps can be found at ",(0,r.kt)("a",{parentName:"p",href:"./alertaction_install"},"Alert Action Agent Install")," link."))}h.isMDXComponent=!0},9639:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gyeeta_arch2-27a48be4081be5d014e7026e9109e967.png"}}]);