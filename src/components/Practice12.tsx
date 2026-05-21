// Practice12.tsx
// 장바구니 - useReducer
import { useReducer } from "react";

type Action = { type: "ADD" } | { type: "REMOVE" } | { type: "RESET" };

function reducer(state: number, action: Action) {
  // action.type에 따라 state를 바꿔줘요
  // ADD → +1
  // REMOVE → -1 (0 아래로 안 내려가야 해요)
  // RESET → 0
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "REMOVE":
      return state > 0 ? state - 1 : 0;
    case "RESET":
      return 0;
  }
}

function Practice12() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>추가</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>삭제</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </div>
  );
}

export default Practice12;
