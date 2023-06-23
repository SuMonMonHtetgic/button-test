import React, { Component } from 'react';
import { useState, useEffect } from 'react';

export default function StateTesting() {
    const [color, setColor] = useState("red");
  
    useEffect(() => {
      setColor("blue"); // State update inside useEffect
    }, []);
  
    return (
      <h1>My favorite color is {color}!</h1>
    );
  }
  