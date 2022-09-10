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
        <a target='_blank' rel='noreferrer'>
          Blog
        </a>
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
      <div>
        <Link href='/resume.pdf' target='_blank' rel='noreferrer'>
          <a target='_blank' rel='noreferrer'>
            <button>Resume</button>
          </a>
        </Link>
        <Link href='mailto:bensonjing@icloud.com'>
          <a>
            <Image
              src='/icon/email-light.png'
              alt='email'
              width='32'
              height='32'
            />
          </a>
        </Link>
        <Link href='https://github.com/bensonjing/'>
          <a target='_blank' rel='noreferrer'>
            <Image
              src='/icon/github-light.png'
              alt='github'
              width='32'
              height='32'
            />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/benson-jing-40777a230/'>
          <a target='_blank' rel='noreferrer'>
            <Image
              src='/icon/linkedin-light.png'
              alt='linkedin'
              width='32'
              height='32'
            />
          </a>
        </Link>
      </div>
    </section>
  );
}
