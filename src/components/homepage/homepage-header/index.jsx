import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import clsx from 'clsx';
import IznImg from '@site/static/img/ipixel.png';
import NoAImg from '@site/static/img/noa.png';
import Link from '@docusaurus/core/lib/client/exports/Link';

const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero--primary', styles.header)}>
            <div className={styles.profileContainer}>
                <div className={styles.profile}>
                    <img
                        className={styles.profileImg}
                        src={IznImg}
                        alt="Izuna"
                    />
                </div>

                <div className={styles.profile}>
                    <img
                        className={styles.profileImg}
                        src={NoAImg}
                        alt="NoA"
                    />
                </div>
            </div>

            <div className={styles.titleContainer}>
                <h1 className="hero__title">Hello from {siteConfig.title}</h1>
                <p className={clsx('hero__subtitle', styles.subTitle)}>
                    {siteConfig.tagline}
                </p>

                <button className="button button--secondary button--md">
                    <Link href="/izuna" className={styles.buttonLink}>
                        Let's Go !
                    </Link>
                </button>
            </div>
        </header>
    );
};

export default HomepageHeader;