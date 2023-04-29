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
                  <section>
                    <div>
                      <h5>YOUR ORDER: A234324234</h5>
                      <span>24 Febuary 2023 | € 234.40 | 1 item</span>
                      <img src="" alt="altImage" />
                      <button>View Details</button>
                    </div>
                  </section>
                </>
              );
            case "Stock":
              return (
                <>
                  <h1>Stock</h1>
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>Bob</td>
                      <td>345€</td>
                      <td>3423</td>
                      <td>
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
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>Bob</td>
                      <td>345€</td>
                      <td>3423</td>
                      <td>Archived</td>
                      <td>
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
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                    <tr>
                      <td>Bob</td>
                      <td>bob@bob.de</td>
                      <td>Admin</td>
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
