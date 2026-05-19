import { useState, useEffect } from "react";

function Practice8() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      // console.log 대신 여기서 count를 올리면 됨
      // 근데 setCount 안에서 count를 쓸 떄 주의할게 있음
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "멈춤" : "시작"}
      </button>
    </div>
  );
}

export default Practice8;
