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

// 현재 예제에서는 차이가 눈에 안보임
// 자식 컴포넌트에 함수를 props로 넘길때
{
  /* <ChildComponents onClick ={handleClick} /> */
}

// 부모가 리렌더링될 때마다 handleClick이 새로 만들어지면 자식도 계속 리렌더링됨
// -> 하지만, useCallback으로 감싸면 불필요한 리렌더링을 막을 수 있음.
