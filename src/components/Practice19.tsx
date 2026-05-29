// Practice19.tsx
// 검색 기능 - useState + useMemo
import { useState, useEffect, useMemo } from "react";
interface Post {
  id: number;
  title: string;
}

export default function Practice19() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // https://jsonplaceholder.typicode.com/posts?_limit=20
  // 게시글 20개 불러오기
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
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

  // useMemo로 검색어에 맞는 게시글만 필터링
  // search가 포함된 title만 필터링해봐요
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.includes(search));
  }, [posts, search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}
