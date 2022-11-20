"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4217],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,u=k["".concat(m,".").concat(N)]||k[N]||s[N]||l;return a?n.createElement(u,i(i({ref:e},p),{},{components:a})):n.createElement(u,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4212:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"Shyama Helm Chart",description:"Shyama Kubernetes Helm Chart",keywords:["kubernetes","helm","installation"]},i="Shyama Kubernetes Helm Chart",d={unversionedId:"installation/k8s_helm/shyama_helm",id:"installation/k8s_helm/shyama_helm",title:"Shyama Helm Chart",description:"Shyama Kubernetes Helm Chart",source:"@site/docs/installation/k8s_helm/shyama_helm.md",sourceDirName:"installation/k8s_helm",slug:"/installation/k8s_helm/shyama_helm",permalink:"/docs/installation/k8s_helm/shyama_helm",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/installation/k8s_helm/shyama_helm.md",tags:[],version:"current",lastUpdatedAt:1668972994,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{title:"Shyama Helm Chart",description:"Shyama Kubernetes Helm Chart",keywords:["kubernetes","helm","installation"]},sidebar:"docs",previous:{title:"Kubernetes Helm Charts",permalink:"/docs/installation/k8s_helm/"},next:{title:"Madhava Helm Chart",permalink:"/docs/installation/k8s_helm/madhava_helm"}},m={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Instructions",id:"install-instructions",level:2},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",level:2},{value:"Shyama Chart Parameters",id:"shyama-parameters",level:2},{value:"Shyama Container Related parameters",id:"shyama-container-related-parameters",level:3},{value:"Postgres Container Related parameters",id:"postgres-container-related-parameters",level:3},{value:"Other parameters",id:"other-parameters",level:3}],p={toc:o};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shyama-kubernetes-helm-chart"},"Shyama Kubernetes Helm Chart"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../architecture#central-server-shyama"},"Shyama Central Server")," can be installed in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," Cluster environments using\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm Charts"),"."),(0,r.kt)("p",null,"The Shyama server is installed as a Statefulset along with an optional Postgres DB as a side container"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes 1.19+"),(0,r.kt)("li",{parentName:"ul"},"Helm 3.2.0+"),(0,r.kt)("li",{parentName:"ul"},"PV provisioner support in the underlying infrastructure")),(0,r.kt)("h2",{id:"install-instructions"},"Install Instructions"),(0,r.kt)("p",null,"The steps to install the Shyama Helm chart are :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Gyeeta Repo to Helm"),(0,r.kt)("li",{parentName:"ul"},"Fetch and edit the values.yaml for the Shyama chart"),(0,r.kt)("li",{parentName:"ul"},"Install the Shyama chart with the edited values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add gyeeta https://gyeeta.io/helmcharts\nhelm repo update\nhelm show values gyeeta/shyama > /tmp/shyama.yaml\n\n# Thereafter you can edit the /tmp/shyama.yaml file if you need to change any option. \n# After editing the /tmp/shyama.yaml, install the Shyama Helm chart using :\n\nhelm install --namespace gyeeta --create-namespace shyama1  gyeeta/shyama -f /tmp/shyama.yaml\n\n")),(0,r.kt)("h2",{id:"uninstalling-the-chart"},"Uninstalling the Chart"),(0,r.kt)("p",null,"To uninstall the Shyama deployment say ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama1")," as per command above :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall shyama1\n")),(0,r.kt)("h2",{id:"shyama-parameters"},"Shyama Chart Parameters"),(0,r.kt)("p",null,"The default Parameter config can be obtained using the command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values gyeeta/shyama > /tmp/shyama.yaml\n")),(0,r.kt)("p",null,"Then users can edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/shyama.yaml")," file, if needed."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"No parameter is mandatory and users can skip setting any values (use the default values) while installing the Shyama chart.")),(0,r.kt)("h3",{id:"shyama-container-related-parameters"},"Shyama Container Related parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.shyama_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of shyama instance : Name must start with keyword ",(0,r.kt)("inlineCode",{parentName:"td"},"shyama")," : If not specified, auto-generated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.shyama_secret")),(0,r.kt)("td",{parentName:"tr",align:null},"Password string to be used by remote Madhava servers to authenticate. If not specified, auto-generated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.cloud_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud Operator : Specify as either of ",(0,r.kt)("inlineCode",{parentName:"td"},"aws"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gcp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"azure"),". For other clouds or on-prem, leave blank"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.region_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Region Name : Ignore if ",(0,r.kt)("inlineCode",{parentName:"td"},"cloud_type")," is set. For on-prem or other clouds, specify as the Network region name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.zone_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Zone Name : Ignore if ",(0,r.kt)("inlineCode",{parentName:"td"},"cloud_type")," is set. For on-prem or other clouds, specify as the Network Zone name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.min_madhava")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum number of Madhava servers that should register with Shyama before Shyama accepts any Host Agent partha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.webserver_url")),(0,r.kt)("td",{parentName:"tr",align:null},"Webserver URL for use in alert payloads. If not specified, auto-generated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.logtofile")),(0,r.kt)("td",{parentName:"tr",align:null},"Process Log sent to file instead of stdout/stderr. If true will use the ",(0,r.kt)("inlineCode",{parentName:"td"},"emptyDir")," mount point for logging"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.db")," ",(0,r.kt)("inlineCode",{parentName:"td"},".postgres_hostname")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres DB Host to connect to. If ",(0,r.kt)("inlineCode",{parentName:"td"},"postgres.enabled")," is true, then specify as ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localhost"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.db")," ",(0,r.kt)("inlineCode",{parentName:"td"},".postgres_port")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres DB Port to connect to. If ",(0,r.kt)("inlineCode",{parentName:"td"},"postgres.enabled")," is true, then specify as ",(0,r.kt)("inlineCode",{parentName:"td"},"10040")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10040"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.db")," ",(0,r.kt)("inlineCode",{parentName:"td"},".external_postgres_user")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Username. Specify only if external postgres DB to be used (",(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.enabled")," is false)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.db")," ",(0,r.kt)("inlineCode",{parentName:"td"},".external_postgres_password")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres User Password. Specify only if external postgres DB to be used (",(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.enabled")," is false)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Shyama Kubernetes Service type (Specify either ClusterIP or NodePort)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ClusterIP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Shyama Kubernetes Service port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10037"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service")," ",(0,r.kt)("inlineCode",{parentName:"td"},".nodePort")),(0,r.kt)("td",{parentName:"tr",align:null},"Shyama Kubernetes Node port. Specify if ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," set to ",(0,r.kt)("inlineCode",{parentName:"td"},"NodePort"),". Choose port between 30000-32767"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service")," ",(0,r.kt)("inlineCode",{parentName:"td"},".clusterIP")),(0,r.kt)("td",{parentName:"tr",align:null},"Static ClusterIP or None for headless services"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service")," ",(0,r.kt)("inlineCode",{parentName:"td"},".annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"Service Annotations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service")," ",(0,r.kt)("inlineCode",{parentName:"td"},".loadBalancerIP")),(0,r.kt)("td",{parentName:"tr",align:null},"Load balancer IP if service ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"LoadBalancer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service")," ",(0,r.kt)("inlineCode",{parentName:"td"},".externalTrafficPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster External Traffic Policy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Cluster"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.service")," ",(0,r.kt)("inlineCode",{parentName:"td"},".loadBalancerSourceRanges")),(0,r.kt)("td",{parentName:"tr",align:null},"Addresses that are allowed when service is LoadBalancer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.alertactions")),(0,r.kt)("td",{parentName:"tr",align:null},"Alert Actions configuration (in JSON format)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.alertdefs")),(0,r.kt)("td",{parentName:"tr",align:null},"Alert Definitions configuration (in JSON format)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.alertsilences")),(0,r.kt)("td",{parentName:"tr",align:null},"Alert Silences configuration (in JSON format)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shyama_config.alertinhibits")),(0,r.kt)("td",{parentName:"tr",align:null},"Alert Inhibits configuration (in JSON format)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))))),(0,r.kt)("h3",{id:"postgres-container-related-parameters"},"Postgres Container Related parameters"),(0,r.kt)("p",null,"The main Postgres Container parameters are mentioned below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or Disable Shyama specific DB container. If false, an external Postgres must be specified in the shyama config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.resources")," ",(0,r.kt)("inlineCode",{parentName:"td"},".requests")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Container Resource Requests"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.resources")," ",(0,r.kt)("inlineCode",{parentName:"td"},".limits")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres Container Resource Limits"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.mounts")," ",(0,r.kt)("inlineCode",{parentName:"td"},".volumes")),(0,r.kt)("td",{parentName:"tr",align:null},"List of extra volumes to add to the Postgres container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.mounts")," ",(0,r.kt)("inlineCode",{parentName:"td"},".volumeMounts")),(0,r.kt)("td",{parentName:"tr",align:null},"List of extra volume mounts to add to the Postgres container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.extra.env")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra environment variables to pass onto Postgres container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.extra.args")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra Command Line Arguments (CLI) to pass onto Postgres container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.extra.envinit")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra environment variables to pass onto Postgres Init db container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.extra.argsinit")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra Command Line Arguments (CLI) to pass onto Postgres Init db container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.postgresdb_config")," ",(0,r.kt)("inlineCode",{parentName:"td"},".password")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgres")," user password. If empty, will be auto-generated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.postgresdb_config")," ",(0,r.kt)("inlineCode",{parentName:"td"},".service.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Port on which the Postgres process will listen on"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10040"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Postgres data persistence using PVC. If false, will use emptyDir (data delete on pod termination)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".existingClaim")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of an existing PVC to use"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".storageClass")),(0,r.kt)("td",{parentName:"tr",align:null},"PVC Storage Class for Postgres data volume. If empty, the default provisioner is used."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".accessModes")),(0,r.kt)("td",{parentName:"tr",align:null},"PVC Access Mode for Postgres volume"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReadWriteOnce"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence.size")),(0,r.kt)("td",{parentName:"tr",align:null},"PVC Storage Size for Postgres volume"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10Gi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"Annotations for the PVC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".selector")),(0,r.kt)("td",{parentName:"tr",align:null},"Selector to match an existing Persistent Volume"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".dataSource")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom PVC dataSource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.persistence")," ",(0,r.kt)("inlineCode",{parentName:"td"},".dataSourceRef")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom PVC dataSourceRef. If specified ",(0,r.kt)("inlineCode",{parentName:"td"},"dataSource")," will be ignored"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postgresdb.initChownData")," ",(0,r.kt)("inlineCode",{parentName:"td"},".enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"If false, data ownership will not be reset at startup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Once this chart is deployed, it is not possible to change the Postgres DB access credentials, such as usernames or passwords, using Helm.\nTo change these after deployment, delete any persistent volumes (PVs) used by the chart and re-deploy it, or connect to DB externally and manually set the params.")),(0,r.kt)("h3",{id:"other-parameters"},"Other parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nameOverride")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a new name if you want to override the release name used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fullnameOverride")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a new name if you want to override the fullname used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clusterDomain")),(0,r.kt)("td",{parentName:"tr",align:null},"Default Kubernetes cluster domain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cluster.local"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hostAliases")),(0,r.kt)("td",{parentName:"tr",align:null},"Shyama pod host aliases for ",(0,r.kt)("inlineCode",{parentName:"td"},"/etc/hosts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readinessEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable Readiness Probe"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podSecurityPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable PodSecurityPolicy (only for K8s versions < 1.25)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mounts.volumes")),(0,r.kt)("td",{parentName:"tr",align:null},"List of extra volumes to add to the Shyama container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mounts.volumeMounts")),(0,r.kt)("td",{parentName:"tr",align:null},"List of extra volume mounts to add to the Shyama container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra.env")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra environment variables to pass onto Shyama container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra.args")),(0,r.kt)("td",{parentName:"tr",align:null},"Extra Command Line Arguments (CLI) to pass onto Shyama container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"networkPolicy.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled is true, all egress is allowed and ingress is limited to Shyama ports with optional namespaceSelector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"networkPolicy.namespaceSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes LabelSelector to explicitly select namespaces from which traffic could be allowed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"networkPolicy.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled is true, all egress is allowed and ingress is limited to Shyama ports with optional namespaceSelector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serviceAccount.create")),(0,r.kt)("td",{parentName:"tr",align:null},"Create ServiceAccount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}s.isMDXComponent=!0}}]);