"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7567],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),i=a(7392),o=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function h(e){var t;const{lazy:a,block:s,defaultValue:h,values:m,groupId:g,className:c}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===h?h:h??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,o.U)(),[T,C]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=g){const e=v[g];null!=e&&e!==T&&y.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=y[a].value;n!==T&&(w(t),C(n),null!=g&&N(g,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},c)},y.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:P,onClick:I},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},6972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),s=a(5162),i=a(6823);const o={title:"Partha Agent Installation",description:"Gyeeta Partha Host Agent Installation",keywords:["partha","agent","installation"]},p="Partha Host Agent Installation",d={unversionedId:"installation/partha_install",id:"installation/partha_install",title:"Partha Agent Installation",description:"Gyeeta Partha Host Agent Installation",source:"@site/docs/installation/partha_install.md",sourceDirName:"installation",slug:"/installation/partha_install",permalink:"/docs/installation/partha_install",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/partha_install.md",tags:[],version:"current",lastUpdatedAt:1674216155,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Partha Agent Installation",description:"Gyeeta Partha Host Agent Installation",keywords:["partha","agent","installation"]},sidebar:"docs",previous:{title:"Partha Agent Configuration",permalink:"/docs/installation/partha_config"},next:{title:"Node Webserver Configuration",permalink:"/docs/installation/nodewebserver_config"}},u={},h=[{value:"Host Requirements to install partha",id:"host-requirements-to-install-partha",level:2},{value:"Minimum Linux Kernel and CPU Requirements",id:"minimum-linux-kernel-and-cpu-requirements",level:3},{value:"Requirement of Kernel Headers for older kernels",id:"kernel-headers",level:3},{value:"Older Distributions where Kernel Headers package required",id:"older-distributions-where-kernel-headers-package-required",level:4},{value:"Partha Host Agent priviliged process",id:"partha-host-agent-priviliged-process",level:3},{value:"Serverless monitoring not supported",id:"serverless-monitoring-not-supported",level:3},{value:"GKE Support",id:"gke-support",level:3},{value:"Network Connectivity Requirements",id:"network-connectivity-requirements",level:3},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"<em>Install using Shell script</em>",id:"shell-script",level:3},{value:"Stopping/Starting/Uninstalling the Partha Agent",id:"stoppingstartinguninstalling-the-partha-agent",level:4},{value:"<em>Install using Kubernetes Helm Chart</em>",id:"helm-chart",level:3},{value:"<em>Running as a Docker container</em>",id:"docker",level:3},{value:"<em>Install using native rpm or deb packages</em>",id:"rpm-deb",level:3},{value:"partha Configuration post Installation",id:"partha-configuration-post-installation",level:4},{value:"Stopping/Starting/Uninstalling the Partha Agent",id:"stoppingstartinguninstalling-the-partha-agent-1",level:4},{value:"<em>Manual Tar Package install</em>",id:"tar-install",level:3}],m={toc:h};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"partha-host-agent-installation"},"Partha Host Agent Installation"),(0,r.kt)("p",null,"The Gyeeta Host Agent (named ",(0,r.kt)("inlineCode",{parentName:"p"},"partha"),") has to be installed on each Linux host that needs to be monitored.\nThe Agent is a lightweight process and uses max 10% of one CPU core and less than 300 MB Memory RSS."),(0,r.kt)("h2",{id:"host-requirements-to-install-partha"},"Host Requirements to install partha"),(0,r.kt)("h3",{id:"minimum-linux-kernel-and-cpu-requirements"},"Minimum Linux Kernel and CPU Requirements"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," Host Agent requires a Linux Kernel with minimum kernel version of 4.4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"partha")," currently supports only ",(0,r.kt)("em",{parentName:"p"},"x86_64")," processors. Also, only ",(0,r.kt)("em",{parentName:"p"},"Intel/AMD")," processors released after 2012 are supported as\n",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," is compiled with avx instruction support."),(0,r.kt)("h3",{id:"kernel-headers"},"Requirement of Kernel Headers for older kernels"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," agent needs Kernel Headers package to be installed on older kernels for eBPF support. Users need to ensure that the Kernel Headers\npackage is installed on the hosts to be monitored as otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," will not run. "),(0,r.kt)("h4",{id:"older-distributions-where-kernel-headers-package-required"},"Older Distributions where Kernel Headers package required"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu 18, 19, 20"),(0,r.kt)("li",{parentName:"ul"},"Debian 10, 11"),(0,r.kt)("li",{parentName:"ul"},"RHEL / CentOS 8.x, Rocky Linux 8.x"),(0,r.kt)("li",{parentName:"ul"},"Amazon Linux 1 and 2"),(0,r.kt)("li",{parentName:"ul"},"Fedora Linux 35 and below")),(0,r.kt)("p",null,"Newer Distributions include eBPF CO-RE BTF (BPF Type Format) Support and do not require ",(0,r.kt)("em",{parentName:"p"},"Kernel Headers")," for eBPF based applications."),(0,r.kt)("p",null,"On Google Container Optimized OS (COS), the ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," container will itself download the currently running Kernel's Headers and so,\nthe Kernel Package is not needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Command to install Kernel Headers (needed for older Distributions only) :")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo apt update && sudo apt-get -y install linux-headers-$(uname -r)")),(0,r.kt)(s.Z,{value:"rhel",label:"RHEL / Rocky Linux / Amazon Linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo yum -y install kernel-devel-$(uname -r)")),(0,r.kt)(s.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo zypper -n dist-upgrade && sudo zypper -n install kernel-default-devel-$(uname -r | awk -F- '{print $1}')")),(0,r.kt)(s.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo dnf install -y kernel-devel-$(uname -r)"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In case the Kernel Headers package is not found using the commands above, please try updating the package list for example using\nsudo apt update / sudo yum distro-sync / sudo dnf distro-sync and retrying the commands."),(0,r.kt)("p",{parentName:"admonition"},"In rare cases, a host reboot may be needed.")),(0,r.kt)("h3",{id:"partha-host-agent-priviliged-process"},"Partha Host Agent priviliged process"),(0,r.kt)("p",null,"The Host Agent ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," needs to be run as a priviliged process with ",(0,r.kt)("inlineCode",{parentName:"p"},"sys_admin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"net_admin")," and other Linux capabilities as it utilizes\neBPF and other monitoring methods. "),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," is run as a container, ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," needs to be a priviliged container. Also ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," needs to run in the Host Network Namespace\nand Host PID Namespace."),(0,r.kt)("h3",{id:"serverless-monitoring-not-supported"},"Serverless monitoring not supported"),(0,r.kt)("p",null,"Currently Gyeeta does not support monitoring of Serverless environments such as AWS Lambda and Fargate."),(0,r.kt)("h3",{id:"gke-support"},"GKE Support"),(0,r.kt)("p",null,"Gyeeta supports Google Kubernetes Engine (Standard) mode only. GKE Autopilot is not supported."),(0,r.kt)("h3",{id:"network-connectivity-requirements"},"Network Connectivity Requirements"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," Host Agent needs to connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," Central server and a ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," assigned ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," Intermediate server. The ",(0,r.kt)("inlineCode",{parentName:"p"},"partha")," Agent will\nnot listen on any port and no incoming connection firewall rules need to be set. It will just act as a TCP client and connect\nto remote ",(0,r.kt)("inlineCode",{parentName:"p"},"shyama")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"madhava")," servers."),(0,r.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,r.kt)("p",null,"Different Install Options exist :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shell-script"},"Install using Shell Script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#helm-chart"},"Install using Kubernetes Helm Chart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker"},"Running as a Docker container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rpm-deb"},"Install using native rpm or deb packages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tar-install"},"Manual Tar Package install"))),(0,r.kt)("p",null,"Except for Kubernetes installs, please ensure that the the Partha Config file in JSON format is ready as per ",(0,r.kt)("a",{parentName:"p",href:"./partha_config"},"Partha Config"),"."),(0,r.kt)("h3",{id:"shell-script"},(0,r.kt)("em",{parentName:"h3"},"Install using Shell script")),(0,r.kt)("p",null,"Users can download a shell script that takes care of the installation and configuration of the Partha Agent."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before installing Partha, users need to create a JSON config file as per the ",(0,r.kt)("a",{parentName:"p",href:"./partha_config"},"Partha Config"),"."),(0,r.kt)("p",{parentName:"admonition"},"Also, although this install script will try installing the Kernel Headers, if not present, users are advised to first\ninstall the Linux Kernel Headers before running this script. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"#kernel-headers"},"Kernel Headers"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -o /tmp/install-gyeeta-partha.sh -s https://gyeeta.io/packages/install-gyeeta-partha.sh\n\n# Then run the install script as : \n# sudo bash /tmp/install-gyeeta-partha.sh <Path to Partha Config file in JSON format>\n\n# Example Install Command (Please configure the /tmp/partha.json config file first) :\n\nsudo bash /tmp/install-gyeeta-partha.sh /tmp/partha.json\n\n")),(0,r.kt)("p",null,"The install script SHA256 can be checked before installing. The SHA256 of the install script is available at ",(0,r.kt)("a",{parentName:"p",href:"https://gyeeta.io/packages/install-gyeeta-partha.sh.sum"},"SHA256 file")),(0,r.kt)("h4",{id:"stoppingstartinguninstalling-the-partha-agent"},"Stopping/Starting/Uninstalling the Partha Agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Partha Agent"',title:'"Command',to:!0,stop:!0,the:!0,Partha:!0,'Agent"':!0},"\nsudo systemctl stop gyeeta-partha\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Partha Agent"',title:'"Command',to:!0,start:!0,the:!0,Partha:!0,'Agent"':!0},"\nsudo systemctl start gyeeta-partha\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Command to uninstall Partha Agent")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo apt-get remove gyeeta-partha")),(0,r.kt)(s.Z,{value:"rhel",label:"RHEL / Rocky Linux / Amazon Linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo yum erase gyeeta-partha")),(0,r.kt)(s.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo zypper remove gyeeta-partha")),(0,r.kt)(s.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo dnf remove gyeeta-partha"))),(0,r.kt)("h3",{id:"helm-chart"},(0,r.kt)("em",{parentName:"h3"},"Install using Kubernetes Helm Chart")),(0,r.kt)("p",null,"Kubernetes 1.19 or higher is needed along with Helm v3."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"./k8s_helm/partha_helm"},"Partha Helm Chart")," for a detailed explanation on installing Partha Agents in Kubernetes."),(0,r.kt)("p",null,"A short explanation is shown below :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add gyeeta https://gyeeta.io/helmcharts\nhelm repo update\nhelm show values gyeeta/partha > /tmp/partha.yaml\n\n# Thereafter you can edit the /tmp/partha.yaml file if you need to change any option. \n# After editing the /tmp/partha.yaml, install the partha Helm chart using :\n\nhelm install --namespace gyeeta --create-namespace partha1  gyeeta/partha -f /tmp/partha.yaml\n\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On Older Linux Distributions, users are required to first install the Linux Kernel Headers before running the Partha Helm Chart.\nPlease refer to ",(0,r.kt)("a",{parentName:"p",href:"#kernel-headers"},"Kernel Headers"),".")),(0,r.kt)("h3",{id:"docker"},(0,r.kt)("em",{parentName:"h3"},"Running as a Docker container")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before running the Docker container, users need to install the Kernel Headers as per ",(0,r.kt)("a",{parentName:"p",href:"#kernel-headers"},"Install Kernel Headers")," link.")),(0,r.kt)("p",null,"The partha container needs to be run as a ",(0,r.kt)("inlineCode",{parentName:"p"},"priviliged")," container and also needs to be in the Host Network and PID Namespace."),(0,r.kt)("p",null,"A JSON config file needs to be created first as per ",(0,r.kt)("a",{parentName:"p",href:"./partha_config"},"partha Config")),(0,r.kt)("p",null,"In the example command below, /tmp/partha.json config file has already been created on the main host."),(0,r.kt)("p",null,"The docker container will only run as a root user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -td --rm --name partha --read-only --privileged --env CFG_JSON_FILE=/tmp/partha.json --network=host --pid=host --cgroupns=host -v /proc:/proc -v /sys/:/sys/ -v /tmp/partha.json:/tmp/partha.json:ro ghcr.io/gyeeta/partha\n\n")),(0,r.kt)("h3",{id:"rpm-deb"},(0,r.kt)("em",{parentName:"h3"},"Install using native rpm or deb packages")),(0,r.kt)("p",null,"Gyeeta native rpm or deb packages are available. The install is to be followed by Partha configuration."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list\nsudo apt-get update\nsudo apt-get install -y gyeeta-partha\n'))),(0,r.kt)(s.Z,{value:"rhel",label:"RHEL / Rocky Linux / Amazon Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\nsudo yum -y update\nsudo yum install -y gyeeta-partha\n"))),(0,r.kt)(s.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\nsudo zypper -q -n install gyeeta-partha\n"))),(0,r.kt)(s.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\nsudo dnf -y update\nsudo dnf install -y gyeeta-partha\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Although this install package will try installing the Kernel Headers, if not present, users are advised to first\ninstall the Linux Kernel Headers before installing the package. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"#kernel-headers"},"Kernel Headers"),".")),(0,r.kt)("h4",{id:"partha-configuration-post-installation"},"partha Configuration post Installation"),(0,r.kt)("p",null,"After the deb or rpm package has been installed, the Partha config file ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/partha/cfg/partha_main.json")," needs\nto be edited as per ",(0,r.kt)("a",{parentName:"p",href:"./partha_config"},"Partha Config"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start Partha after editing the partha_main.json"',title:'"Start',Partha:!0,after:!0,editing:!0,the:!0,'partha_main.json"':!0},"\n# After editing the /opt/gyeeta/partha/cfg/partha_main.json config file\nsudo systemctl start gyeeta-partha\nsudo systemctl enable gyeeta-partha\n\n")),(0,r.kt)("h4",{id:"stoppingstartinguninstalling-the-partha-agent-1"},"Stopping/Starting/Uninstalling the Partha Agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Partha Agent"',title:'"Command',to:!0,stop:!0,the:!0,Partha:!0,'Agent"':!0},"\nsudo systemctl stop gyeeta-partha\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Partha Agent"',title:'"Command',to:!0,start:!0,the:!0,Partha:!0,'Agent"':!0},"\nsudo systemctl start gyeeta-partha\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Command to uninstall Partha Agent")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo apt-get remove gyeeta-partha")),(0,r.kt)(s.Z,{value:"rhel",label:"RHEL / Rocky Linux / Amazon Linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo yum erase gyeeta-partha")),(0,r.kt)(s.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo zypper remove gyeeta-partha")),(0,r.kt)(s.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-partha; sudo dnf remove gyeeta-partha"))),(0,r.kt)("h3",{id:"tar-install"},(0,r.kt)("em",{parentName:"h3"},"Manual Tar Package install")),(0,r.kt)("p",null,"If none of the above options can be used to install the Gyeeta Partha agent, a manual tarball extract and configure\ncan be used to install. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before running the Manual Tar install, users need to install the Kernel Headers as per ",(0,r.kt)("a",{parentName:"p",href:"#kernel-headers"},"Install Kernel Headers")," link.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example Install Command"',title:'"Example',Install:!0,'Command"':!0},"\nmkdir ~/gyeeta\ncd ~/gyeeta\ncurl -L https://github.com/gyeeta/gyeeta/releases/download/$( curl https://api.github.com/repos/gyeeta/gyeeta/releases/latest -s | grep tag_name | awk -F\\\" '{print $4}' )/partha.tar.gz | tar xzf -\ncd ./partha\n\n# Set Partha capabilities : needs sudo\nsudo ./setperm.sh\n\n# Thereafter create the cfg/partha_main.json partha config file and then start the partha server as\n\n./runpartha.sh start\n\n")))}g.isMDXComponent=!0}}]);