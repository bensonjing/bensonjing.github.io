import Nav from './nav';
import Main from './main';
import Model from './model';
import styles from '../../styles/Intro.module.css';

export default function Intro() {
  return (
    <header className={styles.container}>
      <Nav />
      <div className={styles.intro}>
        <Main />
        <Model />
      </div>
    </header>
  );
}
