export default function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://benson-blog-api.herokuapp.com/api/posts');
  const posts = await res.json();
  return { props: { posts } };
}
