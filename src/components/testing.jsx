import React, { Component } from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} style={{ padding:"20px", border: "none", marginTop: "50px", borderRadius: "30px", background: "#ff9a8a" }}>
      You pressed me {count} times
    </button>
  );
}
