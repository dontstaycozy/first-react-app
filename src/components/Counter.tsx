import React, { useState } from "react";
import "../App.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Kirby Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;