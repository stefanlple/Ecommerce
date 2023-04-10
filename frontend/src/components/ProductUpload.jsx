import React from "react";

function ProductUpload() {
  return (
    <form action="#" className="flex flex-col">
      <h1>UPLOAD PRODUCT</h1>
      <label for="name">Enter name:</label>
      <input type="text" id="name" className="border-2" placeholder="NAME" />
      <label for="currency">Enter currency:</label>
      <input
        type="text"
        id="currency"
        name="currency"
        pattern="(€|\$)\d+(\.\d{2})?"
        placeholder="PRICE"
        required
      />
      <label for="category">Enter category:</label>
      <input
        type="text"
        className="border-2"
        id="category"
        placeholder="CATEGORY"
      />
      <label for="size">Enter currency:</label>
      <input type="text" id="size" className="border-2" placeholder="SIZE" />
      <label for="color">Enter colors:</label>
      <input type="text" className="border-2" placeholder="COLOR" />
      <label for="img">Enter images:</label>
      <input
        type="file"
        id="img"
        name="filesfield"
        className="border-2"
        multiple
      />
      <input type="submit" className="border-2" />
    </form>
  );
}

export default ProductUpload;
