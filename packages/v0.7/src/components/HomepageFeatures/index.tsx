import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ServerStackIcon, CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Translate from '@docusaurus/Translate';
type FeatureItem = {
  titleId: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  descriptionId: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    titleId: 'homepage.features.distributed.title',
    title: 'Distributed Crawling',
    Svg: () => (
      <ServerStackIcon />
    ),
    descriptionId: 'homepage.features.distributed.description',
    description: 'Crawlers run across multiple regions and clouds, ensuring maximum coverage and reliability',
  },
  {
    titleId: 'homepage.features.spider.title',
    title: 'Web Crawler Management',
    Svg: () => (
      <CodeBracketIcon />
    ),
    descriptionId: 'homepage.features.spider.description',
    description: 'Manage and schedule web crawlers with ease, supporting various languages and frameworks',
  },
  {
    titleId: 'homepage.features.monitoring.title',
    title: 'Real-time Monitoring',
    Svg: () => (
      <ChartBarIcon />
    ),
    descriptionId: 'homepage.features.monitoring.description',
    description: 'Monitor the status of crawlers in real-time, with detailed statistics and logs',
  },
];

function Feature({ titleId, title, Svg, descriptionId, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureSvgWrapper}>
        <div className={styles.featureSvgContainer}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>
          <Translate id={titleId}>
            {title}
          </Translate>
        </h3>
        <p className={styles.featureDescription}>
          <Translate id={descriptionId}>
            {description}
          </Translate>
        </p>
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