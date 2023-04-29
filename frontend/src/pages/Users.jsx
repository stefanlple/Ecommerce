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
                      <h2>Name</h2>
                      <span>Bob Meier</span>
                    </div>
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
                      <h2>Zip Code</h2>
                      <span>20303</span>
                    </div>
                    <button>Edit</button>
                  </div>
                </>
              );
            case "AccountDetails":
              return (
                <>
                  <h1>Account Details</h1>
                  <h2>Email Address</h2>
                  <span>bob@bob.de</span>
                  <h2>First Name</h2>
                  <span>bob</span>
                  <h2>Last Name</h2>
                  <span>meier</span>
                  <h2>Phone Number</h2>
                  <span>040 3242304832</span>
                  <button>Edit</button>
                </>
              );
            default:
              return (
                <>
                  <h1>Order History</h1>
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
          }
        })()}
      </div>
    </>
  );
}

export default Users;
