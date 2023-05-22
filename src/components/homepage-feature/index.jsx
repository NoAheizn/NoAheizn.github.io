import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Wallpaper from '@site/static/img/docusaurus.png';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'NoAheizn',
    name: 'NoAheizn',
    description: (
      <>
        NoAheizn is cuties <br />
        <Link href="https://github.com/NoAheizn">GitHub</Link>
      </>
    ),
  },
  {
    title: 'Izuna',
    name: 'izunya',
    description: (
      <> 
        Izuna is bot <br />
        <Link href="https://github.com/izunya">GitHub</Link>
      </>
    ),
  },
  {
    title: 'NoA',
    name: 'NoAheizn',
    description: (
      <>
        Noa is AI <br />
        <Link href="https://github.com/NoAheizn">GitHub</Link>
      </>
    ),
  },
];

function Feature({ Svg, title, description, name }) {
  const [src, setSrc] = useState('');
  const getProfileImg = async () => {
      const response = await fetch(`https://api.github.com/users/${name}`, {
          method: 'GET',
      }).then((res) => res.json());
      setSrc(response.avatar_url);
  };

  useEffect(() => {
      getProfileImg();
  }, []);

  return (
      <div className={clsx('col col--4', styles.featureItem)}>
          <div className="text--center padding-horiz--md">
              <h3>{title}</h3>
              <img className={styles.featureImg} src={src} alt={name} />
              <p>{description}</p>
          </div>
      </div>
  );
}
export function HomepageFeatures() {
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
export function NerdHompageFeatures() {
  return (
      <div className={styles.nerdFeature}>
          {/* <img src={Wallpaper} alt="Nahh" /> */}
      </div>
  );
}