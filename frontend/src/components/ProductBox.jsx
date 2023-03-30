import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Counter from "./Counter";
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

function ProductBox() {
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
      <div className="w-[400px]">
        <h1>{test.header}</h1>
        <h2>{test.price.toFixed(2)} € </h2>

        <h3>{color}</h3>
        <ul className="flex flex-row space-x-4 items-center justify-center">
          {test.colors.map((item, index) => {
            return (
              <li key={index}>
                <span
                  key={index}
                  data-color={item[0]}
                  className={`inline-block 
                bg-[${item[1]}] 
                rounded-xl 
                w-6 h-6 
                border-white border-2 
                ${item[0] === color ? "shadow-[0_0_0_1px_rgba(0,1,0,1)]" : ""}`}
                  onClick={changeColor}
                ></span>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-row space-x-4 items-center justify-center">
          {test.sizes.map((sizeElement, index) => {
            return (
              <li
                key={index}
                data-size={sizeElement}
                className={`inline-block bg-[${sizeElement}] ${
                  sizeElement === size ? "border-black border-b-2" : ""
                }  h-6 text-base`}
                onClick={changeSize}
              >
                {sizeElement}
              </li>
            );
          })}
        </ul>

        <Counter />

        <button className="bg-black text-white py-2 px-6 border-[1px] border-black hover:bg-white hover:text-black">
          ADD TO CARD
        </button>
        <menu>
          <DropdownText name="Details" />
          <DropdownText name="Sizing" />
        </menu>
      </div>
    </>
  );
}

export default ProductBox;
