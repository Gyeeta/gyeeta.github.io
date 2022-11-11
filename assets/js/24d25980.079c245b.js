"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,u=m["".concat(l,".").concat(c)]||m[c]||h[c]||s;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={title:"shyama Server Configuration",description:"Shyama Central Server Configuration",keywords:["shyama","configuration"]},r="Shyama Central Server Configuration",o={unversionedId:"installation/shyama_config",id:"installation/shyama_config",title:"shyama Server Configuration",description:"Shyama Central Server Configuration",source:"@site/docs/installation/shyama_config.md",sourceDirName:"installation",slug:"/installation/shyama_config",permalink:"/docs/installation/shyama_config",draft:!1,editUrl:"https://github.com/gyeeta.github.io/tree/main/docs/installation/shyama_config.md",tags:[],version:"current",lastUpdatedAt:1668169729,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"shyama Server Configuration",description:"Shyama Central Server Configuration",keywords:["shyama","configuration"]},sidebar:"docs",previous:{title:"PostgresDB Installation",permalink:"/docs/installation/postgresdb_install"},next:{title:"shyama Server Installation",permalink:"/docs/installation/shyama_install"}},l={},p=[{value:"Listen Port",id:"listener-port",level:2},{value:"Shyama Name",id:"shyama-name",level:2},{value:"Shyama Secret",id:"shyama-secret",level:2},{value:"Service Hostname",id:"service-hostname",level:2},{value:"Service Port",id:"service-port",level:2},{value:"Postgres Hostname",id:"postgres-hostname",level:2},{value:"Postgres Port",id:"postgres-port",level:2},{value:"Postgres User",id:"postgres-user",level:2},{value:"Postgres Password",id:"postgres-password",level:2},{value:"Postgres Storage History # Days",id:"postgres-storage-days",level:2},{value:"Webserver URL",id:"webserver-url",level:2},{value:"Minimum Madhava Instances",id:"min-madhava",level:2},{value:"Cloud Operator Type",id:"cloud-type",level:2},{value:"Network Region Name",id:"region-name",level:2},{value:"Network Zone Name",id:"zone-name",level:2},{value:"Sample JSON Config file",id:"sample-json",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shyama-central-server-configuration"},"Shyama Central Server Configuration"),(0,i.kt)("p",null,"Shyama is Gyeeta's Central Server interacting with all other componenets. In addition, it also acts as the Gyeeta Alert Manager."),(0,i.kt)("p",null,"Shyama Server is the only component in Gyeeta which will interact with all other components."),(0,i.kt)("p",null,"Shyama server reads its configuration from a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON")," file or as environment variables.\nEnvironment variables will take precedence over the config file in case of a conflict."),(0,i.kt)("p",null,"A sample Shyama JSON config file is given ",(0,i.kt)("a",{parentName:"p",href:"#sample-json"},"below"),"."),(0,i.kt)("p",null,"The list of Config options include :"),(0,i.kt)("h2",{id:"listener-port"},"Listen Port"),(0,i.kt)("p",null,"By default, Shyama will listen on TCP port 10037. The JSON field for the Listen Port\nis named ",(0,i.kt)("inlineCode",{parentName:"p"},"listener_port"),". The corresponding environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_LISTENER_PORT"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"shyama-name"},"Shyama Name"),(0,i.kt)("p",null,"Each Shyama server is associated with its unique name. This name is also the DB name\nto be used in PostgresDB."),(0,i.kt)("p",null,"The JSON field name is ",(0,i.kt)("inlineCode",{parentName:"p"},"shyama_name")," and corresponding environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_SHYAMA_NAME"),"."),(0,i.kt)("p",null,"This field is mandatory and max shyama name length is 64 bytes. "),(0,i.kt)("h2",{id:"shyama-secret"},"Shyama Secret"),(0,i.kt)("p",null,"This is a secret phrase to be used to authenticate connecting Madhava and Node Webserver instances."),(0,i.kt)("p",null,"The JSON field name is ",(0,i.kt)("inlineCode",{parentName:"p"},"shyama_secret")," and corresponding environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_SHYAMA_SECRET"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"service-hostname"},"Service Hostname"),(0,i.kt)("p",null,"This indicates the Domain Name or IP Address that other components will use to connect to this Shyama instance."),(0,i.kt)("p",null,"In most instances this would be the Hostname of the Shyama server. But in cases where Virtual IP/Hostname/ NAT Translation is\napplicable such as Kubernetes, this would be the Virtual IP or Service Hostname."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Shyama instance must be accessible to all other Gyeeta components through this\nService Hostname / IP. In case multiple Network Regions or Zones are active, it is mandatory that components\nin other Network Regions / Zones can connect to this Shyama instance.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"},"VPC Network Peering")," or some other\nsuch mechanism can be used to enable this.")),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"service_hostname")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_SERVICE_HOSTNAME"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"service-port"},"Service Port"),(0,i.kt)("p",null,"This indicates the TCP Port that other components will use to connect to this Shyama instance."),(0,i.kt)("p",null,"In most instances this would be the Listener Port of the Shyama server. But in cases where Virtual Port or NAT Translation is\napplicable such as Kubernetes, this would be the Service Port."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"service_port")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_SERVICE_PORT"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"postgres-hostname"},"Postgres Hostname"),(0,i.kt)("p",null,"This indicates the Domain or IP address of the Postgres DB to be used by this Shyama instance."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres_hostname")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_POSTGRES_HOSTNAME"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"postgres-port"},"Postgres Port"),(0,i.kt)("p",null,"This indicates the TCP port of the Postgres DB to be used by this Shyama instance."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres_port")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_POSTGRES_PORT"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"postgres-user"},"Postgres User"),(0,i.kt)("p",null,"This indicates the Postgres Username to be used by this Shyama instance."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres_user")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_POSTGRES_USER"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"postgres-password"},"Postgres Password"),(0,i.kt)("p",null,"This indicates the Postgres User Password to be used by this Shyama instance."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres_password")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_POSTGRES_PASSWORD"),"."),(0,i.kt)("p",null,"This field is mandatory."),(0,i.kt)("h2",{id:"postgres-storage-days"},"Postgres Storage History # Days"),(0,i.kt)("p",null,"This indicates the number of days of DB Hostory to be kept."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres_storage_days")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_POSTGRES_STORAGE_DAYS"),"."),(0,i.kt)("p",null,"This field is optional and default is 3 days."),(0,i.kt)("h2",{id:"webserver-url"},"Webserver URL"),(0,i.kt)("p",null,"This indicates the URL of the Gyeeta Webserver that external clients will use to connect.\nThis field is needed as Shyama uses this field to send Alert metadata to external Alert Handlers\nsuch as Pagerduty or Slack."),(0,i.kt)("p",null,"In case there is no external Reverse Proxy Webserver to used, this will then indicate the\nHostname or Domain Name of the gyeeta-nodewebserver component. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"At Shyama Config time, it is likely that the Node Webserver may not have been installed and\nin such cases, this field should contain the likely Hostname of the host where the\nnode webserver is to be installed or localhost if no other hosts available. "),(0,i.kt)("p",{parentName:"admonition"},"In case of changes, the Shyama config can be updated and restarted.")),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"webserver_url")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_WEBSERVER_URL"),"."),(0,i.kt)("p",null,"This field is mandatory. Sample Usage : ",(0,i.kt)("a",{parentName:"p",href:"http://192.168.0.1:10039"},"http://192.168.0.1:10039")),(0,i.kt)("h2",{id:"min-madhava"},"Minimum Madhava Instances"),(0,i.kt)("p",null,"This field indicates the minimum number of Madhava instances that should first register with this\nShyama instance before Shyama server assigns a Madhava server to Partha Host Agent."),(0,i.kt)("p",null,"If the number of mnimum Madhava instances have not connected to Shyama, no monitoring data will be\ncollected."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"min_madhava")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_MIN_MADHAVA"),"."),(0,i.kt)("p",null,"This field is optional and default minimum Madhava instances is 1."),(0,i.kt)("h2",{id:"cloud-type"},"Cloud Operator Type"),(0,i.kt)("p",null,"This field indicates the Cloud Operator this Shyama instance is running on. This is needed\nto get the Network Region and Zone."),(0,i.kt)("p",null,"Currently supported Cloud Operator Metadata collection are : aws, gcp and azure. "),(0,i.kt)("p",null,"For other Cloud Operators or in case of own data centers, this field should be ignored."),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud_type")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_CLOUD_TYPE"),"."),(0,i.kt)("p",null,"This field is optional."),(0,i.kt)("h2",{id:"region-name"},"Network Region Name"),(0,i.kt)("p",null,"This field must be used only if the preceding ",(0,i.kt)("a",{parentName:"p",href:"#cloud-type"},"Cloud Operator type")," is empty. This field\nindicates the Network Region Name this Shyama host is operating under. "),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"region_name")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_REGION_NAME"),"."),(0,i.kt)("p",null,"This field is optional."),(0,i.kt)("h2",{id:"zone-name"},"Network Zone Name"),(0,i.kt)("p",null,"This field must be used only if the preceding ",(0,i.kt)("a",{parentName:"p",href:"#cloud-type"},"Cloud Operator type")," is empty. This field\nindicates the Network Zone Name this Shyama host is operating under. "),(0,i.kt)("p",null,"The JSON field is ",(0,i.kt)("inlineCode",{parentName:"p"},"zone_name")," and environment variable is ",(0,i.kt)("inlineCode",{parentName:"p"},"CFG_ZONE_NAME"),"."),(0,i.kt)("p",null,"This field is optional."),(0,i.kt)("h2",{id:"sample-json"},"Sample JSON Config file"),(0,i.kt)("p",null,"A sample Shyama JSON config file is provided below :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "listener_ip"           :   "0.0.0.0",\n        "listener_port"         :   10037,\n        "service_hostname"      :   "shyama1.local",\n        "service_port"          :   10037,\n        "cloud_type"            :   "gcp",\n\n        "shyama_name"           :   "shyama1",\n        "shyama_secret"         :   "This is a secret",\n\n        "min_madhava"           :   1,\n        \n        "postgres_hostname"     :   "dbshyama1.local",\n        "postgres_port"         :   10040,\n        "postgres_user"         :   "postgres",\n        "postgres_password"     :   "dbPassword",\n        "postgres_storage_days"     :   3,\n\n        "webserver_url"         :   "http://gyeetawebhost.local:10039"\n}   \n\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation of above sample config")),(0,i.kt)("p",null,"In the above sample config, the Shyama server will listen on port 10037, with other Gyeeta componenets such\nas Madhava servers, Partha Host Agents connecting to this Shyama instance at shyama1.local:10037."),(0,i.kt)("p",null,"The Shyama instance will connect to remote Postgres DB dbshyama1.local:10040 as ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres")," user with password\nas dbPassword and with max history of 3 days."),(0,i.kt)("p",null,"Shyama servers will start accepting Partha Host Agents only after at least 1 Madhava server has connected to this\nShyama instance (",(0,i.kt)("inlineCode",{parentName:"p"},"min_madhava"),")."),(0,i.kt)("p",null,"External Web Clients will connect to Gyeeta Webserver at ",(0,i.kt)("a",{parentName:"p",href:"http://gyeetawebhost.local:10039"},"http://gyeetawebhost.local:10039")," to access the Web UI."))}h.isMDXComponent=!0}}]);