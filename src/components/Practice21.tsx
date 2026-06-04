// Practice21.tsx
// react-hook-form 로그인 폼

import { Form, useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

function Practice21() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("로그인 데이터", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "이메일 형식이 아닙니다",
            },
          })}
          placeholder="이메일"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 6,
              message: "비밀번호는 6자리 이상이어야 해요",
            },
          })}
          placeholder="비밀번호"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Practice21;
