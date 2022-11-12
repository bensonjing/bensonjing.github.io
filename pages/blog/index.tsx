import { getPosts } from '../../lib/posts';
import Nav from '../../components/intro/nav';
import Posts from '../../components/posts';
import Categories from '../../components/categories';

import styles from '../../styles/Blog.module.css';

export default function Blog({ posts }) {
  return (
    <>
      <div className={styles.container}>
        <Nav />
      </div>
      <div className={styles.main}>
        <Posts posts={posts} />
        <Categories />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return { props: { posts } };
}
