"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3361],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),s=a(7392),o=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:g,groupId:m,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=g??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:A}=(0,o.U)(),[N,T]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==N&&(I(t),T(n),null!=m&&A(m,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:S,onClick:x},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function g(e){const t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},6708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),i=a(5162),s=a(6823);const o={title:"Alert Action Agent Installation",description:"Alert Action Agent Installation",keywords:["alert","agent","installation"]},u="Alert Action Agent Installation",p={unversionedId:"installation/alertaction_install",id:"installation/alertaction_install",title:"Alert Action Agent Installation",description:"Alert Action Agent Installation",source:"@site/docs/installation/alertaction_install.md",sourceDirName:"installation",slug:"/installation/alertaction_install",permalink:"/docs/installation/alertaction_install",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/installation/alertaction_install.md",tags:[],version:"current",lastUpdatedAt:1668665976,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{title:"Alert Action Agent Installation",description:"Alert Action Agent Installation",keywords:["alert","agent","installation"]},sidebar:"docs",previous:{title:"Alert Action Agent Configuration",permalink:"/docs/installation/alertaction_config"},next:{title:"Gyeeta Failover Handling",permalink:"/docs/installation/failover"}},c={},d=[{value:"Network Connectivity Requirements",id:"network",level:2},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"<em>Install using Shell script</em>",id:"shell-script",level:3},{value:"Stopping/Starting/Uninstalling the Alert Agent",id:"stoppingstartinguninstalling-the-alert-agent",level:4},{value:"<em>Install using Kubernetes Helm Chart</em>",id:"helm-chart",level:3},{value:"<em>Running as a Docker container</em>",id:"docker",level:3},{value:"<em>Install using native rpm or deb packages</em>",id:"rpm-deb",level:3},{value:"Debian/Ubuntu based deb package install",id:"debianubuntu-based-deb-package-install",level:4},{value:"Yum or dnf based rpm Installs",id:"yum-or-dnf-based-rpm-installs",level:4},{value:"OpenSUSE / SUSE Linux based rpm Installs",id:"opensuse--suse-linux-based-rpm-installs",level:4},{value:"Alert Agent Configuration post Installation",id:"alert-agent-configuration-post-installation",level:4},{value:"Stopping/Starting/Uninstalling the Alert Agent",id:"stoppingstartinguninstalling-the-alert-agent-1",level:4},{value:"<em>Manual Tar Package install</em>",id:"tar-install",level:3},{value:"Alert Agent Failover / Redundancy",id:"alert-agent-failover--redundancy",level:2}],g={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alert-action-agent-installation"},"Alert Action Agent Installation"),(0,l.kt)("h2",{id:"network"},"Network Connectivity Requirements"),(0,l.kt)("p",null,"The Alert Action Agent is the application which is responsible for sending the Alert Notifications (Actions). "),(0,l.kt)("p",null,"The Alert Agent will communicate only with the Shyama Central Server and the Notification Servers as per Alert Config (such as Slack, Pagerduty).\nIf external Notification Servers are to be connected to for Alert Actions (such as an external Email server, Slack, etc), internet access will\nneed to be provided to the host where the Alert Agent is installed."),(0,l.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,l.kt)("p",null,"Different Install Options exist :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shell-script"},"Install using Shell Script")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#helm-chart"},"Install using Kubernetes Helm Chart")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker"},"Running as a Docker container")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rpm-deb"},"Install using native rpm or deb packages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tar-install"},"Manual Tar Package install"))),(0,l.kt)("p",null,"Except for Kubernetes installs, please ensure that the the Alert Agent Config file in env file format is ready as per ",(0,l.kt)("a",{parentName:"p",href:"./alertaction_config"},"Alert Agent Config"),"."),(0,l.kt)("h3",{id:"shell-script"},(0,l.kt)("em",{parentName:"h3"},"Install using Shell script")),(0,l.kt)("p",null,"Users can download a shell script that takes care of the installation and configuration of the Alert Agent instance."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Before installing the Alert Agent, users need to create a config file as per the ",(0,l.kt)("a",{parentName:"p",href:"./alertaction_config"},"Alert Agent Config"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -o /tmp/install-gyeeta-alertaction.sh -s https://gyeeta.io/packages/install-gyeeta-alertaction.sh\n\n# Then run the install script as : \n# sudo bash /tmp/install-gyeeta-alertaction.sh <Path to alertaction Config file in bash env format>\n\n# Example Install Command (Please configure the /tmp/alertaction.env config file first) :\n\nsudo bash /tmp/install-gyeeta-alertaction.sh /tmp/alertaction.env\n\n")),(0,l.kt)("p",null,"The install script SHA256 can be checked before installing. The SHA256 of the install script is available at ",(0,l.kt)("a",{parentName:"p",href:"https://gyeeta.io/packages/install-gyeeta-alertaction.sh.sum"},"SHA256 file")),(0,l.kt)("h4",{id:"stoppingstartinguninstalling-the-alert-agent"},"Stopping/Starting/Uninstalling the Alert Agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Alert Agent"',title:'"Command',to:!0,stop:!0,the:!0,Alert:!0,'Agent"':!0},"\nsudo systemctl stop gyeeta-alertaction\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Alert Agent"',title:'"Command',to:!0,start:!0,the:!0,Alert:!0,'Agent"':!0},"\nsudo systemctl start gyeeta-alertaction\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Command to uninstall Alert Agent")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo apt-get remove gyeeta-alertaction")),(0,l.kt)(i.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo yum erase gyeeta-alertaction")),(0,l.kt)(i.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo zypper remove gyeeta-alertaction")),(0,l.kt)(i.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo dnf remove gyeeta-alertaction"))),(0,l.kt)("h3",{id:"helm-chart"},(0,l.kt)("em",{parentName:"h3"},"Install using Kubernetes Helm Chart")),(0,l.kt)("p",null,"Kubernetes 1.18 or higher is needed along with Helm v3."),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"./k8s_helm"},"Gyeeta Helm Charts")," for a detailed explanation on installing different\nGyeeta components in Kubernetes."),(0,l.kt)("p",null,"A short explanation is shown below :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add gyeeta https://gyeeta.io/helmcharts\nhelm show values gyeeta/alertaction > /tmp/alertaction.yaml\n\n# Thereafter you can edit the /tmp/alertaction.yaml file if you need to change any option. \n# After editing the /tmp/alertaction.yaml, install the alertaction Helm chart using :\n\nhelm install --namespace gyeeta --create-namespace alertaction1  gyeeta/alertaction -f /tmp/alertaction.yaml\n\n")),(0,l.kt)("h3",{id:"docker"},(0,l.kt)("em",{parentName:"h3"},"Running as a Docker container")),(0,l.kt)("p",null,"An env  config file needs to be created first as per ",(0,l.kt)("a",{parentName:"p",href:"./alertaction_config"},"Alert Agent Config")),(0,l.kt)("p",null,"In the example command below, /tmp/alertaction.env config file has already been created on the main host."),(0,l.kt)("p",null,"The docker container will only run under userid 1001 and groupid 1001."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -td --rm --name gyeetaAlertAgent --read-only --user 1001:1001 --env CFG_ENV=/tmp/alertaction.env -v /tmp/alertaction.env:/tmp/alertaction.env:ro ghcr.io/gyeeta/alertaction\n\n")),(0,l.kt)("h3",{id:"rpm-deb"},(0,l.kt)("em",{parentName:"h3"},"Install using native rpm or deb packages")),(0,l.kt)("p",null,"Gyeeta native rpm or deb packages are available. The install is to be followed by Alert Agent configuration."),(0,l.kt)("h4",{id:"debianubuntu-based-deb-package-install"},"Debian/Ubuntu based deb package install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list\nsudo apt-get update\nsudo apt-get install -y gyeeta-alertaction\n\n')),(0,l.kt)("h4",{id:"yum-or-dnf-based-rpm-installs"},"Yum or dnf based rpm Installs"),(0,l.kt)("p",null,"For RHEL, Amazon Linux, CentOS, Rocky Linux, Fedora based distributions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\n\nif command -v yum > /dev/null; then \n    sudo yum -y update\n    sudo yum install -y gyeeta-alertaction\nelse\n    sudo dnf -y update\n    sudo dnf install -y gyeeta-alertaction\nfi  \n\n")),(0,l.kt)("h4",{id:"opensuse--suse-linux-based-rpm-installs"},"OpenSUSE / SUSE Linux based rpm Installs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\nsudo zypper -q -n install gyeeta-alertaction\n\n")),(0,l.kt)("h4",{id:"alert-agent-configuration-post-installation"},"Alert Agent Configuration post Installation"),(0,l.kt)("p",null,"After the deb or rpm package has been installed, the alertaction config file ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/alertaction/.env")," needs\nto be edited as per ",(0,l.kt)("a",{parentName:"p",href:"./alertaction_config"},"Alert Agent Config"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start alertaction after editing the .env"',title:'"Start',alertaction:!0,after:!0,editing:!0,the:!0,'.env"':!0},"\n# After editing the /opt/gyeeta/alertaction/.env config file\n\nsudo systemctl start gyeeta-alertaction\nsudo systemctl enable gyeeta-alertaction\n\n")),(0,l.kt)("h4",{id:"stoppingstartinguninstalling-the-alert-agent-1"},"Stopping/Starting/Uninstalling the Alert Agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Alert Agent"',title:'"Command',to:!0,stop:!0,the:!0,Alert:!0,'Agent"':!0},"\nsudo systemctl stop gyeeta-alertaction\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Alert Agent"',title:'"Command',to:!0,start:!0,the:!0,Alert:!0,'Agent"':!0},"\nsudo systemctl start gyeeta-alertaction\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Command to uninstall Alert Agent")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo apt-get remove gyeeta-alertaction")),(0,l.kt)(i.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo yum erase gyeeta-alertaction")),(0,l.kt)(i.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo zypper remove gyeeta-alertaction")),(0,l.kt)(i.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo dnf remove gyeeta-alertaction"))),(0,l.kt)("h3",{id:"tar-install"},(0,l.kt)("em",{parentName:"h3"},"Manual Tar Package install")),(0,l.kt)("p",null,"If none of the above options can be used to install the Gyeeta Alert Agent component, a manual tarball extract and configure\ncan be used to install."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example Install Command"',title:'"Example',Install:!0,'Command"':!0},"\nmkdir ~/gyeeta\ncd ~/gyeeta\ncurl -L https://github.com/Gyeeta/alertaction/releases/download/v0.1.0/alertaction.tar.gz | tar xzf -\ncd ./alertaction\n\n# Thereafter edit the .env Alert Agent config file and then start the Alert Agent as\n\n./runalertaction.sh start\n\n")),(0,l.kt)("h2",{id:"alert-agent-failover--redundancy"},"Alert Agent Failover / Redundancy"),(0,l.kt)("p",null,"Alert Agents can be setup for Multi Node High Availablity by installing 2 or more instances of Alert Agents."),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"./failover"},"Failover")," for further details."))}m.isMDXComponent=!0}}]);