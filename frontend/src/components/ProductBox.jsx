import React from "react";
import { useState } from "react";
import Counter from "./Counter";
const test = {
  header: "Puffer Jacket",
  price: 18.3,
  colors: [
    ["Red", "#FF0000"],
    ["Green", "#00FF00"],
    ["Blue", "#0000FF"],
  ],
  sizes: ["S", "M", "XL"],
};

function ProductBox() {
  const [color, setColor] = useState(test.colors[0][0]);
  const changeColor = (event) => {
    setColor(event.target.dataset.color);
  };

  return (
    <>
      <h1>{test.header}</h1>
      <h2>{test.price.toFixed(2)} € </h2>

      <h3>{color}</h3>
      <ul className="flex flex-row space-x-4 items-center justify-center">
        {test.colors.map((item, index) => {
          return (
            <li
              key={index}
              data-color={item[0]}
              className={`bg-[${item[1]}]`}
              onClick={changeColor}
            >
              {item[0]}
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-row space-x-4 items-center justify-center">
        {test.sizes.map((size, index) => {
          return (
            <li key={index} className={`bg-[${size}]`}>
              {size}
            </li>
          );
        })}
      </ul>

      <Counter />
      <button className="bg-black text-white py-2 px-6 border-[1px] border-black hover:bg-white hover:text-black">
        ADD TO CARD
      </button>
    </>
  );
}

export default ProductBox;
