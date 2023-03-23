"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[814],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),s=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),s=a(7294),l=a(6010),r=a(2389),o=a(7392),i=a(7094),d=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:a,block:r,defaultValue:p,values:h,groupId:c,className:g}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:f}=(0,i.U)(),[w,N]=(0,s.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=c){const e=T[c];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==w&&(S(t),N(n),null!=c&&f(c,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},g)},b.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:I},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,s.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,r.Z)();return s.createElement(p,(0,n.Z)({key:String(t)},e))}},8648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(7462),s=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(6823);const i={title:"TL;DR Quick Server Install",description:"TL;DR Quick Server Install",keywords:["tldr","installation"]},d="TL;DR Quick Server Installation",m={unversionedId:"installation/tldr_quick_install",id:"installation/tldr_quick_install",title:"TL;DR Quick Server Install",description:"TL;DR Quick Server Install",source:"@site/docs/installation/tldr_quick_install.md",sourceDirName:"installation",slug:"/installation/tldr_quick_install",permalink:"/docs/installation/tldr_quick_install",draft:!1,editUrl:"https://github.com/gyeeta/gyeeta.github.io/tree/main/docs/installation/tldr_quick_install.md",tags:[],version:"current",lastUpdatedAt:1679551739,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"TL;DR Quick Server Install",description:"TL;DR Quick Server Install",keywords:["tldr","installation"]},sidebar:"docs",previous:{title:"Install Planning and Options",permalink:"/docs/installation/install_options"},next:{title:"PostgresDB Installation",permalink:"/docs/installation/postgresdb_install"}},u={},p=[{value:"Inputs needed for TLDR Quick Install script",id:"inputs-needed-for-tldr-quick-install-script",level:2},{value:"Command to run the TLDR Quick Install Script",id:"command-to-run-the-tldr-quick-install-script",level:2},{value:"Network and Firewall Requirements",id:"network-and-firewall-requirements",level:2},{value:"Connecting to the Gyeeta Webserver using a browser",id:"connecting-to-the-gyeeta-webserver-using-a-browser",level:2},{value:"Max Number of Monitored Hosts",id:"max-number-of-monitored-hosts",level:2},{value:"Stopping/Starting/Uninstalling the Quick Install components",id:"stoppingstartinguninstalling-the-quick-install-components",level:2},{value:"Postgres DB",id:"postgres-db",level:3},{value:"Shyama Server",id:"shyama-server",level:3},{value:"Madhava Server",id:"madhava-server",level:3},{value:"Node Webserver",id:"node-webserver",level:3},{value:"Alert Agent",id:"alert-agent",level:3}],h={toc:p};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tldr-quick-server-installation"},"TL;DR Quick Server Installation"),(0,s.kt)("p",null,"Gyeeta provides a single command TLDR Quick Install method to install all Server Components with no other\nconfiguration requirements. This provides a very quick way to install the Gyeeta server components on a single host."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The TL;DR script will install the native deb/rpm packages and only work on Linux distributions supporting these\nnative package formats. For other environments, users will need to use other install methods such as Docker containers,\nKubernetes Helm Charts or manual tarball extraction."),(0,s.kt)("p",{parentName:"admonition"},"This script also requires Internet access so that the required packages can be downloaded.")),(0,s.kt)("p",null,"The components that will be installed on a single host as part of this script are :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"One instance of Postgres DB which will be shared between Shyama and Madhava servers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../architecture#central-server-shyama"},"Shyama Central Server")),(0,s.kt)("li",{parentName:"ul"},"One instance of ",(0,s.kt)("a",{parentName:"li",href:"../architecture#intermediate-server-madhava"},"Madhava Intermediate Server")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../architecture#node-webserver"},"Node Webserver")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../architecture#alert-action-agent"},"Alert Action Agent"))),(0,s.kt)("p",null,"Users will then need to install ",(0,s.kt)("a",{parentName:"p",href:"../architecture#host-monitor-agent-partha"},"Partha Agents")," on all hosts which need to be monitored."),(0,s.kt)("p",null,"The TLDR Quick Install will not install any Failover (High Availability) Components and if required, users will need\nto install the Failover instances separately as per the ",(0,s.kt)("a",{parentName:"p",href:"./failover"},"Failover Handling")," link."),(0,s.kt)("h2",{id:"inputs-needed-for-tldr-quick-install-script"},"Inputs needed for TLDR Quick Install script"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Postgres DB Data directory path which should have adequate Free Disk Space (minimum 10 GB)"),(0,s.kt)("li",{parentName:"ul"},"Postgres DB ",(0,s.kt)("inlineCode",{parentName:"li"},"postgres")," user Password string which will be the DB password"),(0,s.kt)("li",{parentName:"ul"},"Web UI ",(0,s.kt)("inlineCode",{parentName:"li"},"admin")," user Password string which will be used as a password for logging using a Web Browser or REST APIs")),(0,s.kt)("h2",{id:"command-to-run-the-tldr-quick-install-script"},"Command to run the TLDR Quick Install Script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample Command for TLDR Quick Install"',title:'"Sample',Command:!0,for:!0,TLDR:!0,Quick:!0,'Install"':!0},"\ncurl -o /tmp/install-gyeeta-all-quick.sh -s https://gyeeta.io/packages/install-gyeeta-all-quick.sh && \\\n    sudo bash /tmp/install-gyeeta-all-quick.sh /opt/gyeeta/postgresdb/data dbPassword adminPassword\n\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Please substitute the appropriate DB dir path, DB ",(0,s.kt)("inlineCode",{parentName:"em"},"postgres")," user password needed and Web UI ",(0,s.kt)("inlineCode",{parentName:"em"},"admin")," user password in\nthe above command before running it in your environment.")),(0,s.kt)("p",null,"Note in the above command, the DB Data dir specified (",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/postgresdb/data"),") will be created if it does not exist. "),(0,s.kt)("p",null,"Please ensure that the DB Data dir has adequate Free Disk Space. Please refer to\n",(0,s.kt)("a",{parentName:"p",href:"./postgresdb_install#madhava-dbspace"},"Madhava Postgres Disk Space Requirements"),"."),(0,s.kt)("p",null,"The install script SHA256 can be checked before installing. The SHA256 of the install script is available at\n",(0,s.kt)("a",{parentName:"p",href:"https://gyeeta.io/packages/install-gyeeta-all-quick.sh.sum"},"SHA256 file"),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The above command will not install the Partha Host Agent. Users need to run the Partha Installs using\nany of the supported ",(0,s.kt)("a",{parentName:"p",href:"./partha_install"},"Partha Install mechanisms"),"."),(0,s.kt)("p",{parentName:"admonition"},"The TLDR Quick Install script will also create a sample Partha Config file which can be used as an input Config file for the\nPartha installs."),(0,s.kt)("p",{parentName:"admonition"},"Users can skip all subsequent sections pertaining to Installation of Gyeeta Server components and Alert Agent.")),(0,s.kt)("h2",{id:"network-and-firewall-requirements"},"Network and Firewall Requirements"),(0,s.kt)("p",null,"The server components installed by the TLDR Quick Install script will listen on the following ports :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Shyama Server on port 10037"),(0,s.kt)("li",{parentName:"ul"},"Madhava Server on port 10038"),(0,s.kt)("li",{parentName:"ul"},"Node Webserver on port 10039")),(0,s.kt)("p",null,"Firewall rules must allow inbound access for these 3 ports. "),(0,s.kt)("p",null,"The Postgres DB will listen on port 10040. If this host Postgres DB will also be used by Madhava servers installed on other\nhosts, then external hosts inbound access to port 10040 will need to be allowed. "),(0,s.kt)("p",null,"Partha Host Monitors will connect to both Shyama (port 10037) and Madhava (port 10038) and the Webserver will be connected to from\nBrowsers to access the Web UI."),(0,s.kt)("p",null,"Also, the Hostname of the host on which the TLDR script is run will need to be resolved from external hosts. In other words,\nthe hostname needs to be a cluster wide valid hostname."),(0,s.kt)("p",null,"If Alert Actions (Notifications) need to access an external Server on the Internet, say a PagerDuty or Slack server, then Internet\naccess will be needed from this Install Host as well."),(0,s.kt)("h2",{id:"connecting-to-the-gyeeta-webserver-using-a-browser"},"Connecting to the Gyeeta Webserver using a browser"),(0,s.kt)("p",null,"After the TL;DR install script runs successfully, users can access the Web UI by pointing their browsers to "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"http://<Hostname or IP of TLDR server>:10039")),(0,s.kt)("p",null,"The login username to be used is ",(0,s.kt)("inlineCode",{parentName:"p"},"admin")," and the password would be the password specified while running the TLDR script. In the above\nsample command, ",(0,s.kt)("inlineCode",{parentName:"p"},"adminPassword")," was the password specified."),(0,s.kt)("p",null,"Gyeeta Node Webserver is by default an HTTP server and listening on default port 10039. Users can configure the Web Server to use HTTPS by providing\nthe TLS certificates, or change the HTTP port by editing the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/nodewebserver/.env")," config and restarting gyeeta-nodewebserver. "),(0,s.kt)("h2",{id:"max-number-of-monitored-hosts"},"Max Number of Monitored Hosts"),(0,s.kt)("p",null,"The TLDR Quick Install script only installs a single instance of Madhava Intermediate Server. This implies that the maximum number of\nMonitored Hosts that can be monitored will be limited by the CPU and Memory specs of the host on which the TLDR Quick Install script\nis run."),(0,s.kt)("p",null,"It is recommended that the TLDR Quick Install script be run on a host with adequate CPU and RAM specs as per the max Monitored\nHosts in your environment."),(0,s.kt)("p",null,"A single Madhava instance can monitor upto ",(0,s.kt)("em",{parentName:"p"},"50 monitored hosts")," for a smaller host with 2 CPU cores and 4 GB RAM whereas a host with\nwith 16 cores and 64 GB RAM can monitor upto ",(0,s.kt)("em",{parentName:"p"},"500 monitored hosts"),"."),(0,s.kt)("p",null,"In case more number of Monitored Hosts are expected, other instances of Madhava need to be installed either on same host or some other\nhost."),(0,s.kt)("h2",{id:"stoppingstartinguninstalling-the-quick-install-components"},"Stopping/Starting/Uninstalling the Quick Install components"),(0,s.kt)("h3",{id:"postgres-db"},"Postgres DB"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"gyeeta-postgresdb")," component is installed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/postgresdb"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Postgres DB"',title:'"Command',to:!0,stop:!0,the:!0,Postgres:!0,'DB"':!0},"sudo systemctl stop gyeeta-postgresdb\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Postgres DB"',title:'"Command',to:!0,start:!0,the:!0,Postgres:!0,'DB"':!0},"sudo systemctl start gyeeta-postgresdb\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Command to uninstall Gyeeta PostgresDB")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-postgresdb; sudo apt-get remove gyeeta-postgresdb")),(0,s.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-postgresdb; sudo yum erase gyeeta-postgresdb")),(0,s.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-postgresdb; sudo zypper remove gyeeta-postgresdb")),(0,s.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-postgresdb; sudo dnf remove gyeeta-postgresdb"))),(0,s.kt)("h3",{id:"shyama-server"},"Shyama Server"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"gyeeta-shyama")," component is installed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/shyama"),". The Shyama logs can be\naccessed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/shyama/log/shyama.log"),"."),(0,s.kt)("p",null,"To change the Shyama settings, users can edit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/shyama/cfg/shyama_main.json")," config file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Shyama Server"',title:'"Command',to:!0,stop:!0,the:!0,Shyama:!0,'Server"':!0},"sudo systemctl stop gyeeta-shyama\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Shyama Server"',title:'"Command',to:!0,start:!0,the:!0,Shyama:!0,'Server"':!0},"sudo systemctl start gyeeta-shyama\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Command to uninstall Shyama Server")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo apt-get remove gyeeta-shyama")),(0,s.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo yum erase gyeeta-shyama")),(0,s.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo zypper remove gyeeta-shyama")),(0,s.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-shyama; sudo dnf remove gyeeta-shyama"))),(0,s.kt)("h3",{id:"madhava-server"},"Madhava Server"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"gyeeta-madhava")," component is installed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/madhava"),". The Madhava logs can be\naccessed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/madhava/log/madhava.log"),"."),(0,s.kt)("p",null,"To change the Madhava settings, users can edit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/madhava/cfg/madhava_main.json")," config file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Madhava Server"',title:'"Command',to:!0,stop:!0,the:!0,Madhava:!0,'Server"':!0},"sudo systemctl stop gyeeta-madhava\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Madhava Server"',title:'"Command',to:!0,start:!0,the:!0,Madhava:!0,'Server"':!0},"sudo systemctl start gyeeta-madhava\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Command to uninstall Madhava Server")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-madhava; sudo apt-get remove gyeeta-madhava")),(0,s.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-madhava; sudo yum erase gyeeta-madhava")),(0,s.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-madhava; sudo zypper remove gyeeta-madhava")),(0,s.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-madhava; sudo dnf remove gyeeta-madhava"))),(0,s.kt)("h3",{id:"node-webserver"},"Node Webserver"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"gyeeta-nodewebserver")," component is installed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/nodewebserver"),". "),(0,s.kt)("p",null,"To change the Webserver settings such as the Webserver port or admin password, users can edit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/nodewebserver/.env")," env file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Node Webserver"',title:'"Command',to:!0,stop:!0,the:!0,Node:!0,'Webserver"':!0},"sudo systemctl stop gyeeta-nodewebserver\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Node Webserver"',title:'"Command',to:!0,start:!0,the:!0,Node:!0,'Webserver"':!0},"sudo systemctl start gyeeta-nodewebserver\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Command to uninstall Node Webserver")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-nodewebserver; sudo apt-get remove gyeeta-nodewebserver")),(0,s.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-nodewebserver; sudo yum erase gyeeta-nodewebserver")),(0,s.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-nodewebserver; sudo zypper remove gyeeta-nodewebserver")),(0,s.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-nodewebserver; sudo dnf remove gyeeta-nodewebserver"))),(0,s.kt)("h3",{id:"alert-agent"},"Alert Agent"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"gyeeta-alertaction")," component is installed at ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/alertaction"),". "),(0,s.kt)("p",null,"To change the Alert Agent settings, users can edit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/gyeeta/alertaction/.env")," env file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to stop the Alert Agent"',title:'"Command',to:!0,stop:!0,the:!0,Alert:!0,'Agent"':!0},"sudo systemctl stop gyeeta-alertaction\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command to start the Alert Agent"',title:'"Command',to:!0,start:!0,the:!0,Alert:!0,'Agent"':!0},"sudo systemctl start gyeeta-alertaction\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Command to uninstall Alert Agent")),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"UbuntuDebian",label:"Ubuntu / Debian",default:!0,mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo apt-get remove gyeeta-alertaction")),(0,s.kt)(r.Z,{value:"rhel",label:"RHEL / CentOS / Amazon Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo yum erase gyeeta-alertaction")),(0,s.kt)(r.Z,{value:"suse",label:"SuSE / OpenSuSE",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo zypper remove gyeeta-alertaction")),(0,s.kt)(r.Z,{value:"fedora",label:"Fedora Linux",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"sh",mdxType:"CodeBlock"},"sudo systemctl disable gyeeta-alertaction; sudo dnf remove gyeeta-alertaction"))))}c.isMDXComponent=!0}}]);