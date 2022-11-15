"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3526],{5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),l=t(6010);const s="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),l=t(7294),s=t(6010),r=t(2389),i=t(7392),o=t(7094),m=t(2466);const u="tabList__CuJ",h="tabItem_LNqP";function p(e){var a;const{lazy:t,block:r,defaultValue:p,values:d,groupId:y,className:c}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,i.l)(k,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:S}=(0,o.U)(),[N,C]=(0,l.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=y){const e=f[y];null!=e&&e!==N&&k.some((a=>a.value===e))&&C(e)}const I=e=>{const a=e.currentTarget,t=T.indexOf(a),n=k[t].value;n!==N&&(w(a),C(n),null!=y&&S(y,String(n)))},x=e=>{var a;let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},c)},k.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>T.push(e),onKeyDown:x,onClick:I},r,{className:(0,s.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":N===a})}),t??a)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function d(e){const a=(0,r.Z)();return l.createElement(p,(0,n.Z)({key:String(a)},e))}},4110:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=t(7462),l=(t(7294),t(3905)),s=t(5488),r=t(5162),i=t(6823);const o={title:"shyama Server Installation",description:"Shyama Central Server Installation",keywords:["shyama","installation"]},m="Shyama Central Server Installation",u={unversionedId:"installation/shyama_install",id:"installation/shyama_install",title:"shyama Server Installation",description:"Shyama Central Server Installation",source:"@site/docs/installation/shyama_install.md",sourceDirName:"installation",slug:"/installation/shyama_install",permalink:"/docs/installation/shyama_install",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/installation/shyama_install.md",tags:[],version:"current",lastUpdatedAt:1668540240,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{title:"shyama Server Installation",description:"Shyama Central Server Installation",keywords:["shyama","installation"]},sidebar:"docs",previous:{title:"shyama Server Configuration",permalink:"/docs/installation/shyama_config"},next:{title:"madhava Server Configuration",permalink:"/docs/installation/madhava_config"}},h={},p=[{value:"Network Connectivity Requirements",id:"network",level:2},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"<em>Install using Shell script</em>",id:"shell-script",level:3},{value:"Stopping/Starting/Uninstalling the Shyama Server",id:"stoppingstartinguninstalling-the-shyama-server",level:4},{value:"<em>Kubernetes Helm Chart</em>",id:"helm-chart",level:3},{value:"<em>Running as a Docker container</em>",id:"docker",level:3},{value:"<em>Install using native rpm or deb packages</em>",id:"rpm-deb",level:3},{value:"Debian/Ubuntu based deb package install",id:"debianubuntu-based-deb-package-install",level:4},{value:"Yum or dnf based rpm Installs",id:"yum-or-dnf-based-rpm-installs",level:4},{value:"OpenSUSE / SUSE Linux based rpm Installs",id:"opensuse--suse-linux-based-rpm-installs",level:4},{value:"Shyama Configuration post Installation",id:"shyama-configuration-post-installation",level:4},{value:"Stopping/Starting/Uninstalling the Shyama Server",id:"stoppingstartinguninstalling-the-shyama-server-1",level:4},{value:"<em>Manual Tar Package install</em>",id:"tar-install",level:3},{value:"Shyama Failover / Redundancy",id:"shyama-failover--redundancy",level:2}],d={toc:p};function y(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shyama-central-server-installation"},"Shyama Central Server Installation"),(0,l.kt)("p",null,"Shyama Server is the only component in Gyeeta which will interact with all other components."),(0,l.kt)("h2",{id:"network"},"Network Connectivity Requirements"),(0,l.kt)("p",null,"As Shyama will communicate with all other components, Shyama needs to be installed on a host that can be\nconnected to by all other components and all Hosts that need to be monitored."),(0,l.kt)("p",null,"It is recommended that the Shyama server and its PostgresDB be in the same Network Region and Zone to limit\nNetwork costs and for better performance."),(0,l.kt)("p",null,"Firewall rules must allow inbound access to the Shyama server on the configured Shyama port (default port is 10037)."),(0,l.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,l.kt)("p",null,"Different Install Options exist :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shell-script"},"Install using Shell Script")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#helm-chart"},"Kubernetes Helm Chart")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker"},"Running as a Docker container")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rpm-deb"},"Install using native rpm or deb packages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tar-install"},"Manual Tar Package install"))),(0,l.kt)("p",null,"Except for Kubernetes installs, please ensure that the Postgres DB instance is installed and the Shyama Config\nfile in JSON format is ready as per ",(0,l.kt)("a",{parentName:"p",href:"./shyama_config"},"Shyama Config"),"."),(0,l.kt)("h3",{id:"shell-script"},(0,l.kt)("em",{parentName:"h3"},"Install using Shell script")),(0,l.kt)("p",null,"Users can download a shell script that takes care of the installation and configuration of the Shyama instance."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Before installing Shyama, users need to create a JSON config file as per the ",(0,l.kt)("a",{parentName:"p",href:"./shyama_config"},"Shyama Config"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o /tmp/install-gyeeta-shyama.sh -s https://gyeeta.io/packages/install-gyeeta-shyama.sh\n\n# Then run the install script as : \n# sudo bash /tmp/install-gyeeta-shyama.sh <Path to Shyama Config file in JSON format>\n\n# Example Install Command (Please configure the /tmp/shyama.json config file first) :\n\nsudo bash /tmp/install-gyeeta-shyama.sh /tmp/shyama.json\n\n")),(0,l.kt)("p",null,"The install script SHA256 can be checked before installing. The SHA256 of the install script is available at ",(0,l.kt)("a",{parentName:"p",href:"https://gyeeta.io/packages/install-gyeeta-shyama.sh.sum"},"SHA256 file")),(0,l.kt)("h4",{id:"stoppingstartinguninstalling-the-shyama-server"},"Stopping/Starting/Uninstalling the Shyama Server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Shyama Server"',title:'"Command',to:!0,stop:!0,the:!0,Shyama:!0,'Server"':!0},"\nsudo systemctl stop gyeeta-shyama\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Shyama Server"',title:'"Command',to:!0,start:!0,the:!0,Shyama:!0,'Server"':!0},"\nsudo systemctl start gyeeta-shyama\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Command to uninstall Shyama Server")),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo apt-get remove gyeeta-shyama")),(0,l.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo yum erase gyeeta-shyama")),(0,l.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo zypper remove gyeeta-shyama")),(0,l.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo dnf remove gyeeta-shyama"))),(0,l.kt)("h3",{id:"helm-chart"},(0,l.kt)("em",{parentName:"h3"},"Kubernetes Helm Chart")),(0,l.kt)("p",null,"Kubernetes 1.18 or higher is needed along with Helm v3."),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"./k8s_helm"},"Gyeeta Helm Charts")," for a detailed explanation on installing different\nGyeeta components in Kubernetes."),(0,l.kt)("p",null,"A short explanation is shown below :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add gyeeta https://gyeeta.io/helmcharts\nhelm show values gyeeta/shyama > /tmp/shyama.yaml\n\n# Thereafter you can edit the /tmp/shyama.yaml file if you need to change any option. \n# After editing the /tmp/shyama.yaml, install the Shyama Helm chart using :\n\nhelm install --namespace gyeeta --create-namespace shyama1  gyeeta/shyama -f /tmp/shyama.yaml\n\n")),(0,l.kt)("h3",{id:"docker"},(0,l.kt)("em",{parentName:"h3"},"Running as a Docker container")),(0,l.kt)("p",null,"A JSON config file needs to be created first as per ",(0,l.kt)("a",{parentName:"p",href:"./shyama_config"},"Shyama Config")),(0,l.kt)("p",null,"In the example command below, /tmp/shyama.json config file has already been created on the main host."),(0,l.kt)("p",null,"The docker container will only run under userid 1001 and groupid 1001."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run --rm -td --name shyama --read-only --user 1001:1001 -p 10037:10037 --env CFG_MAIN_JSON=/tmp/shyama.json -v /tmp/shyama.json:/tmp/shyama.json:ro ghcr.io/gyeeta/shyama start\n\n")),(0,l.kt)("h3",{id:"rpm-deb"},(0,l.kt)("em",{parentName:"h3"},"Install using native rpm or deb packages")),(0,l.kt)("p",null,"Gyeeta native rpm or deb packages are available. The install is to be followed by Shyama configuration."),(0,l.kt)("h4",{id:"debianubuntu-based-deb-package-install"},"Debian/Ubuntu based deb package install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl https://pkg.gyeeta.workers.dev/pgp-key.public | sudo gpg --yes --dearmor --output /usr/share/keyrings/gyeeta-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/gyeeta-keyring.gpg] https://pkg.gyeeta.workers.dev/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/gyeeta.list\nsudo apt-get update\nsudo apt-get install -y gyeeta-shyama\n\n')),(0,l.kt)("h4",{id:"yum-or-dnf-based-rpm-installs"},"Yum or dnf based rpm Installs"),(0,l.kt)("p",null,"For RHEL, Amazon Linux, CentOS, Rocky Linux, Fedora based distributions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/yum.repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\n\nif command -v yum > /dev/null; then \n    sudo yum -y update\n    sudo yum install -y gyeeta-shyama\nelse\n    sudo dnf -y update\n    sudo dnf install -y gyeeta-shyama\nfi  \n\n")),(0,l.kt)("h4",{id:"opensuse--suse-linux-based-rpm-installs"},"OpenSUSE / SUSE Linux based rpm Installs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo rpm --import https://pkg.gyeeta.workers.dev/pgp-key.public\nsudo curl -s -o /etc/zypp/repos.d/gyeeta.repo https://pkg.gyeeta.workers.dev/rpm-repo/gyeeta.repo\nsudo zypper -q -n install gyeeta-shyama\n\n")),(0,l.kt)("h4",{id:"shyama-configuration-post-installation"},"Shyama Configuration post Installation"),(0,l.kt)("p",null,"After the deb or rpm package has been installed, the Shyama config file ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/shyama/cfg/shyama_main.json")," needs\nto be edited as per ",(0,l.kt)("a",{parentName:"p",href:"./shyama_config"},"Shyama Config"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start Shyama after editing the shyama_main.json"',title:'"Start',Shyama:!0,after:!0,editing:!0,the:!0,'shyama_main.json"':!0},"\n# After editing the /opt/gyeeta/shyama/cfg/shyama_main.json config file\nsudo systemctl start gyeeta-shyama\nsudo systemctl enable gyeeta-shyama\n\n")),(0,l.kt)("h4",{id:"stoppingstartinguninstalling-the-shyama-server-1"},"Stopping/Starting/Uninstalling the Shyama Server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Shyama Server"',title:'"Command',to:!0,stop:!0,the:!0,Shyama:!0,'Server"':!0},"\nsudo systemctl stop gyeeta-shyama\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Shyama Server"',title:'"Command',to:!0,start:!0,the:!0,Shyama:!0,'Server"':!0},"\nsudo systemctl start gyeeta-shyama\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Command to uninstall Shyama Server")),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo apt-get remove gyeeta-shyama")),(0,l.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo yum erase gyeeta-shyama")),(0,l.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo zypper remove gyeeta-shyama")),(0,l.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo dnf remove gyeeta-shyama"))),(0,l.kt)("h3",{id:"tar-install"},(0,l.kt)("em",{parentName:"h3"},"Manual Tar Package install")),(0,l.kt)("p",null,"If none of the above options can be used to install the Gyeeta Shyama component, a manual tarball extract and configure\ncan be used to install."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example Install Command"',title:'"Example',Install:!0,'Command"':!0},"\nmkdir ~/gyeeta\ncd ~/gyeeta\ncurl -L https://github.com/Gyeeta/gyeeta/releases/download/v0.1.0/shyama.tar.gz | tar xzf -\ncd ./shyama\n\n# Thereafter create the cfg/shyama_main.json Shyama config file and then start the Shyama server as\n\n./runshyama.sh start\n\n")),(0,l.kt)("h2",{id:"shyama-failover--redundancy"},"Shyama Failover / Redundancy"),(0,l.kt)("p",null,"Shyama server can be setup for Multi Node High Availablity by installing 2 or more instances of Shyama\nwhich interact with the same instance of Postgres DB in Active-Passive mode."),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"./failover"},"Failover")," for further details."))}y.isMDXComponent=!0}}]);