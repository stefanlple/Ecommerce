import React from "react";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => {
      if (prevCount < 9) return ++prevCount;
    });
  };
  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) return --prevCount;
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
          maxlength="1"
          pattern="\d*"
          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
        ></input>
        <button className="text-lg hover:scale-125" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
