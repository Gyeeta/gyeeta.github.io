"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5312],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,d=c["".concat(o,".").concat(u)]||c[u]||h[u]||l;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<l;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={title:"Kubernetes Helm Charts",description:"Gyeeta Kubernetes Helm Charts",keywords:["kubernetes","helm","installation"]},s="Gyeeta Kubernetes Helm Charts",i={unversionedId:"installation/k8s_helm/k8s_helm",id:"installation/k8s_helm/k8s_helm",title:"Kubernetes Helm Charts",description:"Gyeeta Kubernetes Helm Charts",source:"@site/docs/installation/k8s_helm/k8s_helm.md",sourceDirName:"installation/k8s_helm",slug:"/installation/k8s_helm/",permalink:"/docs/installation/k8s_helm/",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/k8s_helm/k8s_helm.md",tags:[],version:"current",lastUpdatedAt:1668972740,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{title:"Kubernetes Helm Charts",description:"Gyeeta Kubernetes Helm Charts",keywords:["kubernetes","helm","installation"]},sidebar:"docs",previous:{title:"Gyeeta Failover Handling",permalink:"/docs/installation/failover"},next:{title:"Shyama Helm Chart",permalink:"/docs/installation/k8s_helm/shyama_helm"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Gyeeta Components Helm Charts",id:"gyeeta-components-helm-charts",level:2}],p={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gyeeta-kubernetes-helm-charts"},"Gyeeta Kubernetes Helm Charts"),(0,n.kt)("p",null,"Gyeeta components can be installed in ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," Cluster environments using ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm Charts"),"."),(0,n.kt)("p",null,"Gyeeta Helm Charts install the various components in the following way :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../architecture#central-server-shyama"},"Shyama Central Server")," is installed as a Statefulset along with its corresponding Postgres DB as a side container"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../architecture#intermediate-server-madhava"},"Madhava Intermediate Server")," is installed as a Statefulset along with its corresponding Postgres DB as a side container"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../architecture#host-monitor-agent-partha"},"Partha Host Agents")," are installed as a Daemonset as Partha needs to be installed on each host"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../architecture#node-webserver"},"Node Webserver")," is installed as a Deployment"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../architecture#alert-action-agent"},"Alert Action Agent")," is installed as a Deployment")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes 1.19+"),(0,n.kt)("li",{parentName:"ul"},"Helm 3.2.0+"),(0,n.kt)("li",{parentName:"ul"},"PV provisioner support in the underlying infrastructure")),(0,n.kt)("h2",{id:"gyeeta-components-helm-charts"},"Gyeeta Components Helm Charts"),(0,n.kt)("p",null,"Gyeeta components Helm Chart Description lnks are given below. Readers are advised to install the Helm Charts in the\nsequence as shown below :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./k8s_helm/shyama_helm"},"Shyama Central Server")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./k8s_helm/madhava_helm"},"Madhava Intermediate Server")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./k8s_helm/partha_helm"},"Partha Host Agents")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./k8s_helm/nodewebserver_helm"},"Node Webserver")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"./k8s_helm/alertaction_helm"},"Alert Action Agent"))),(0,n.kt)("p",null,"Gyeeta also provides a separate Helm Chart for Postgres DB component though it is recommended not to install a separate Postgres DB.\nInstead the Shyama server and Madhava Servers will automatically install a PostgresDB container alongside the server container."))}h.isMDXComponent=!0}}]);