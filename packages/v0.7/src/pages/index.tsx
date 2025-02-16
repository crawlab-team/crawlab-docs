import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Crawlab
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            Distributed Web Crawler Management Platform
          </Translate> 
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/quick-start">
            <Translate id="homepage.cta.quickStart">
              Quick Start 🚀
            </Translate>
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/"
            style={{ marginLeft: '1rem' }}>
            <Translate id="homepage.cta.features">
              Features ✨
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
