import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const handleCount = (operation) => {
    if (operation === "-") return setCount(count - 1);
    if (operation === "+") return setCount(count + 1);
    if (operation === "rs") return setCount(0);
  };
  return (
    <div>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => handleCount("-")}>-</button>
      </div>
      <button onClick={() => handleCount("rs")}>reset</button>
    </div>
  );
}
