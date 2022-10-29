import Link from 'next/link';

import styles from '../styles/Blog.module.css';

export default function Categories() {
  const categories = [
    {
      name: 'WebDev',
      href: '#',
    },
    {
      name: 'Finance',
      href: '#',
    },
    {
      name: 'Science',
      href: '#',
    },
  ];

  return (
    <div className={styles.categories}>
      <p className={styles.main_title}>CATEGORIES</p>
      <ul className={styles.categories_titles}>
        {categories.map((category) => (
          <li key={category.name}>
            <CategoryLink name={category.name} href={category.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryLink({ name, href }) {
  return (
    <Link href={href}>
      <a className={styles.category}>{name}</a>
    </Link>
  );
}
