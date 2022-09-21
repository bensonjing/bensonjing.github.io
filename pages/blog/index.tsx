import { getPosts } from '../../lib/posts';

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.abstract}</div>
          <div>{post.date}</div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
