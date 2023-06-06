import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function Admin() {
  const [curr, setCurr] = useState("Dashboard");

  return (
    <>
      <nav className="flex justify-between ">
        <Link
          className={`${
            curr === "Dashboard" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Dashboard");
          }}
        >
          Dashboard
        </Link>
        <Link
          className={`${
            curr === "Orders" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Orders");
          }}
        >
          Orders
        </Link>
        <Link
          className={`${
            curr === "Products" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Products");
          }}
        >
          Products
        </Link>
        <Link
          className={`${
            curr === "Users" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
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
              return <AllOrders />;

            case "Products":
              return <AllProducts />;

            case "Users":
              return <AllUsers />;

            default:
              return <h1>Dashboard</h1>;
          }
        })()}
      </div>
    </>
  );
}

function AllOrders() {
  return (
    <>
      <h1>Orders</h1>
      <section className="flex flex-col gap-1">
        <h5 className="font-extrabold">24. Febuary 2023</h5>
        <div className="flex flex-col items-center border border-black p-1">
          <h5>ORDER: A234324234</h5>
          <h6>USER: Bob</h6>
          <div>24 Febuary 2023 | € 234.40 | 1 item</div>
          <button className="small-standard-button">View Details</button>
        </div>
        <div className="flex flex-col items-center border border-black p-1">
          <h5>ORDER: A234324234</h5>
          <h6>USER: Bob</h6>
          <div>24 Febuary 2023 | € 234.40 | 1 item</div>
          <button className="small-standard-button">View Details</button>
        </div>
      </section>
    </>
  );
}

function AllProducts() {
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
}

function AllUsers() {
  return (
    <>
      <h1>Users</h1>
      <table className="w-full border-collapse border border-black">
        <tr>
          <th className="border-collapse border border-black">Name</th>
          <th className="border-collapse border border-black">Email</th>
          <th className="border-collapse border border-black">Role</th>
          <th className="border-collapse border border-black">Info</th>
        </tr>
        <tr>
          <td className="border-collapse border border-black">Bob</td>
          <td className="border-collapse border border-black">bob@bob.de</td>
          <td className="border-collapse border border-black">Admin</td>
          <td className="border-collapse border border-black">
            <button className="small-standard-button ml-auto mr-auto">
              View Details
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Admin;
