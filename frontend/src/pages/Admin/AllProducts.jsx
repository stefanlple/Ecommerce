import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const AllProducts = () => {
  return (
    <>
      <h1>Products</h1>
      <table className="w-full border border-black border-collapse">
        <tr>
          <th className="border border-black border-collapse">Name</th>
          <th className="border border-black border-collapse">Price</th>
          <th className="border border-black border-collapse">Quantity</th>
          <th className="border border-black border-collapse">Status</th>
          <th className="border border-black border-collapse">Delete</th>
        </tr>
        <tr>
          <td className="border border-black border-collapse">Bob</td>
          <td className="border border-black border-collapse">345€</td>
          <td className="border border-black border-collapse">3423</td>
          <td className="border border-black border-collapse">Archived</td>
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

export default AllProducts;
