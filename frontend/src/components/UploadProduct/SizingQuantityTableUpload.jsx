import React, { useEffect } from "react";
import { useState, useRef } from "react";

function SizingQuantityTableUpload() {
  const [rows, setRows] = useState({});
  const quantityRef = useRef();

  const handleAddRow = (event) => {
    event.preventDefault();
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;

    if (size && quantity) {
      const newRows = { ...rows };
      newRows[size] = quantity;
      setRows(newRows);
    }
    quantityRef.current.value = "";
  };

  const handleRemoveRow = (event, key) => {
    event.preventDefault();
    const newRows = { ...rows };
    delete newRows[key];
    setRows(newRows);
  };

  return (
    <>
      <span>Sizing:</span>
      <table className="border border-black border-collapse">
        <thead className="border border-black border-collapse">
          <tr>
            <th className="p-2 border border-black border-collapse">
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
            <th className=" p-2 border border-black border-collapse">
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
                className="ml-auto order-2 border bg-black text-white px-2"
                onClick={handleAddRow}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(Object.entries(rows)).map(([index, [key, value]]) => (
            <tr key={index}>
              <td className="border border-black border-collapse">{key}</td>
              <td className="pl-3 border border-black border-collapse">
                <span>{value}</span>{" "}
                <button
                  className="float-right"
                  onClick={(event) => handleRemoveRow(event, key)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SizingQuantityTableUpload;
