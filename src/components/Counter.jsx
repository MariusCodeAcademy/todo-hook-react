import React from "react";

// controlled component
export default function Counter({ special, item, onHandleCount }) {
  const handleDisabled = () => {
    //   if (special && count === 0) return true;
    //   if (count === "start over") return true;
    return false;
  };
  return (
    <div style={{ width: "25%" }}>
      <h2>{special && "Special "}Counter</h2>
      <h2>{item.value}</h2>
      <div>
        <button onClick={() => onHandleCount(item.id, "+")}>
          {special && "2"}+
        </button>
        <button
          disabled={handleDisabled()}
          onClick={() => onHandleCount(item.id, "-")}
        >
          {special && "2"}-
        </button>
      </div>
      <button onClick={() => onHandleCount(item.id, "rs")}>reset</button>
    </div>
  );
}
