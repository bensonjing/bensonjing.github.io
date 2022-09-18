import Image from 'next/image';

import styles from '../styles/Skills.module.css';

export default function Skills() {
  const skillSets = [
    {
      languages: [
        'Python',
        'C++',
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Java',
      ],
    },
    {
      technologies: [
        'React.js',
        'Next.js',
        'Express',
        'Node.js',
        'MongoDB',
        'Flask',
        'Firebase',
      ],
    },
    {
      tools: [
        'Github',
        'npm',
        'Webpack',
        'Heroku',
        'Vercel',
        'VScode',
        'Neovim',
      ],
    },
  ];
  return (
    <section className='container' id='skills'>
      <h1 className={styles.title}>Skills</h1>

      <div className={styles.skills}>
        {skillSets.map((set) => {
          const name = Object.keys(set)[0];
          const skills = Object.values(set)[0];
          return <SkillSet name={name} skills={skills} key={name} />;
        })}
      </div>
    </section>
  );
}

function SkillSet({ name, skills }: { name: string; skills: string[] }) {
  return (
    <article>
      <h3 className={styles.subtitle}>{name}</h3>
      <div className={styles.card}>
        {skills.map((skill) => (
          <SkillContainer name={skill} key={skill} />
        ))}
      </div>
    </article>
  );
}

function SkillContainer({ name }: { name: string }) {
  return (
    <div className={styles.skillContainer} data-line={name}>
      <Image
        src={`/icon/${name}.svg`}
        alt={name}
        width='48'
        height='48'
        layout='fixed'
      />
    </div>
  );
}
