import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Counter from "../Counter";

import { addToCart } from "../../features/cart/cartSlice";
import Spinner from "../Spinner";

function ProductSelectBoxWrapper({ options, productId }) {
  const renderOptions = transformOptions(options);

  const dispatch = useDispatch();

  const { isLoading, isError, message } = useSelector((state) => state.cart);

  const [color, setColor] = useState(renderOptions.colors[0][0]);
  const [size, setSize] = useState(renderOptions.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [message, isError]);

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

    dispatch(addToCart(data));
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductSelectBox
          renderOptions={renderOptions}
          color={color}
          size={size}
          quantity={quantity}
          onColorChange={changeColor}
          onSizeChange={changeSize}
          onCountChange={handleCountChange}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

function ProductSelectBox({
  renderOptions,
  color,
  size,
  quantity,
  onColorChange,
  onSizeChange,
  onCountChange,
  onAddToCart,
}) {
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
                onClick={onColorChange}
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
              onClick={onSizeChange}
            >
              {sizeElement}
            </li>
          );
        })}
      </ul>

      <Counter value={quantity} onCountChange={onCountChange} />

      <button
        className="border-[1px] border-black bg-black py-2 px-6 text-white hover:bg-white hover:text-black"
        onClick={onAddToCart}
      >
        ADD TO CART
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

export default ProductSelectBoxWrapper;
