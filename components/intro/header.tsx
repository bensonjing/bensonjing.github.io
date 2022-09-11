import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav>
      <Link href='/'>
        <a>
          <Image src='/logo-light.svg' alt='logo' width='64' height='64' />
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
