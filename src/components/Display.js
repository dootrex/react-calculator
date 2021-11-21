import React from "react";

export default function Display({ result }) {
  return (
    <div
      style={{
        width: "600px",
        border: "1px solid black",
        textAlign: "right",
      }}
    >
      {result}
    </div>
  );
}
