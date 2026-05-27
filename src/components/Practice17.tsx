import { useState, useEffect } from "react";

function Practice17() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 아래 URL로 fetch 해봐요
    // 일부러 틀린 URL이에요 → 에러 처리 확인용
    // https://jsonplaceholder.typicode.com/users/9999
    fetch("https://jsonplaceholder.typicode.com/users/9999")
      .then((res) => {
        if (!res.ok) throw new Error("404 에러!"); // 수동으로 에러 던지기
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false); // 성공하면 로딩 끝
      })
      .catch((err) => {
        setError(err); // 에러나면 여기서 잡음
        setLoading(false); // 에러나도 로딩 끝
      });
  }, []);

  // 로딩중일 때
  // 에러났을 때
  // 데이터 있을 때
  // 세 가지 상황을 화면에 보여줘요
  if (loading) return <p>로딩중</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return <p>{data}</p>;
}

export default Practice17;
