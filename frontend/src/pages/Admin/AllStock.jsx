import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const AllStock = () => {
  return (
    <>
      <h1>Stock</h1>
      <table className="w-full border border-black border-collapse">
        <tr>
          <th className="border border-black border-collapse">Name</th>
          <th className="border border-black border-collapse">Price</th>
          <th className="border border-black border-collapse">Quantity</th>
          <th className="border border-black border-collapse">Delete</th>
        </tr>
        <tr>
          <td className="border border-black border-collapse">Bob</td>
          <td className="border border-black border-collapse">345€</td>
          <td className="border border-black border-collapse">
            <ul>
              <li>red: 230</li>
              <li>blue: 200</li>
              <li>green: 120</li>
            </ul>
          </td>
          <td className="border border-black border-collapse">
            <button type="submit">
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default AllStock;
