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
      image: '/personal-website.png',
      name: 'Personal Website',
      description:
        'A website for documenting and showcasing my projects and blogs',
      link: 'https://www.bensonjing.com/',
      code: 'https://github.com/bensonjing/bensonjing.github.io/',
    },
    {
      image: '/peter-portal.png',
      name: 'PeterPortal API',
      description: 'The backend API that provides UCI public data access',
      link: 'https://api.peterportal.org/',
      code: 'https://github.com/icssc/peterportal-api-next',
    },
    {
      image: '/antimony.jpg',
      name: 'Antimony Meter App',
      description:
        'An app for analyzing the concentration of Antimony based on the colorimetry',
      link: 'https://github.com/bensonjing/chem-app-client/',
      code: 'https://github.com/bensonjing/chem-app-api/',
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
