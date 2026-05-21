// Practice11.tsx
// 커스텀 훅 - useFetch
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}

function Practice11() {
  const { data, loading } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  return (
    <div>
      {/* 유저 목록 보여주기 */}
      {loading && <p>로딩중....</p>}
      {data && data.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

// 커스텀 훅 만들기
function useFetch<T>(url: string) {
  // Practice6에서 했던 fetch 로직을 여기에 넣어봐요
  // data, loading 두 가지 state가 필요해요
  // loading이 true면 "로딩중..." 보여주고
  // data 있으면 반환해요
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  return { data, loading };
}

export default Practice11;
