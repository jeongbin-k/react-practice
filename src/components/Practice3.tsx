import { useState } from "react";

function CartItem() {
  // 이 세 상품을 화면에 뿌리고, 각각 수량 조절이 되게 만들어봐요.
  const products = [
    { id: 1, name: "맥북", price: 2000000 },
    { id: 2, name: "아이패드", price: 800000 },
    { id: 3, name: "에어팟", price: 200000 },
  ];

  // 상품 id별로 객체를 관리
  const [amount, setAmount] = useState({ 1: 0, 2: 0, 3: 0 });

  // id = 어떤 상품인지 받음
  // prev = 현재 amount 객체 전체 {1:1, 2:1, 3:1}
  // ...prev 기존 객체 그대로 복사
  // [id]: prev[id] + 1 해당 id 수량만 +1
  const increase = (id) => {
    setAmount((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrease = (id) => {
    if (amount[id] === 0) return;
    setAmount((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  // 전체 금액
  const total = products.reduce((acc, products) => {
    return acc + products.price * amount[products.id];
  }, 0);
  return (
    <div>
      {products.map((products) => (
        <div key={products.id}>
          {/* 상품명 */}
          <p>{products.name}</p>
          {/* 가격 */}
          <span>{products.price}</span>
          {/* 해당수량 */}
          <h5>{amount[products.id]}</h5>
          <button onClick={() => decrease(products.id)}>-</button>
          <button onClick={() => increase(products.id)}>+</button>
        </div>
      ))}
      {/* 총금액 */}
      <h1>{total}</h1>
    </div>
  );
}

export default CartItem;
