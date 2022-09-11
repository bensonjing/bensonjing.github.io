import Head from 'next/head';

import Intro from '../components/intro';
import Skills from '../components/skills';
import Projects from '../components/projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benson Jing</title>
      </Head>
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}
