import React from "react";
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

function ProductDescriptionBox() {
  return (
    <>
      <div className="w-[400px]">
        <h1>{test.header}</h1>
        <h2>{test.price.toFixed(2)} € </h2>
        <menu>
          <DropdownText name="Details" />
          <DropdownText name="Sizing" />
        </menu>
      </div>
    </>
  );
}

export default ProductDescriptionBox;
