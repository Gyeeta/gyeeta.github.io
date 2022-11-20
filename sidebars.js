
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
				label: 'Shyama Server Configuration',
			},
			{
				type: 'doc',
				id: 'installation/shyama_install',
				label: 'Shyama Server Installation',
			},
			{
				type: 'doc',
				id: 'installation/madhava_config',
				label: 'Madhava Server Configuration',
			},
			{
				type: 'doc',
				id: 'installation/madhava_install',
				label: 'Madhava Server Installation',
			},
			{
				type: 'doc',
				id: 'installation/partha_config',
				label: 'Partha Host Agent Configuration',
			},
			{
				type: 'doc',
				id: 'installation/partha_install',
				label: 'Partha Host Agent Installation',
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
				type: 'category',
				label: 'Kubernetes Helm Charts',
				link: {
					type: 'doc',
					id: 'installation/k8s_helm/k8s_helm',
				},
				items: [
					'installation/k8s_helm/shyama_helm',
					'installation/k8s_helm/madhava_helm',
					'installation/k8s_helm/partha_helm',
					'installation/k8s_helm/nodewebserver_helm',
					'installation/k8s_helm/alertaction_helm',
				],
			},

		],
	},

	{
		type: 'doc',
		id: 'monitor/overview',
		label: 'Monitoring Features & Limitations',
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
