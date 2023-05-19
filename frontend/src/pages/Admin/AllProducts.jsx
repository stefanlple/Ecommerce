import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <>
      <h1>Products</h1>

      <Link
        className="ml-auto rounded-xl border border-black bg-black px-2 text-lg text-white hover:bg-white hover:text-black "
        to="/productupload"
      >
        Upload Product
      </Link>
      <table className="mt-2 w-full border-collapse border border-black">
        <tr>
          <th className="border-collapse border border-black">Name</th>
          <th className="border-collapse border border-black">Price</th>
          <th className="border-collapse border border-black">Quantity</th>
          <th className="border-collapse border border-black">Status</th>
          <th className="border-collapse border border-black">Edit</th>
          <th className="border-collapse border border-black">Delete</th>
        </tr>
        <tr>
          <td className="border-collapse border border-black">Bob</td>
          <td className="border-collapse border border-black">345€</td>
          <td className="border-collapse border border-black">
            <ul>
              <li>red: 230</li>
              <li>blue: 200</li>
              <li>green: 120</li>
            </ul>
          </td>
          <td className="border-collapse border border-black">Archived</td>

          <td className="border-collapse border border-black">
            <button type="submit">
              <FaEdit />
            </button>
          </td>
          <td className="border-collapse border border-black">
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
