import Link from 'next/link';

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
    <div>
      <h2>CATEGORIES</h2>
      <ul>
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
      <a>{name}</a>
    </Link>
  );
}
