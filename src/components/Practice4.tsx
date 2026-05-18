import { useState, useEffect } from "react";

function Practice4() {
  const [count, setCount] = useState(0);

  // useEffcet " 어떤 일이 생겼을때 자동으로 실행되는 함수"
  // count가 바뀔 때마다 콘솔에 출력되게 만들어봐요.
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}

export default Practice4;
