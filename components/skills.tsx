import Image from 'next/image';

export default function Skills() {
  return (
    <div>
      <header>
        <h1>Skills</h1>
      </header>

      <section>
        <article>
          <h3>Languages</h3>
          <ul>
            <li>
              <Image
                src='/icon/python.svg'
                alt='python'
                width='32'
                height='32'
              />
              <p>Python</p>
            </li>
            <li>
              <Image src='/icon/c++.svg' alt='c++' width='32' height='32' />
              <p>C++</p>
            </li>
            <li>
              <Image src='/icon/html5.svg' alt='html5' width='32' height='32' />
              <p>HTML5</p>
            </li>
            <li>
              <Image src='/icon/css3.svg' alt='css3' width='32' height='32' />
              <p>CSS3</p>
            </li>
            <li>
              <Image src='/icon/js.svg' alt='js' width='32' height='32' />
              <p>JavaScript</p>
            </li>
            <li>
              <Image src='/icon/ts.svg' alt='ts' width='32' height='32' />
              <p>TypeScript</p>
            </li>
            <li>
              <Image src='/icon/java.svg' alt='java' width='32' height='32' />
              <p>Java</p>
            </li>
          </ul>
        </article>

        <article>
          <h3>Technologies</h3>
          <ul>
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
          <h3>Tools</h3>
          <ul>
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
      </section>
    </div>
  );
}
