import { useRef } from "react";

function Practice16() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    // 조건
    // 아이디가 4글자 미만이면 아이디에 input 포커스
    // 비밀번호가 6글자 미만이면 비밀번호에 input 포커스
    // 둘 다 통과하면 콘솔에 "로그인 성공!" 츌력
    if ((idRef.current?.value.length ?? 0) < 4) {
      idRef.current?.focus();
      return;
    }
    if ((pwRef.current?.value.length ?? 0) < 6) {
      pwRef.current?.focus();
      return;
    }
    console.log("로그인 성공!");
  };
  return (
    <div>
      <input ref={idRef} type="text" placeholder="아이디 (4글자 이상)" />
      <input ref={pwRef} type="password" placeholder="비밀번호 (6글자 이상)" />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Practice16;
