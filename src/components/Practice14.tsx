// Practice14.tsx
// useCallback
import { useState, useCallback } from "react";

function Practice14() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallbact으로 감싸봐요
  // count가 바뀔 때만 함수가 새로 만들어져야 해요
  const handleClick = () => {
    console.log("현재 카운트:", count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>count 출력</button>
      <button onClick={() => setCount(count + 1)}> + 1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Practice14;
