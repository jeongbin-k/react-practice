import { useContext, createContext, useState } from "react";
// Practice10.tsx
// 테마변경 (라이트, 다크모드)

interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<Theme | null>(null);

function Pracitce10() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  // useContext로 theme, setTheme 꺼내서
  // 버튼 누르면 light ↔ dark 토글
  // 현재 테마도 보여주기
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, setTheme } = context;

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "다크모드로" : "라이트모드로"}
      </button>
    </div>
  );
}

function Content() {
  // useContext로 theme 꺼내서
  // theme이 dark면 배경 검정 글자 흰색
  // theme이 light면 배경 흰색 글자 검정
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <p>현재테마는 {theme} 입니다.</p>
    </div>
  );
}

export default Pracitce10;
