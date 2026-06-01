import { useParams } from "react-router-dom";
import { useState, useEffect, use } from "react";

interface Post {
  id: number;
  title: string;
  body: string; // 게시글 내용
}

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  // https://jsonplaceholder.typicode.com/posts/${id}
  // id로 게시글 하나만 불러오기
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("404 에러");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]); // id 바뀔 때마다 실행

  if (loading) return <p>로딩 중...</p>;
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
export default PostDetail;
