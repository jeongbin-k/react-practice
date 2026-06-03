import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  // https://jsonplaceholder.typicode.com/posts?_limit=10
  // 위 URL로 게시글 10개 불러오기
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("404 에러");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const filteredPost = useMemo(() => {
    return posts.filter((post) => post.title.includes(search));
  }, [posts, search]);

  // 로딩중, 에러 처리
  if (loading) return <p>로딩 중..</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력해주세요."
      />
      {filteredPost.map((post) => (
        <p key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
          {post.title}
        </p>
      ))}
    </div>
  );
}

export default Posts;
