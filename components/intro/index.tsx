import Nav from './nav';
import Main from './main';

import styles from '../../styles/Intro.module.css';

export default function Intro() {
  return (
    <header className={styles.container}>
      <Nav />
      <Main />
    </header>
  );
}
