import Link from 'next/link';

import ProjectDetail from './project_detail';

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
  ];

  return (
    <section>
      <h3>Projects</h3>
      <div>
        {projects.map((projectInfo: project) => (
          <ProjectDetail {...projectInfo} key={projectInfo.name} />
        ))}
      </div>
      <Link href='https://github.com/bensonjing/'>
        <a target='_blank' rel='noreferrer'>
          <button>More On GitHub</button>
        </a>
      </Link>
    </section>
  );
}
