import Link from 'next/link';
import Image from 'next/image';

import type { project } from './projects';
import styles from '../styles/Project.module.css';

export default function ProjectDetail({
  image,
  name,
  description,
  link,
  code,
}: project) {
  return (
    <article className={styles.detail}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.text}>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.link}>
          <Link href={link}>
            <a target='_blank' rel='noreferrer'>
              <Image
                src='/icon/external-link.svg'
                alt='live'
                width='24'
                height='24'
              />
            </a>
          </Link>
          <Link href={code}>
            <a target='_blank' rel='noreferrer'>
              <Image
                src='/icon/github-light.png'
                alt='code'
                width='24'
                height='24'
              />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}
