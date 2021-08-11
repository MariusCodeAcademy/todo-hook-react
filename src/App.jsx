import React, { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";

function App() {
  const counterData = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ];
  const [counters, setCounters] = useState(counterData);
  return (
    <div className="App">
      <div className="d-flex">
        <Counter />
        <Counter />
        <Counter special />
      </div>
      <button>ResetAll</button>
    </div>
  );
}

export default App;
