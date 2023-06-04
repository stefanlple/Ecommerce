import React from "react";
import DropdownText from "./DropdownText";

function ProductDescriptionBox({ name, price, description }) {
  return (
    <>
      <div className="text-left">
        <h1>{name}</h1>
        <h2>{price.toFixed(2)} € </h2>
        <menu>
          <DropdownText name="Details" description={description} />
        </menu>
      </div>
    </>
  );
}

export default ProductDescriptionBox;
