// Practice20.tsx
// 페이지네이션

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

function Practice20() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // https://jsonplaceholder.typicode.com/posts?_page={page}&_limit=10
  // page가 바뀔 때마다 해당 페이지 데이터 불러오기

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => {
        if (!res.ok) throw new Error("404에러");
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
  }, [page]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return (
    <div>
      {/* 게시글 목록 */}
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      {/* 이전/다음 버튼 */}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        이전
      </button>
      <button onClick={() => setPage(page + 1)}>다음</button>
      {/* 현재 페이지 표시 */}
      <p>현재 페이지: {page}</p>
    </div>
  );
}

export default Practice20;
