import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Intro.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={styles.logo}>
          <Image
            src='/logo-light.svg'
            alt='logo'
            width='64'
            height='64'
            layout='fixed'
          />
        </a>
      </Link>
      <Link href='#skills'>
        <a>Skills</a>
      </Link>
      <Link href='#projects'>
        <a>Projects</a>
      </Link>
      <Link href='/blog'>
        <a target='_blank' rel='noreferrer'>
          Blog
        </a>
      </Link>
    </nav>
  );
}
