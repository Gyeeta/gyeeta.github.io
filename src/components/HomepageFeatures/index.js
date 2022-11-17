import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '100% Free. 100% Open Source.',
    description: (
      <>
        Gyeeta is 100% Free. 100% Open Source (C++). 
	Not a SaaS Product. Your Infrastructure, Your Data.
      </>
    ),
  },
  {
    title: 'Non-intrusive Observability with eBPF',
    description: (
      <>
        Uses eBPF and Kernel Statistics and is 100% non-intrusive. 
	Monitor On-Prem or Cloud. Kubernetes or Openshift.
	No tracing, No instrumentation, No crashes, No slowdowns.
      </>
    ),
  },
  {
    title: '100% Service Observability',
    description: (
      <>
        Statistics for 100% of your Services. 
	And not just HTTP based services. Any Stack. Get Query Counts, Response Times,
	Network Flows, Service Maps, Anomalies, Contention all in one place.
      </>
    ),
  },
  {
    title: 'Lightweight & Highly Scalable',
    description: (
      <>
        Monitor thousands of servers.
	Monitor Hosts with tens of thousands of Queries/sec or
	thousands of connections all under 10% of one CPU core.
      </>
    ),
  },
    
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--5')}>
      <div className="text--center" style={{ marginTop : 30 }}>
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
    <div
      style={{
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent : 'center',
	  alignItems : 'center',
	  width : '100%',
	  minWidth : 500,
	  minHeight : 350,
	  margin : 10,
      }} >

      <div
	     style={{
		  display: 'flex',
		  flexWrap: 'wrap',
		  justifyContent : 'center',
		  alignItems : 'center',
		  minWidth : 500,
		  minHeight : 350,
		  margin : 100,
	     }}	  
      >
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

      <div 
      style={{  
	  backgroundImage: "url(" + "/img/graph2.jpg" + ")",
	  backgroundPosition: 'center',
	  backgroundSize: 'cover',
	  backgroundRepeat: 'no-repeat',
	  borderRadius : '10%', 
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent : 'center',
	  alignItems : 'center',
	  width : '30%',
	  maxWidth : 500,
	  minWidth : 450,
	  minHeight : 320,
	  margin : 30,
	}} >	    
      <div style={{ marginLeft : 10, marginBottom : 20, display : 'flex', flexWrap : 'wrap', justifyContent : 'center' }}>
      <span style={{ fontSize : 20, color : '#bcdfd7', background : '#1b2635db', }}><strong><em> Monitor all your Infrastructure at no cost !! </em></strong></span>
      </div>
      </div>


    </div>  
    </section>
  );
}
