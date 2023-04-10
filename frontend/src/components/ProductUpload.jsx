import React from "react";
import ImageUpload from "./ImageUpload";

function ProductUpload() {
  return (
    <form action="#" className="flex flex-col w-6/12">
      <h1>UPLOAD PRODUCT</h1>
      <ImageUpload />
      <label for="name">Enter name:</label>
      <input type="text" id="name" className="border-2" placeholder="NAME" />
      <label for="price">Enter price:</label>
      <input
        type="text"
        id="price"
        name="price"
        pattern="(€|\$)\d+(\.\d{2})?"
        placeholder="PRICE"
        className="border-2"
        required
      />

      <label for="category">Enter category:</label>
      <select name="category" id="category" className="border-2">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label for="color">Enter colors:</label>
      <input id="color" type="text" className="border-2" placeholder="COLOR" />

      <span>Sizing:</span>
      <table className="border border-black border-collapse">
        <thead className="border border-black border-collapse">
          <tr>
            <th className="border border-black border-collapse">
              <label for="size">Enter size:</label>
              <select name="size" id="size" className="border-2">
                <option value="onesize">One Size</option>
                <optgroup label="Sizes">
                  <option value="xxs">XXS</option>
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="xxl">XXL</option>
                </optgroup>
              </select>
            </th>
            <th className="border border-black border-collapse">
              <label for="quantity">Enter quantity:</label>
              <input
                type="text"
                id="quantity"
                className="border-2"
                placeholder="QUANTITY"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black border-collapse">1</td>
            <td className="border border-black border-collapse">2</td>
          </tr>
        </tbody>
      </table>

      <input type="submit" className="border-2 bg-black text-white mt-5 p-2" />
    </form>
  );
}

export default ProductUpload;
