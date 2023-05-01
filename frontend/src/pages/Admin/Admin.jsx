import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Components */
import AllOrders from "./AllOrders";
import AllStock from "./AllStock";
import AllUsers from "./AllUsers";
import AllProducts from "./AllProducts";

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
              return <AllOrders />;

            case "Stock":
              return <AllStock />;

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

export default Admin;
