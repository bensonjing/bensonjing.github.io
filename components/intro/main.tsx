import Link from 'next/link';
import Image from 'next/image';

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
        <Image src={logo} alt={alt} width='32' height='32' />
      </a>
    </Link>
  );
}
