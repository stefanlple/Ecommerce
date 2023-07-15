import React, { useRef } from "react";

function SizingQuantityTableUpload({ rows, setRows }) {
  const quantityRef = useRef();
  const colorRef = useRef();
  const colorhexRef = useRef();
  const sizeRef = useRef();

  const handleAddRow = (event) => {
    event.preventDefault();
    /* console.log(
      sizeRef.current.value,
      quantityRef.current.value,
      colorRef.current.value,
      colorhexRef.current.value
    ); */

    if (
      sizeRef.current.value &&
      quantityRef.current.value &&
      colorRef.current.value &&
      colorhexRef.current.value
    ) {
      const newRows = { ...rows };
      const key = `${sizeRef.current.value}-${colorRef.current.value}-${colorhexRef.current.value}`;
      newRows[key] = quantityRef.current.value;
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
      <table className="border-collapse border border-black">
        <thead className="border-collapse border border-black">
          <tr>
            <th className="border-collapse border border-black p-2">
              <label className="mr-3" htmlFor="size">
                Enter size:
              </label>
              <select name="size" id="size" className="border-2" ref={sizeRef}>
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

            <th className=" flex border-collapse flex-col border border-black p-2">
              <label className="mr-3" htmlFor="color">
                Enter color:
              </label>
              <input
                id="color"
                className="border-2"
                placeholder="COLOR"
                type="text"
                ref={colorRef}
              />

              <label className="mr-3" htmlFor="colorhex">
                Enter colorhex:
              </label>
              <input
                id="colorhex"
                className="border-2"
                placeholder="COLORHEX"
                type="text"
                ref={colorhexRef}
              />
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
          {Object.entries(Object.entries(rows)).map(([index, [key, value]]) => (
            <tr key={index}>
              <td className="border-collapse border border-black">
                {key.split("-")[0]}
              </td>
              <td className="border-collapse border border-black">
                <span>{key.split("-")[1]}</span>
                {" | "}
                <span>{key.split("-")[2]}</span>
              </td>
              <td className="border-collapse border border-black pl-3">
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
