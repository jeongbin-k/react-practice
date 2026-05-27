import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
}

function Practice18() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectId] = useState<number | null>(null);

  // https://jsonplaceholder.typicode.com/posts?_limit=10
  // 위 URL로 게시글 10개 불러오기
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
      if (!res.ok) throw new Error("404 에러!");
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

  // 로딩중, 에러 처리
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  return (
    <div>
      {/* 게시글 목록 — 클릭하면 selectedId 바뀌게 */}
      {/* selectedId 있으면 "선택된 게시글 ID: {selectedId}" 보여주기 */}
      {posts.map((post) => (
        <div key={post.id} onClick={() => setSelectId(post.id)}>
          <p>{post.title}</p>
        </div>
      ))}
      {selectedId && <p>선택된 게시글 ID: {selectedId}</p>}
    </div>
  );
}

export default Practice18;
