import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <>
      <h1>Products</h1>

      <Link
        className="ml-auto px-2 rounded-xl text-lg text-white bg-black hover:bg-white hover:text-black border border-black "
        to="/productupload"
      >
        Upload Product
      </Link>
      <table className="w-full border border-black border-collapse mt-2">
        <tr>
          <th className="border border-black border-collapse">Name</th>
          <th className="border border-black border-collapse">Price</th>
          <th className="border border-black border-collapse">Quantity</th>
          <th className="border border-black border-collapse">Status</th>
          <th className="border border-black border-collapse">Edit</th>
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
          <td className="border border-black border-collapse">Archived</td>

          <td className="border border-black border-collapse">
            <button type="submit">
              <FaEdit />
            </button>
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

export default AllProducts;
