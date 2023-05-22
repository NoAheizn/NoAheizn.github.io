import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {
    HomepageFeatures,
    NerdHompageFeatures,
} from '../components/homepage-feature';
import { useMainContext } from '../context/main-context';
import HomepageHeader from '../components/homepage/homepage-header';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const { isStrict } = useMainContext();

    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="NoAheizn blog! <head />"
        >
            {isStrict && <HomepageHeader />}
            <main className={isStrict ? styles.strictMain : styles.main}>
                {isStrict ? <HomepageFeatures /> : <NerdHompageFeatures />}
            </main>
        </Layout>
    );
}
