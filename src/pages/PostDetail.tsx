import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string; // 게시글
}
function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  // https://jsonplaceholder.typicode.com/posts/${id}
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("404에러");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
export default PostDetail;
