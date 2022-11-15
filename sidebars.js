
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs : [
  	'introduction',
	'architecture',
	{
		type: 'category',
		label: 'Installation & Configuration',
		link: {
			type: 'generated-index',
		},
		items: [
			{
				type: 'doc',
				id: 'installation/install_options',
				label: 'Install Planning and Options',
			},
			{
				type: 'doc',
				id: 'installation/tldr_quick_install',
				label: 'TLDR Quick Server Install',
			},
			{
				type: 'doc',
				id: 'installation/postgresdb_install',
				label: 'PostgresDB Installation',
			},
			{
				type: 'doc',
				id: 'installation/shyama_config',
				label: 'shyama Server Configuration',
			},
			{
				type: 'doc',
				id: 'installation/shyama_install',
				label: 'shyama Server Installation',
			},
			{
				type: 'doc',
				id: 'installation/madhava_config',
				label: 'madhava Server Configuration',
			},
			{
				type: 'doc',
				id: 'installation/madhava_install',
				label: 'madhava Server Installation',
			},
			{
				type: 'doc',
				id: 'installation/partha_config',
				label: 'partha Agent Configuration',
			},
			{
				type: 'doc',
				id: 'installation/partha_install',
				label: 'partha Agent Installation',
			},
			{
				type: 'doc',
				id: 'installation/nodewebserver_config',
				label: 'Node Webserver Configuration',
			},
			{
				type: 'doc',
				id: 'installation/nodewebserver_install',
				label: 'Node Webserver Installation',
			},
			{
				type: 'doc',
				id: 'installation/alertaction_config',
				label: 'Alert Agent Configuration',
			},
			{
				type: 'doc',
				id: 'installation/alertaction_install',
				label: 'Alert Agent Installation',
			},
			{
				type: 'doc',
				id: 'installation/failover',
				label: 'Failover (HA) Handling',
			},
			{
				type: 'doc',
				id: 'installation/k8s_helm',
				label: 'Kubernetes Helm Charts',
			},

		],
	},

	{
		type: 'doc',
		id: 'monitor/overview',
		label: 'Monitoring Overview & Limitations',
	},
	{
		type: 'doc',
		id: 'monitor/termsused',
		label: 'Technical Terms used',
	},			
	{
		type: 'category',
		label: 'Querying Architecture',
		link: {
			type: 'generated-index',
		},
		items: [
			'querying/queryoverview',
			'querying/datatypes',
			'querying/aggregation',
			'querying/groupprocess',
			'querying/netflows',
			'querying/k8s',
		],  
	},
	{
		type: 'category',
		label: 'Web UI',
		link: {
			type: 'generated-index',
		},
		items: [
			'monitor/uioverview',
			'monitor/clustdash',
			'monitor/hostdash',
			'monitor/servicedash',
			'monitor/processdash',
			'monitor/alertdash',
		],  
	},			
	'searchshow',
	{
		type: 'category',
		label: 'Alerts Guide',
		link: {
			type: 'generated-index',
		},
		items: [
			'alerts/alertoverview',
			'alerts/alertwalkthru',
		],  
	},
	{
		type: 'category',
		label: 'Developer APIs',
		link: {
			type: 'generated-index',
		},
		items: [
			'restapi/restoverview',
		],  
	},
  ],

};

module.exports = sidebars;
