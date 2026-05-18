import { useEffect, useState } from "react";
// useEffect의 cleanup
// 컴포넌트가 화면에서 사라질 때 뭔가 정리해야 할 때
// 예를 들어 타이머, 웹소켓 연결 이런 거 컴포넌트 없어질 때 안 끊으면 메모리 낭비

function Practice7() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "숨기기" : "보이기"}
      </button>
      {show && <Timer />}
    </div>
  );
}
function Timer() {
  // 1초마다 콘솔에 "tick" 출력하는 타이머를 만들어봐요
  // 근데 Timer가 사라질 때 타이머도 같이 멈춰야 해요

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("tick");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>타이머 실행중...</p>;
}

export default Practice7;
