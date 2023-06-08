import React from "react";
import { useState, useRef } from "react";
import ImageUpload from "../components/Admin/UploadProduct/ImageUpload";
import SizingQuantityTableUpload from "../components/Admin/UploadProduct/SizingQuantityTableUpload";

const EditProduct = () => {
  const [name, setName] = useState("Name");
  const [price, setPrice] = useState("12.30");
  const [category, setCategory] = useState("tees");

  const [quantityRows, setQuantityRows] = useState({ hallo: ["wdf", 23432] });
  const quantityRef = useRef();

  const handleAddRow = (event) => {
    event.preventDefault();
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;

    if (size && quantity && color) {
      const newRows = { ...quantityRows };
      newRows[color] = [size, quantity];
      setQuantityRows(newRows);
    }
    quantityRef.current.value = "";
  };

  const handleRemoveRow = (event, key) => {
    event.preventDefault();
    const newRows = { ...quantityRows };
    delete newRows[key];
    setQuantityRows(newRows);
  };
  return (
    <form action="#" className="flex w-6/12 flex-col" autocomplete="off">
      <h1>UPLOAD PRODUCT</h1>
      <ImageUpload />
      <label for="name">Enter name:</label>
      <input
        type="text"
        id="name"
        className="border-2"
        placeholder="NAME"
        value={name}
      />
      <label for="price">Enter price (Euro €):</label>
      <input
        type="text"
        id="price"
        name="price"
        pattern="\d+(\.\d{2})?"
        placeholder="PRICE"
        className="border-2"
        value={price}
      />

      <label for="category">Enter category:</label>
      <select
        name="category"
        id="category"
        className="border-2"
        value={category}
      >
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

      <p>Edit quantity:</p>
      <table className="border-collapse border border-black">
        <thead className="border-collapse border border-black">
          <tr>
            <th className="border-collapse border border-black p-2">
              <label className="mr-3" htmlFor="quantity">
                Enter color:
              </label>
              <input
                id="color"
                className="border-2"
                placeholder="COLOR"
                type="text"
              />
            </th>
            <th className="border-collapse border border-black p-2">
              <label className="mr-3" htmlFor="size">
                Enter size:
              </label>
              <select name="size" id="size" className="border-2">
                <option value="ONESIZE">One Size</option>
                <optgroup label="Sizes">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </optgroup>
              </select>
            </th>
            <th className=" border-collapse border border-black p-2">
              <label className="mr-3" htmlFor="quantity">
                Enter quantity:
              </label>
              <input
                id="quantity"
                className="border-2"
                placeholder="QUANTITY"
                type="number"
                ref={quantityRef}
              />
              <button
                className="order-2 ml-auto border bg-black px-2 text-white"
                onClick={handleAddRow}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(Object.entries(quantityRows)).map(
            ([index, [key, value]]) => (
              <tr key={index}>
                <td className="border-collapse border border-black"> {key}</td>
                <td className="border-collapse border border-black">
                  {value[0]}
                </td>
                <td className="border-collapse border border-black pl-3">
                  <span>{value[1]}</span>{" "}
                  <button
                    className="float-right"
                    onClick={(event) => handleRemoveRow(event, key)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <input type="submit" className="mt-5 border-2 bg-black p-2 text-white" />
    </form>
  );
};

export default EditProduct;