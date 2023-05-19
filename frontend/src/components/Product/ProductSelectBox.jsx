import React from "react";
import { useState } from "react";
import Counter from "../Counter";
import DropdownText from "./DropdownText";

const test = {
  header: "Camera",
  price: 18.3,
  colors: [
    ["Red", "#FF0000"],
    ["Green", "#00FF00"],
    ["Blue", "#0000FF"],
  ],
  sizes: ["S", "M", "XL"],
};

function ProductSelectBox() {
  const [color, setColor] = useState(test.colors[0][0]);
  const [size, setSize] = useState(test.sizes[0]);

  const changeColor = (event) => {
    setColor(event.target.dataset.color);
  };

  const changeSize = (event) => {
    setSize(event.target.dataset.size);
  };

  return (
    <>
      <h3>{color}</h3>
      <ul className="flex flex-row items-center justify-center space-x-4">
        {test.colors.map((item, index) => {
          return (
            <li key={index}>
              <span
                key={index}
                data-color={item[0]}
                className={`inline-block 
                bg-[${item[1]}] 
                h-6 
                w-6 rounded-xl 
                border-2 border-white 
                ${item[0] === color ? "shadow-[0_0_0_1px_rgba(0,1,0,1)]" : ""}`}
                onClick={changeColor}
              ></span>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-row items-center justify-center space-x-4">
        {test.sizes.map((sizeElement, index) => {
          return (
            <li
              key={index}
              data-size={sizeElement}
              className={`inline-block bg-[${sizeElement}] ${
                sizeElement === size ? "border-b-2 border-black" : ""
              }  h-6 text-base`}
              onClick={changeSize}
            >
              {sizeElement}
            </li>
          );
        })}
      </ul>

      <Counter />

      <button className="border-[1px] border-black bg-black py-2 px-6 text-white hover:bg-white hover:text-black">
        ADD TO CARD
      </button>
    </>
  );
}

export default ProductSelectBox;
