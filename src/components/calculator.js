/* eslint-disable no-eval */
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <input className="display" type="text" value={input} readOnly />
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button className="operator" onClick={() => handleButtonClick("/")}>
              /
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button className="operator" onClick={() => handleButtonClick("*")}>
              *
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button className="operator" onClick={() => handleButtonClick("-")}>
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleCalculate()}>=</button>
            <button className="clear" onClick={() => handleClear()}>
              C
            </button>
            <button className="operator" onClick={() => handleButtonClick("+")}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
