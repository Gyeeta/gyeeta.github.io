"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:t},p),{},{components:a})):n.createElement(N,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"Alert Agent Helm Chart",description:"Alert Agent Kubernetes Helm Chart",keywords:["kubernetes","helm","installation"]},i="Alert Action Agent Helm Chart",o={unversionedId:"installation/k8s_helm/alertaction_helm",id:"installation/k8s_helm/alertaction_helm",title:"Alert Agent Helm Chart",description:"Alert Agent Kubernetes Helm Chart",source:"@site/docs/installation/k8s_helm/alertaction_helm.md",sourceDirName:"installation/k8s_helm",slug:"/installation/k8s_helm/alertaction_helm",permalink:"/docs/installation/k8s_helm/alertaction_helm",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/k8s_helm/alertaction_helm.md",tags:[],version:"current",lastUpdatedAt:1669053801,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"Alert Agent Helm Chart",description:"Alert Agent Kubernetes Helm Chart",keywords:["kubernetes","helm","installation"]},sidebar:"docs",previous:{title:"Node Webserver Helm Chart",permalink:"/docs/installation/k8s_helm/nodewebserver_helm"},next:{title:"Observability Features & Limitations",permalink:"/docs/monitor/overview"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Instructions",id:"install-instructions",level:2},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",level:2},{value:"Alert Agent Chart Parameters",id:"alertaction-parameters",level:2},{value:"Mandatory parameters to provide",id:"mandatory-parameters-to-provide",level:3},{value:"Alert Action Agent Config parameters",id:"alert-action-agent-config-parameters",level:3},{value:"Other parameters",id:"other-parameters",level:3}],p={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alert-action-agent-helm-chart"},"Alert Action Agent Helm Chart"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../architecture#alert-action-agent"},"Alert Agent")," can be installed in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," Cluster environments using\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm Charts"),"."),(0,r.kt)("p",null,"The Alert Agent is installed as a Deployment with a default Replica Count as 1. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes 1.19+"),(0,r.kt)("li",{parentName:"ul"},"Helm 3.2.0+")),(0,r.kt)("h2",{id:"install-instructions"},"Install Instructions"),(0,r.kt)("p",null,"The steps to install the Alert Agent Helm chart are :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Gyeeta Repo to Helm"),(0,r.kt)("li",{parentName:"ul"},"Fetch and edit the values.yaml for the Alert Agent chart"),(0,r.kt)("li",{parentName:"ul"},"Install the Alert Agent chart with the edited values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add gyeeta https://gyeeta.io/helmcharts\nhelm repo update\nhelm show values gyeeta/alertaction > /tmp/alertaction.yaml\n\n# Thereafter you can edit the /tmp/alertaction.yaml file if you need to change any option. \n# After editing the /tmp/alertaction.yaml, install the Alert Agent Helm chart using :\n\nhelm install --namespace gyeeta --create-namespace alertaction1  gyeeta/alertaction -f /tmp/alertaction.yaml\n\n")),(0,r.kt)("h2",{id:"uninstalling-the-chart"},"Uninstalling the Chart"),(0,r.kt)("p",null,"To uninstall the Alert Agent deployment say ",(0,r.kt)("inlineCode",{parentName:"p"},"alertaction1")," as per command above :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall alertaction1\n")),(0,r.kt)("h2",{id:"alertaction-parameters"},"Alert Agent Chart Parameters"),(0,r.kt)("p",null,"The default Chart config can be obtained using the command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values gyeeta/alertaction > /tmp/alertaction.yaml\n")),(0,r.kt)("p",null,"Then users can edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/alertaction.yaml")," file. "),(0,r.kt)("h3",{id:"mandatory-parameters-to-provide"},"Mandatory parameters to provide"),(0,r.kt)("p",null,"The following are the mandatory parameters which users need to provide while installing the chart either using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," CLI\noption or by editing the yaml values in the file saved (for example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/alertaction.yaml")," file in the command above) :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alertaction_config.shyama_hosts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alertaction_config.shyama_ports"))),(0,r.kt)("p",null,"The Helm chart install will fail if these parameters are not provided. Explanation about these parameters are given below."),(0,r.kt)("h3",{id:"alert-action-agent-config-parameters"},"Alert Action Agent Config parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertaction_config")," ",(0,r.kt)("inlineCode",{parentName:"td"},".shyama_hosts")),(0,r.kt)("td",{parentName:"tr",align:null},"Shyama Service Domains : Specify one or more Shyama Service Names (e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},'[ "shyama1-headless" ]'),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertaction_config")," ",(0,r.kt)("inlineCode",{parentName:"td"},".shyama_ports")),(0,r.kt)("td",{parentName:"tr",align:null},"Shyama Service Ports : Specify one or more Shyama Service Ports (e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"[ 10037 ]"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("h3",{id:"other-parameters"},"Other parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nameOverride")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a new name if you want to override the release name used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fullnameOverride")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a new name if you want to override the fullname used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clusterDomain")),(0,r.kt)("td",{parentName:"tr",align:null},"Default Kubernetes cluster domain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cluster.local"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource Requests"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.limits")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource Limits"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hostAliases")),(0,r.kt)("td",{parentName:"tr",align:null},"pod host aliases for ",(0,r.kt)("inlineCode",{parentName:"td"},"/etc/hosts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"affinity")),(0,r.kt)("td",{parentName:"tr",align:null},"Affinity constraint for pod scheduling"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podAffinityPreset")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod affinity preset. Ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"affinity")," is set. Allowed values: ",(0,r.kt)("inlineCode",{parentName:"td"},"soft")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"hard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podAntiAffinityPreset")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod anti-affinity preset. Ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"affinity")," is set. Allowed values: ",(0,r.kt)("inlineCode",{parentName:"td"},"soft")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"hard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"soft"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeAffinityPreset.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Node affinity preset. Ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"affinity")," is set. Allowed values: ",(0,r.kt)("inlineCode",{parentName:"td"},"soft")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"hard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeAffinityPreset.key")),(0,r.kt)("td",{parentName:"tr",align:null},"Node label key to match. Ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"affinity")," is set."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeAffinityPreset.values")),(0,r.kt)("td",{parentName:"tr",align:null},"Node label values to match. Ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"affinity")," is set."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of replicas"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serviceAccount.create")),(0,r.kt)("td",{parentName:"tr",align:null},"Create ServiceAccount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}s.isMDXComponent=!0}}]);