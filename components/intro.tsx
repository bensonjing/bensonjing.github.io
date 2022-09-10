import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section>
      <Header />
      <Main />
    </section>
  );
}

function Header() {
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
        <a>Blog</a>
      </Link>
    </nav>
  );
}

function Main() {
  return (
    <section>
      <h1>Benson Jing</h1>
      <div>
        <p>
          Software Developer & Full-Stack Developer
          <br />
          Sophomore Student at University of California, Irvine
        </p>
      </div>
    </section>
  );
}
