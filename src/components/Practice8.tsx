import { useState, useEffect } from "react";

function Practice8() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return; // 실행중 아니면 그냥 종료

    const timer = setInterval(() => {
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
