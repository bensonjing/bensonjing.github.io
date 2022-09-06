import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch("https://benson-blog-api.herokuapp.com/api/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

  return (
    <div id="blog">
      <h2>Blog</h2>
      {posts.map((post) => (
        <Link key={post._id} to={`/posts/${post._id}`}>
          <div>{post.title}</div>
          <button>View Post</button>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
