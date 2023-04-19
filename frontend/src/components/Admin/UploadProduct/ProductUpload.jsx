import React from "react";
import ImageUpload from "./ImageUpload";
import SizingQuantityTableUpload from "./SizingQuantityTableUpload";

function ProductUpload() {
  return (
    <form action="#" className="flex flex-col w-6/12" autocomplete="off">
      <h1>UPLOAD PRODUCT</h1>
      <ImageUpload />
      <label for="name">Enter name:</label>
      <input type="text" id="name" className="border-2" placeholder="NAME" />
      <label for="price">Enter price (Euro €):</label>
      <input
        type="text"
        id="price"
        name="price"
        pattern="\d+(\.\d{2})?"
        placeholder="PRICE"
        className="border-2"
      />

      <label for="category">Enter category:</label>
      <select name="category" id="category" className="border-2">
        <option value="tees">Tees & Longsleeves</option>
        <option value="knitwear">Sweaters</option>
        <option value="top">Hoodies & Sweatshirts</option>
        <option value="outerwear">Outerwear</option>
        <option value="pants">Pants</option>
        <option value="shorts">Shorts</option>
        <option value="accessoires">Accessoires</option>
        <option value="footwear">Footwear</option>
        <option value="special">Special</option>
      </select>

      <label for="color">Enter colors:</label>
      <input id="color" type="text" className="border-2" placeholder="COLOR" />
      <SizingQuantityTableUpload />
      <input type="submit" className="border-2 bg-black text-white mt-5 p-2" />
    </form>
  );
}

export default ProductUpload;
