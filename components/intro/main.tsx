import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Intro.module.css';

interface LinkInfo {
  href: string;
  logo: string;
  alt: string;
}

export default function Main() {
  const externalLinks = [
    {
      href: 'mailto:bensonjing@icloud.com',
      logo: '/icon/email-light.png',
      alt: 'email',
    },
    {
      href: 'https://github.com/bensonjing/',
      logo: '/icon/github-light.png',
      alt: 'github',
    },
    {
      href: 'https://www.linkedin.com/in/benson-jing-40777a230/',
      logo: '/icon/linkedin-light.png',
      alt: 'linkedin',
    },
  ];

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Benson Jing</h1>
      <div>
        <p className={styles.description}>
          Software Developer & Full-Stack Developer
          <br />
          Sophomore Student at University of California, Irvine
        </p>
      </div>
      <div className={styles.links}>
        <Link href='/resume.pdf' target='_blank' rel='noreferrer'>
          <a target='_blank' rel='noreferrer'>
            <button className={styles.button}>Resume</button>
          </a>
        </Link>
        {externalLinks.map((link) => (
          <ExternalLink {...link} key={link.href} />
        ))}
      </div>
    </section>
  );
}

function ExternalLink({ href, logo, alt }: LinkInfo) {
  return (
    <Link href={href}>
      <a target='_blank' rel='noreferrer'>
        <Image src={logo} alt={alt} width='24' height='24' />
      </a>
    </Link>
  );
}
