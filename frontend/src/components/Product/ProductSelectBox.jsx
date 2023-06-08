import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Counter from "../Counter";

import { addToCart } from "../../features/cart/cartService";

function ProductSelectBox({ options, productId }) {
  const renderOptions = transformOptions(options);

  const { user } = useSelector((state) => state.auth);

  const [color, setColor] = useState(renderOptions.colors[0][0]);
  const [size, setSize] = useState(renderOptions.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const changeColor = (event) => {
    setColor(event.target.dataset.color);
  };

  const changeSize = (event) => {
    setSize(event.target.dataset.size);
  };

  const handleCountChange = (newCount) => {
    setQuantity(newCount);
  };

  const handleAddToCart = async () => {
    const data = {
      productId,
      color,
      sizes: {
        size,
        quantity,
      },
    };
    try {
      await addToCart(user.token, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>{color}</h3>
      <ul className="flex flex-row items-center justify-center space-x-4">
        {renderOptions.colors.map((item, index) => {
          return (
            <li key={index}>
              <span
                key={index}
                style={{ backgroundColor: item[1] }}
                data-color={item[0]}
                className={`inline-block 
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
        {renderOptions.sizes.map((sizeElement, index) => {
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

      <Counter value={quantity} onCountChange={handleCountChange} />

      <button
        className="border-[1px] border-black bg-black py-2 px-6 text-white hover:bg-white hover:text-black"
        onClick={handleAddToCart}
      >
        ADD TO CARD
      </button>
    </>
  );
}

function transformOptions(options) {
  const res = {
    colors: [],
    sizes: [],
  };

  for (const option of options) {
    const { color, sizes } = option;
    const { colorname, colorhex } = color;

    if (
      !res.colors.some(([name, hex]) => name === colorname && hex === colorhex)
    ) {
      res.colors.push([colorname, colorhex]);
    }

    for (const sizeObj of sizes) {
      const { size } = sizeObj;
      if (!res.sizes.includes(size)) {
        res.sizes.push(size);
      }
    }
  }

  return res;
}

export default ProductSelectBox;
