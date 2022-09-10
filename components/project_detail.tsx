import Link from 'next/link';
import Image from 'next/image';

import type { project } from './projects';

export default function ProjectDetail({
  image,
  name,
  description,
  link,
  code,
}: project) {
  return (
    <article>
      <Image src={image} alt={name} width='128' height='128' />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <Link href={link}>
            <a target='_blank' rel='noreferrer'>
              <Image
                src='/icon/external-link.svg'
                alt='live'
                width='16'
                height='16'
              />
            </a>
          </Link>
          <Link href={code}>
            <a target='_blank' rel='noreferrer'>
              <Image
                src='/icon/github-light.png'
                alt='code'
                width='16'
                height='16'
              />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}
