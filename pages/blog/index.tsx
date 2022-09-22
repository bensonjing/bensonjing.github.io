import { getPosts } from '../../lib/posts';
import Nav from '../../components/intro/nav';
import Posts from '../../components/posts';
import Categories from '../../components/categories';

export default function Blog({ posts }) {
  return (
    <>
      <Nav />
      <div>
        <Posts posts={posts} />
        <Categories />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
