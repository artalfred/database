import { useState } from "react";

export default function StateCounter() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setCount((prev) => prev - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>State Counter</h1>
      <h2>{count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
