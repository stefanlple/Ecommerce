import React from "react";

function UploadProduct() {
  return (
    <form action="#" className="flex flex-col">
      <h1>UPLOAD PRODUCT</h1>
      <input type="text" className="border-2" placeholder="NAME" />
      <input type="number" className="border-2" name="price" id="" />
      <input type="text" className="border-2" placeholder="CATEGORY" />
      <input type="text" className="border-2" placeholder="SIZE" />
      <input type="text" className="border-2" placeholder="COLOR" />
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        className="border-2"
      />
      <input type="submit" className="border-2" />
    </form>
  );
}

export default UploadProduct;
