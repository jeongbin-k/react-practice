// Practice13.tsx
// useMemo - 무거운 계산 최적화

import { useState, useMemo } from "react";

function Practice13() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1~ count 까지 더하는 무거운 계산
  const total = useMemo(() => {
    console.log("계산 실행됨!");
    // 여기에 1부터 count 까지 더하는 로직 작성
    return Array.from({ length: count }, (_, i) => i + 1).reduce(
      (acc, cur) => acc + cur,
      0,
    );
  }, [count]);
  return (
    <div>
      <h1>합계:{total}</h1>
      <button onClick={() => setCount(count + 1)}>count +1 ({count})</button>
    </div>
  );
}

export default Practice13;
