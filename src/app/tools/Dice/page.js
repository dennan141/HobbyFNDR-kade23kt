"use client";

import { useState } from "react";

export default function DicePage() {


  const [diceValue, setDiceValue] = useState("...")

  const RollDice = () => {
    const newValue = GetRandomDiceValue();
    setDiceValue(newValue)
  };

  return (
    <>
      <h2>Dice game</h2>
      <p>{diceValue}</p>
      <div>
        <button onClick={RollDice}>Roll Dice</button>
      </div>
    </>
  );
}

function GetRandomDiceValue() {
  return Math.ceil(Math.random() * 6);
}
