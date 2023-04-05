import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setCount("");
    } else if (!isNaN(inputValue)) {
      setCount(Number(inputValue));
    }
  };

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setCount(1);
    }
  };

  const increment = () => {
    setCount((prevCount) => {
      return prevCount < 9 ? ++prevCount : prevCount;
    });
  };
  const decrement = () => {
    setCount((prevCount) => {
      return prevCount > 1 ? --prevCount : prevCount;
    });
  };

  return (
    <>
      <div className="flex justify-center space-x-4 ">
        <button className="text-lg hover:scale-125" onClick={decrement}>
          -
        </button>
        <input
          value={count}
          type="text"
          className="w-10 h-10 text-center text-lg"
          min="1"
          max="9"
          maxLength={1}
          pattern="[1-9]"
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[^1-9]/g, "");
            handleChange(e);
          }}
          onBlur={handleBlur}
        ></input>
        <button className="text-lg hover:scale-125" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
