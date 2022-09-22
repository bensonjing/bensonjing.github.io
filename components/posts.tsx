export default function Posts({ posts }) {
  return (
    <ul>
      <h2>RECENTLY PUBLISHED</h2>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.abstract}</div>
          <div>{post.introduction}</div>
        </li>
      ))}
    </ul>
  );
}
