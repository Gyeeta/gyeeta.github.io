---
title: Node Webserver Configuration
description: Node Webserver Configuration
keywords:
  - node
  - webserver
  - configuration
---

# Node Webserver Configuration

Gyeeta uses NodeJS as a Webserver. The Node Webserver will connect to the Shyama Central Server and all Madhava 
Intermediate Servers. 

Node Webserver reads its config options as environment variables or from a .env environment variable file.

A sample Node Webserver .env config file is given [below](#sample-env).

The list of Config options include :

## Listen Port {#listener-port}

The environment variable denoting the TCP port on which the Node Webserver will listen is indicated by `CFG_LISTENER_PORT`.

This field is mandatory.

## Shyama Hosts {#shyama-hosts}

This config param indicates the list of hostnames of the Shyama instances. The format 
of this param is a JSON array of one or more Shyama hostnames or IP addresses. 

This param is to be used along with [Shyama Ports](#shyama-ports) to indicate the Shyama servers.

If multiple Shyama instances are running due to High Availability, the number of elements in the 
JSON array will be more than 1. Under such cases, the Node Webserver instance will try connecting to only
the Active Shyama instance (Other instances being the Passive instances).

The environment variable is `CFG_SHYAMA_HOSTS`.

This field is mandatory. 

The Hostnames or IP Addresses mentioned in this option must be same as the
[Shyama Server Service Hostname](./shyama_config#service-hostname).

Example usages : 

[ "shyamahost1.local" ] : Here a single instance of Shyama is specified.

[ "shyama1.local", "192.168.0.2" ] : Here 2 instances of Shyama are running in Active Passive mode.



## Shyama Ports {#shyama-ports}

This config param indicates the list of TCP ports of the Shyama instances. The format 
of this param is a JSON array of one or more Shyama TCP ports.

This param is to be used along with [Shyama Hosts](#shyama-hosts) to indicate the Shyama servers.
The number of elements in this JSON array must match the number of elements specified in 
[Shyama Hosts](#shyama-hosts). 

The Environment variable is `CFG_SHYAMA_PORTS`.

This field is mandatory.

The TCP Ports mentioned in this option must be same as the 
[Shyama Server Service Port](./shyama_config#service-port).

Example usages :

[ 10037 ] : Here a single instance of Shyama is specified.

[ 10037, 10037 ] : Here 2 instances of Shyama are running in Active Passive mode.


## Web admin User Password

This config param indicates the password for the Web `admin` user.

The Environment variable is `CFG_ADMINPASSWORD`.

The Web `admin` user Password can be specified either in `CFG_ADMINPASSWORD` or in the User Password Mapping file `CFG_USERPASSFILE`.
The admin password in `CFG_ADMINPASSWORD` is given preference in case `admin` user password is also specified in `CFG_USERPASSFILE`.

This field is optional in case `CFG_USERPASSFILE` is specified. If `CFG_USERPASSFILE` is not specified, this field becomes mandatory.

## User Password Lookup File

This config param indicates the User Password Lookup file which provides the User, Password and Roles to use for the Web authentication.

This field is optional and becomes mandatory only if `CFG_ADMINPASSWORD` is not specified.

The environment variable is `CFG_USERPASSFILE` and the param needs to specify a valid file path.

The file itself needs to be in JSON Array format with each entry having fields `user`, `password` or `pass_sha256` and `role`.

Please refer to sample [User Password Lookup File](#sample-userpassfile).

### User Roles and Priviliges

Currently the Webserver supports 3 basic User Roles : 

- **admin** : Administrator Role : Has all priviliges

- **readwrite** : ReadWrite Role 

    The ReadWrite Role users cannot add/modify/delete Alert Actions (Notifications) and cannot invoke the reload of the User-Password Mapping file.

- **readonly** : ReadOnly Role

    All other users are assigned the ReadOnly Role. These users cannot add/modify/delete Alert Definitions, Silences, Inhibits in addition to the restrictions
    for the ReadWrite Role users.

## Login Token Expiry

This config param indicates the time after which the Web Authentication Token will expire and users will need to re-login
to the Web UI or using REST APIs.

If not specified, the default time is '1d' (1 day).

The Environment variable is `CFG_TOKENEXPIRY`.

This field is optional.

## JWT Login Token Secret

This config param indicates the phrase to use as a Secret to sign the JWT Web Authentication Token. 

The Environment variable is `CFG_JWTSECRET`.

This field is mandatory.

## Use HTTP 

The field indicates whether the Node Webserver will use HTTP instead of HTTPS.

The environment variable is `CFG_USEHTTP`.

The default value is `true` (which indicates HTTP). If not specified but `CFG_TLSCERTFILE` and `CFG_TLSKEYFILE` are
specfied, HTTPS is assumed.

This field is optional and allowed values are `true` or `false`.

## TLS certificate File

If `CFG_USEHTTP` environment variable is `false`, HTTPS is assumed.

This config specifies the path to a valid TLS Certificate file and the environment variable
is `CFG_TLSCERTFILE`

This field is mandatory in case `USE_HTTP` is false.

## TLS Private Key File

If `CFG_USEHTTP` environment variable is `false`, HTTPS is assumed.

This config specifies the path to a valid TLS Private Key file and the environment variable
is `CFG_TLSKEYFILE`

This field is mandatory in case `USE_HTTP` is false.

## TLS Private Key Pass Phrase

If `CFG_USEHTTP` environment variable is `false`, HTTPS is assumed.

If the TLS Private Key is encypted using a Pass phrase, this option needs to be specified.

This config specifies the Pass Prase for TLS Private Key file and the environment variable
is `CFG_TLSPASSPHRASE`

This field is optional.


## Sample Node Webserver env Config file {#sample-env}

A sample env config file is provided below :

```bash

CFG_SHYAMA_HOSTS='[ "shyama1.local" ]'
CFG_SHYAMA_PORTS='[ 10037 ]'

CFG_LISTENER_IP='0.0.0.0'
CFG_LISTENER_PORT=10039

# User Password file see sample_userpass.json. Users can also pass CFG_ADMINPASSWORD separately as well 
# and will take precedence over admin password in CFG_USERPASSFILE...

CFG_ADMINPASSWORD='adminPassword'
CFG_USERPASSFILE='/var/tmp/userpass.json'

CFG_TOKENEXPIRY='1d'
CFG_JWTSECRET='SecretPassForCookie'

# Set CFG_USEHTTP=true for HTTP server and false for HTTPS
CFG_USEHTTP=true

# If CFG_USEHTTP=false, HTTPS will be used. Please specify CFG_TLSCERTFILE and CFG_TLSKEYFILE options
# CFG_TLSCERTFILE=/var/tmp/cert.pem
# CFG_TLSKEYFILE=/var/tmp/key.pem

# If TLS Private Key is encrypted using Pass Phrase
# CFG_TLSPASSPHRASE='TLSPassPhrase'

# If log needs to be directed to a file
# CFG_LOGFILE='/tmp/gyeeta_webserver.log'


```

The above sample config specifies the Shyama server as a single instance located at shyama1.local:10037.
It also specifies the admin user Web UI password as adminPassword. The `CFG_USERPASSFILE` specified 
gives the other login user details and their roles and needs to be a valid File path and the file 
needs to be in a JSON format.  Sample User Password Lookup file is also given below as well.

In addition, the above env file specfies that the Webserver must use HTTP and not HTTPS.


## Sample User Password Lookup File {#sample-userpassfile}

```json title="Sample User Password Lookup file in JSON format"
[
	{
		"user"		:	"admin",
		"password"	:	"adminPassword",
		"role"		:	[ "admin" ],
	},
	{
		"user"		:	"user1",
		"password"	:	"pass1",
		"role"		:	[ "readonly" ]
	},
	{
		"user"			:	"user2",
		"pass_sha256"	:	"1ba3d16e9881959f8c9a9762854f72c6e6321cdd44358a10a4e939033117eab9",
		"role"			:	[ "readwrite" ]
	}
]

```

Users can specify the password directly in `password` JSON field or the SHA256 of the password in `pass_sha256` JSON field : `roles` can be `admin`, `readonly`, `readwrite`

The above sample User Password Lookup file specifies 3 users which will have access to the Webserver : `admin`, `user1`, `user2`.

