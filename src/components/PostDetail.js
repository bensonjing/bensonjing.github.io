import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comments from "./Comments";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({ author: {} });

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    fetch(`https://benson-blog-api.herokuapp.com/api/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.author.username}</div>
      <div>{post.content}</div>
      <Comments id={postId} />
    </div>
  );
}

export default PostDetail;
