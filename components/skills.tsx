import Image from 'next/image';

import styles from '../styles/Skills.module.css';

export default function Skills() {
  const languages = [
    'Python',
    'C++',
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Java',
  ];

  const technologies = [
    'React.js',
    'React Native',
    'Next.js',
    'Express',
    'Node.js',
    'MongoDB',
    'Flask',
  ];

  const tools = [
    'Git/Github',
    'npm',
    'Webpack',
    'Heroku',
    'Vercel',
    'VScode',
    'Vim/Neovim',
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Skills</h1>

      <div className={styles.skills}>
        <article>
          <h3 className={styles.subtitle}>Languages</h3>
          <div className={styles.card}>
            {languages.map((item) => (
              <SkillContainer name={item} key={item} />
            ))}
          </div>
        </article>

        <article>
          <h3 className={styles.subtitle}>Technologies</h3>
          <ul className={styles.card}>
            <li>React.js</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>PassportJS</li>
            <li>Flask</li>
          </ul>
        </article>

        <article>
          <h3 className={styles.subtitle}>Tools</h3>
          <ul className={styles.card}>
            <li>Git/GitHub</li>
            <li>npm</li>
            <li>Webpack</li>
            <li>Heroku</li>
            <li>Vercel</li>
            <li>VScode</li>
            <li>Vim/Neovim</li>
            <li>Terminal/Zsh</li>
          </ul>
        </article>
      </div>
    </section>
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
