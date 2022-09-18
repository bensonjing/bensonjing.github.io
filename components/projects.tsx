import Link from 'next/link';

import ProjectDetail from './project_detail';
import styles from '../styles/Project.module.css';

export interface project {
  image: string;
  name: string;
  description: string;
  link: string;
  code: string;
}

export default function Projects() {
  const projects = [
    {
      image: '/logo-dark.svg',
      name: 'Personal Website',
      description:
        'A website for documenting and showcasing my projects and blogs',
      link: 'https://www.bensonjing.com/',
      code: 'https://github.com/bensonjing/bensonjing.github.io/',
    },
    {
      image: '/logo-dark.svg',
      name: 'Blog API',
      description: 'The backend API for my personal blog',
      link: 'https://www.bensonjing.com/blog/',
      code: 'https://github.com/bensonjing/blog-api/',
    },
    {
      image: '/logo-dark.svg',
      name: 'Antimony Meter App',
      description:
        'An app for analyzing the concentration of Antimony based on the colorimetry',
      link: 'https://github.com/bensonjing/chem-app-client/',
      code: 'https://github.com/bensonjing/chem-app-api/',
    },
    {
      image: '/logo-dark.svg',
      name: 'Bouncing Ball Game',
      description:
        'a game in which user can create different ball objects and interact with each other',
      link: 'https://github.com/bensonjing/bouncing-ball-game/',
      code: 'https://github.com/bensonjing/bouncing-ball-game/',
    },
  ];

  return (
    <section className='container' id='projects'>
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.projects}>
        {projects.map((projectInfo: project) => (
          <ProjectDetail {...projectInfo} key={projectInfo.name} />
        ))}
      </div>
      <div className={styles.github}>
        <Link href='https://github.com/bensonjing/'>
          <a target='_blank' rel='noreferrer'>
            <button className={styles.button}>More On GitHub</button>
          </a>
        </Link>
      </div>
    </section>
  );
}
