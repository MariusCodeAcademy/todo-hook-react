import React, { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";

function App() {
  const counterData = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3, isSpecial: true },
    { id: 4, value: 4 },
  ];
  const [counters, setCounters] = useState(counterData);

  const handleCount = (counterToEditId, operation) => {
    console.log("counter with id", counterToEditId, "operation", operation);

    const countersCopy = [...counters];

    const foundCounterToEdit = countersCopy.find(
      (c) => c.id === counterToEditId
    ); // foundCounterToEdit === { id: 2, value: 2 }

    const count = foundCounterToEdit.value;
    const difference = foundCounterToEdit.isSpecial ? 2 : 1;
    const countFix = isNaN(count) ? 0 : count;

    if (operation === "-") foundCounterToEdit.value = countFix - difference;
    if (operation === "+") foundCounterToEdit.value = countFix + difference;
    if (operation === "rs") {
      foundCounterToEdit.value = foundCounterToEdit.isSpecial
        ? "start over"
        : 0;
    }
    setCounters(countersCopy);
  };

  const resetCounters = () => {
    const countersAfterReset = counters.map((c) => ({
      ...c,
      value: c.isSpecial ? "start over" : 0,
    }));
    console.log("countersAfterReset", countersAfterReset);
    setCounters(countersAfterReset);
  };

  return (
    <div className="App">
      <div className="d-flex">
        {counters.map((c) => (
          <Counter
            onHandleCount={handleCount}
            item={c}
            key={c.id}
            special={c.isSpecial}
          />
        ))}
      </div>
      <button onClick={resetCounters}>ResetAll</button>
    </div>
  );
}

export default App;
