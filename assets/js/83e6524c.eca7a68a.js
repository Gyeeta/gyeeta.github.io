"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4106],{3855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>T,frontMatter:()=>v,metadata:()=>y,toc:()=>C});var n=a(7462),r=a(7294),l=a(3905),i=a(6010),o=a(2389),s=a(7392),p=a(7094),u=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:o,values:c,groupId:h,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===o?o:o??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:f}=(0,p.U)(),[C,w]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&b.some((t=>t.value===e))&&w(e)}const q=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==C&&(x(t),w(n),null!=h&&f(h,String(n)))},H=e=>{var t;let a=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},k)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:H,onClick:q},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}const k="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(k,n),hidden:a},t)}var b=a(814);const v={id:"partha_req",title:"partha Host Requirements",description:"Host Requirements to install partha Agent"},N="Host Requirements to install partha",y={unversionedId:"installation/partha_req",id:"installation/partha_req",title:"partha Host Requirements",description:"Host Requirements to install partha Agent",source:"@site/docs/installation/partha_req.md",sourceDirName:"installation",slug:"/installation/partha_req",permalink:"/docs/installation/partha_req",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/partha_req.md",tags:[],version:"current",lastUpdatedAt:1666115731,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"partha_req",title:"partha Host Requirements",description:"Host Requirements to install partha Agent"},sidebar:"docs",previous:{title:"Host Agent Installation",permalink:"/docs/installation/partha_install"},next:{title:"Host Agent Configuration",permalink:"/docs/installation/partha_config"}},f={},C=[{value:"CPU Architectures Supported",id:"cpu-architectures-supported",level:2},{value:"Requirement of Kernel Headers",id:"requirement-of-kernel-headers",level:2},{value:"Host Agent priviliged usage",id:"host-agent-priviliged-usage",level:2},{value:"Serverless monitoring not supported",id:"serverless-monitoring-not-supported",level:2},{value:"GKE Support",id:"gke-support",level:2},{value:"Network Connectivity Requirements",id:"network-connectivity-requirements",level:2}],w={toc:C};function T(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"host-requirements-to-install-partha"},"Host Requirements to install partha"),(0,l.kt)("p",null,"The agent ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," can be installed on Linux hosts with minimum kernel version 4.4 as it uses eBPF to monitor the host. "),(0,l.kt)("p",null,"The Linux distributions which are supported include :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"OS Distribution"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Minimum version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Ubuntu"),(0,l.kt)("td",{parentName:"tr",align:"center"},"16.04+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Debian"),(0,l.kt)("td",{parentName:"tr",align:"center"},"9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RHEL, CentOS, Rocky Linux"),(0,l.kt)("td",{parentName:"tr",align:"center"},"8+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Amazon Linux 2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"All Versions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Amazon Linux"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Year 2017+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Google Container OS (COS)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Linux Kernel 4.14+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Fedora"),(0,l.kt)("td",{parentName:"tr",align:"center"},"28+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SuSE Linux"),(0,l.kt)("td",{parentName:"tr",align:"center"},"12.5+")))),(0,l.kt)("p",null,"Other Linux distributions based on RHEL or Debian/Ubuntu are supported as long as the base Linux Kernel is 4.4+"),(0,l.kt)("h2",{id:"cpu-architectures-supported"},"CPU Architectures Supported"),(0,l.kt)("p",null,"Gyeeta currently supports only ",(0,l.kt)("em",{parentName:"p"},"x86_64")," processors. Also, only ",(0,l.kt)("em",{parentName:"p"},"Intel/AMD")," processors released after 2012 are supported as\nGyeeta is compiled with avx instruction support."),(0,l.kt)("h2",{id:"requirement-of-kernel-headers"},"Requirement of Kernel Headers"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," agent needs Kernel Headers package to be installed for eBPF support. Users need to ensure that the Kernel Headers\npackage is installed on the hosts to be monitored as otherwise ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," will not run. "),(0,l.kt)("p",null,"On Google Container Optimized OS (COS), the ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," container will itself download the currently running Kernel's Headers and so,\nthe Kernel Package is not needed."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," is run as a container, a configurable option is provided whereby the ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," container itself will install the relevant Kernel Headers\npackage to the base host if enabled, but this option is currently beta."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Command to install Kernel Headers :")),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(g,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,l.kt)(b.Z,{language:"sh",mdxType:"CodeBlock"},"sudo apt update && sudo apt-get -y install linux-headers-$(uname -r)")),(0,l.kt)(g,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,l.kt)(b.Z,{language:"sh",mdxType:"CodeBlock"},"sudo yum -y install kernel-devel-$(uname -r)")),(0,l.kt)(g,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,l.kt)(b.Z,{language:"sh",mdxType:"CodeBlock"},"sudo zypper -n dist-upgrade && sudo zypper -n install kernel-default-devel-$(uname -r | awk -F- '{print $1}')")),(0,l.kt)(g,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,l.kt)(b.Z,{language:"sh",mdxType:"CodeBlock"},"sudo dnf install -y kernel-devel-$(uname -r)"))),(0,l.kt)("h2",{id:"host-agent-priviliged-usage"},"Host Agent priviliged usage"),(0,l.kt)("p",null,"The Host Agent ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," needs to be run as a priviliged process with sys_admin, net_admin and other Linux capabilities as it utilizes\neBPF and other monitoring methods. "),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," is run as a container, ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," needs to be a priviliged container. Also ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," needs to run in the Host Network Namespace\nand Host PID Namespace."),(0,l.kt)("h2",{id:"serverless-monitoring-not-supported"},"Serverless monitoring not supported"),(0,l.kt)("p",null,"Currently Gyeeta does not support monitoring of Serverless environments such as AWS Lambda and Fargate."),(0,l.kt)("h2",{id:"gke-support"},"GKE Support"),(0,l.kt)("p",null,"Gyeeta supports Google Kubernetes Engine (Standard) mode only. GKE Autopilot is not supported."),(0,l.kt)("h2",{id:"network-connectivity-requirements"},"Network Connectivity Requirements"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"partha")," Host Agent needs to connect to Central ",(0,l.kt)("inlineCode",{parentName:"p"},"shyama")," server and a ",(0,l.kt)("inlineCode",{parentName:"p"},"shyama")," assigned Intermediate ",(0,l.kt)("inlineCode",{parentName:"p"},"madhava")," server. The Host Agent will\nnot listen on any external port and no extra incoming connection firewall rules need to be set. It will just act as a TCP client and connect\nto remote ",(0,l.kt)("inlineCode",{parentName:"p"},"shyama")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"madhava")," servers."))}T.isMDXComponent=!0}}]);