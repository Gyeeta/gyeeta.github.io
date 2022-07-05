
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
				id: 'installation/partha_install',
				label: 'Agent (partha) Installation',
			},
			{
				type: 'doc',
				id: 'installation/partha_config',
				label: 'Agent (partha) Configuration',
			},
			{
				type: 'doc',
				id: 'installation/shyama_install',
				label: 'shyama Server Installation',
			},
			{
				type: 'doc',
				id: 'installation/shyama_config',
				label: 'shyama Server Configuration',
			},

			{
				type: 'doc',
				id: 'installation/madhava_install',
				label: 'madhava Server Installation',
			},
			{
				type: 'doc',
				id: 'installation/madhava_config',
				label: 'madhava Server Configuration',
			},

		],
	},
	{
		type: 'category',
		label: 'Monitoring Guide',
		link: {
			type: 'generated-index',
		},
		items: [
			{
				type: 'doc',
				id: 'monitor/overview',
				label: 'Overview & Limitations',
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
	},	
  ],

};

module.exports = sidebars;
