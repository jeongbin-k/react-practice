import { useState, useEffect } from "react";

function Practice5() {
  const [count, setCout] = useState(0);
  const [name, setName] = useState("");

  // count가 바뀔 때만 콘솔에 "count 변경: 숫자" 출력
  useEffect(() => {
    console.log("count 변경:", count);
  }, [count]);
  // name이 바뀔 때만 콘솔에 "name 변경: 문자" 출력
  useEffect(() => {
    console.log("name변경:", name);
  }, [name]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCout(count + 1)}>+1</button>
      <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      ></input>
    </div>
  );
}

export default Practice5;
