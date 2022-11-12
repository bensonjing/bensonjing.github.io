import Link from 'next/link';

import styles from '../styles/Blog.module.css';

export default function Posts({ posts }) {
  return (
    <div className={styles.posts}>
      <p className={styles.main_title}>RECENTLY PUBLISHED</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <Link href={`/blog/${post.id}`}>
              <div className={styles.post_link}>
                <h2 className={styles.post_title}>{post.title}</h2>
                <div className={styles.post_abstract}>{post.abstract}</div>
                <div>{post.introduction}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
