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
                  <div className="flex flex-col items-center gap-1">
                    <div>
                      <h4 className="font-semibold">Name:</h4>
                      <span>Bob Meier</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Street:</h4>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">City:</h4>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">State:</h4>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Country:</h4>
                      <span>adfa</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Zip Code:</h4>
                      <span>20303</span>
                    </div>
                    <button className="small-standard-button">Edit</button>
                  </div>
                </>
              );
            case "AccountDetails":
              return (
                <>
                  <div className="flex flex-col items-center">
                    <h1>Account Details</h1>
                    <h4 className="font-semibold">Email Address</h4>
                    <span>bob@bob.de</span>
                    <h4 className="font-semibold">First Name</h4>
                    <span>bob</span>
                    <h4 className="font-semibold">Last Name</h4>
                    <span>meier</span>
                    <h4 className="font-semibold"> Phone Number</h4>
                    <span>040 3242304832</span>
                    <button className="small-standard-button">Edit</button>
                  </div>
                </>
              );
            default:
              return (
                <>
                  <h1>Order History</h1>
                  <section className="flex flex-col gap-1">
                    <h5 className="font-extrabold">24. Febuary 2023</h5>
                    <div className="flex flex-col items-center p-1 border border-black">
                      <h5>YOUR ORDER: A234324234</h5>
                      <div>24 Febuary 2023 | € 234.40 | 1 item</div>
                      <button className="small-standard-button">
                        View Details
                      </button>
                    </div>
                    <div className="flex flex-col items-center p-1 border border-black">
                      <h5>YOUR ORDER: A234324234</h5>
                      <div>24 Febuary 2023 | € 234.40 | 1 item</div>
                      <button className="small-standard-button">
                        View Details
                      </button>
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
