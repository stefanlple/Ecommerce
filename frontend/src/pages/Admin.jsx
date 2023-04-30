import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Admin() {
  const [curr, setCurr] = useState("Dashboard");

  return (
    <>
      <nav className="flex justify-between ">
        <Link
          className={`${
            curr === "Dashboard" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("Dashboard");
          }}
        >
          Dashboard
        </Link>
        <Link
          className={`${
            curr === "Orders" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("Orders");
          }}
        >
          Orders
        </Link>
        <Link
          className={`${
            curr === "Stock" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("Stock");
          }}
        >
          Stock
        </Link>
        <Link
          className={`${
            curr === "Products" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("Products");
          }}
        >
          Products
        </Link>
        <Link
          className={`${
            curr === "Users" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("Users");
          }}
        >
          Users
        </Link>
      </nav>
      <div>
        {(() => {
          switch (curr) {
            case "Orders":
              return (
                <>
                  <h1>Orders</h1>
                  <section className="flex flex-col gap-1">
                    <h5 className="font-extrabold">24. Febuary 2023</h5>
                    <div className="flex flex-col items-center p-1 border border-black">
                      <h5>ORDER: A234324234 - USER: Bob</h5>
                      <h6>USER: Bob</h6>
                      <div>24 Febuary 2023 | € 234.40 | 1 item</div>
                      <button className="small-standard-button">
                        View Details
                      </button>
                    </div>
                    <div className="flex flex-col items-center p-1 border border-black">
                      <h5>ORDER: A234324234</h5>
                      <h6>USER: Bob</h6>
                      <div>24 Febuary 2023 | € 234.40 | 1 item</div>
                      <button className="small-standard-button">
                        View Details
                      </button>
                    </div>
                  </section>
                </>
              );
            case "Stock":
              return (
                <>
                  <h1>Stock</h1>
                  <table className="w-full border border-black border-collapse">
                    <tr>
                      <th className="border border-black border-collapse">
                        Name
                      </th>
                      <th className="border border-black border-collapse">
                        Price
                      </th>
                      <th className="border border-black border-collapse">
                        Quantity
                      </th>
                      <th className="border border-black border-collapse">
                        Delete
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-black border-collapse">
                        Bob
                      </td>
                      <td className="border border-black border-collapse">
                        345€
                      </td>
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
            case "Products":
              return (
                <>
                  <h1>Products</h1>
                  <table className="w-full border border-black border-collapse">
                    <tr>
                      <th className="border border-black border-collapse">
                        Name
                      </th>
                      <th className="border border-black border-collapse">
                        Price
                      </th>
                      <th className="border border-black border-collapse">
                        Quantity
                      </th>
                      <th className="border border-black border-collapse">
                        Status
                      </th>
                      <th className="border border-black border-collapse">
                        Delete
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-black border-collapse">
                        Bob
                      </td>
                      <td className="border border-black border-collapse">
                        345€
                      </td>
                      <td className="border border-black border-collapse">
                        3423
                      </td>
                      <td className="border border-black border-collapse">
                        Archived
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
            case "Users":
              return (
                <>
                  <h1>Users</h1>
                  <table className="w-full border border-black border-collapse">
                    <tr>
                      <th className="border border-black border-collapse">
                        Name
                      </th>
                      <th className="border border-black border-collapse">
                        Email
                      </th>
                      <th className="border border-black border-collapse">
                        Role
                      </th>
                      <th className="border border-black border-collapse">
                        Info
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-black border-collapse">
                        Bob
                      </td>
                      <td className="border border-black border-collapse">
                        bob@bob.de
                      </td>
                      <td className="border border-black border-collapse">
                        Admin
                      </td>
                      <td className="border border-black border-collapse">
                        <button className="small-standard-button ml-auto mr-auto">
                          View Details
                        </button>
                      </td>
                    </tr>
                  </table>
                </>
              );
            default:
              return <h1>Dashboard</h1>;
          }
        })()}
      </div>
    </>
  );
}

export default Admin;
