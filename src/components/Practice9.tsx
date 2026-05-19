// useContext
// App
// └── Parent
//      └── Child
//           └── GrandChild  ← 여기서 user 이름이 필요해

// <App user={user}>
//   <Parent user={user}>
//     <Child user={user}>
//       <GrandChild user={user} />  // 여기까지 계속 넘겨야 함
// 이걸 props 드릴링 이라함. 엄청 번거로움

import { createContext, useContext } from "react";

// 1. Context 만들기
interface User {
  name: string;
  age: number;
}
const UserContext = createContext<User | null>(null);

function Practice9() {
  const user = { name: "강티피", age: 31 };

  // 2. Provider로 감싸기 (여기서 value로 데이터를 넘겨요)
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  // user 데이터 필요없어요, 그냥 Child 렌더링만
  return <Child />;
}

function Child() {
  // user 데이터 필요없어요, 그냥 GrandChild 렌더링만
  return <GrandChild />;
}

function GrandChild() {
  // 여기서 useContext로 user 꺼내봐요!

  const user = useContext(UserContext);

  return (
    <div>
      <p>
        안녕하세요 {user?.name}님, {user?.age}살이시군요!
      </p>
    </div>
  );
}

export default Practice9;
