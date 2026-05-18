import { useState, useEffect } from "react";

function Practice6() {
  interface User {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  // 컴포넌트가 처음 화면에 나타날 때 딱 한 번만
  // 아래 API를 호출해서 users에 저장해봐요
  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log("데이터 로딩 실패:", err));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Practice6;
