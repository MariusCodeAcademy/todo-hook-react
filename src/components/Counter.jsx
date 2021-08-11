import React, { useState } from "react";

export default function Counter({ special, item }) {
  const [count, setCount] = useState(0);
  const handleCount = (operation) => {
    const difference = special ? 2 : 1;
    const countFix = isNaN(count) ? 0 : count;

    if (operation === "-") return setCount(countFix - difference);
    if (operation === "+") return setCount(countFix + difference);
    if (operation === "rs")
      return special ? setCount("start over") : setCount(0);
  };
  const handleDisabled = () => {
    if (special && count === 0) return true;
    if (count === "start over") return true;
  };
  return (
    <div style={{ width: "25%" }}>
      <h2>{special && "Special "}Counter</h2>
      <h2>{item.value}</h2>
      <div>
        <button onClick={() => handleCount("+")}>{special && "2"}+</button>
        <button disabled={handleDisabled()} onClick={() => handleCount("-")}>
          {special && "2"}-
        </button>
      </div>
      <button onClick={() => handleCount("rs")}>reset</button>
    </div>
  );
}
