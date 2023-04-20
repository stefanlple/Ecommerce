import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [curr, setCurr] = useState("orderHistory");
  console.log(curr);
  return (
    <>
      <nav className="flex justify-between gap-5">
        <Link
          onClick={() => {
            setCurr("orderHistory");
          }}
        >
          Order History
        </Link>
        <Link
          onClick={() => {
            setCurr("addresses");
          }}
        >
          Addresses
        </Link>
        <Link
          onClick={() => {
            setCurr("accountDetails");
          }}
        >
          Account Details
        </Link>
      </nav>
      <div>
        {(() => {
          switch (curr) {
            case "addresses":
              return <h1>Addresses</h1>;
            case "accountDetails":
              return <h1>accountDetails</h1>;
            default:
              return <h1>orderHistory</h1>;
          }
        })()}
      </div>
    </>
  );
}

export default Users;
