// Practice15.tsx
// useRef

import { useEffect, useRef } from "react";

function Practice15() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" placeholder="여기에 포커스" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>포커스</button>
    </div>
  );
}

export default Practice15;
