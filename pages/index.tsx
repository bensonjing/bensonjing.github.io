import Head from 'next/head';

import Intro from '../components/intro';
import Skills from '../components/skills';
import Projects from '../components/projects';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benson Jing</title>
      </Head>
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}
