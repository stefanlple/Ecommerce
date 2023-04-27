import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [curr, setCurr] = useState("OrderHistory");
  return (
    <>
      <nav className="flex justify-between">
        <Link
          className={`${
            curr === "OrderHistory" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("OrderHistory");
          }}
        >
          Order History
        </Link>
        <Link
          className={`${
            curr === "Addresses" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("Addresses");
          }}
        >
          Addresses
        </Link>
        <Link
          className={`${
            curr === "AccountDetails" ? "bg-black text-white" : "bg-gray-100"
          } w-full border border-gray-900 border-collapse hover:text-gray-500`}
          onClick={() => {
            setCurr("AccountDetails");
          }}
        >
          Account Details
        </Link>
      </nav>
      <div>
        {(() => {
          switch (curr) {
            case "Addresses":
              return (
                <>
                  <h1>Addresses</h1>
                  <div>
                    <div>
                      <h2>Street</h2>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h2>City</h2>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h2>State</h2>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h2>Country</h2>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h2>PostalCode</h2>
                      <span>adfa</span>
                    </div>
                  </div>
                </>
              );
            case "AccountDetails":
              return (
                <>
                  <h1>Account Details</h1>
                </>
              );
            default:
              return (
                <>
                  <h1>Order History</h1>
                </>
              );
          }
        })()}
      </div>
    </>
  );
}

export default Users;
