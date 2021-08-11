import React from "react";

export default function Counter(props) {
  return (
    <div>
      <h2>Counter</h2>
      <h2>0</h2>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
      <button>reset</button>
    </div>
  );
}
