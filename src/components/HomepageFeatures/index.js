import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '100% Free. 100% Open Source.',
    description: (
      <>
        Gyeeta is 100% Free <i>forever</i>. 100% Open Source (C++). 
	Not a SaaS Product. Your Infrastructure, Your Data.
      </>
    ),
  },
  {
    title: 'Non-intrusive with eBPF',
    description: (
      <>
        Gyeeta uses eBPF and Kernel Statistics and is 100% non-intrusive. 
	Monitor On-Prem or Cloud. Kubernetes or Openshift.
	No tracing, No instrumentation, No crashes, No slowdowns.
      </>
    ),
  },
  {
    title: '100% Service Activity',
    description: (
      <>
        Gyeeta reports statistics for 100% of your Services. 
	And not just HTTP based services. Any Stack. Get Query Counts, Response Times,
	Network Flows, Service Maps, Anomalies, Contention all in one place.
      </>
    ),
  },
  {
    title: 'Lightweight & Highly Scalable',
    description: (
      <>
        Gyeeta supports monitoring thousands of servers.
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
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
