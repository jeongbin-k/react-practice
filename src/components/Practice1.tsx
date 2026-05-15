import { useState } from "react";

function CartItem() {
  // 수량을 관리하는 state를 만들어보세요.
  // 수량은 최소 1개 이상이어야 해요.
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((amount) => amount + 1);
  };

  const decrease = () => {
    if (amount === 1) return;
    setAmount((amount) => amount - 1);
  };

  return (
    <div>
      <h5>{amount}</h5>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default CartItem;
