import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {useColorMode} from '@docusaurus/theme-common';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode, setColorMode} = useColorMode();
  
  const fcolor = (colorMode === 'dark' ? undefined : 'lightblue');

  return (
      <div 
		style={{  
		  backgroundImage: "url(" + "/img/sky1.jpg" + ")",
		  backgroundPosition: 'center',
		  backgroundSize: 'cover',
		  backgroundRepeat: 'no-repeat',
		  width : '100%',
		  minWidth : 550,
		  display: 'flex',
		  flexWrap: 'wrap',
		  flexDirection : 'column',
		  alignItems : 'center',
		  
		}} >

	<>
	    <div 
	      style={{  
		  display: 'flex',
		  flexWrap: 'wrap',
		  justifyContent : 'center',
		  alignItems : 'center',
		  minWidth : 300,
		  marginTop : 30,
		  background : '#1b2635db',
		}} >	    
	<img style={{ borderRadius : "50%" }} src="/img/gyeeta.png" alt="Gyeeta" width="60" height="60" />
	<span style={{ marginRight : 10 }}> </span>
	<span style={{ fontSize : 50, color : '#d4a785' }}><strong><em>G</em></strong></span><span style={{ fontSize : 40, color : '#8288b0' }}><strong><em>yeeta</em></strong></span>
	</div>

	<div style={{ marginTop : 20 }}><span style={{ fontSize : 20, margin : 20, color : '#d4a785', background : '#1b2635db', }}><strong><em>Know thy systems, Free thy self!</em></strong></span> </div>

	<div style={{ marginTop : 20 }} />
	<span style={{ fontSize : 20, margin : 30, color : '#bcdfd7', background : '#1b2635db', }}><strong>{siteConfig.tagline}</strong></span>
	<div style={{ marginTop : 20 }} />

	      <div style={{ marginTop : 20, marginLeft : 30, marginRight : 30, display : 'inline-block', maxWidth: '900px', maxHeight: '500px' }} >
	        <a href="/docs">
		<img src="https://pkg.gyeeta.workers.dev/gyeeta480p.gif" alt="Gyeeta Overview" />
		</a>
	      </div>

	      <div style={{ marginTop : 10, marginBottom : 30 }} />

	      <div style={{ minWidth : 500, marginBottom : 50 }}>
	      <a className="button button--primary button--block" href="/docs"><span style={{ fontSize : 16 }}>Learn More</span></a>
	      </div>

	</>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
