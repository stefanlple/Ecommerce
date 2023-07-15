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
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("OrderHistory");
          }}
        >
          Order History
        </Link>
        <Link
          className={`${
            curr === "Addresses" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Addresses");
          }}
        >
          Addresses
        </Link>
        <Link
          className={`${
            curr === "AccountDetails" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
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
              return <UserAddress />;

            case "AccountDetails":
              return <UserDetails />;
            default:
              return <OrderHistory />;
          }
        })()}
      </div>
    </>
  );
}

function OrderHistory() {
  const [orderList, setOrderList] = useState([
    { name: "sff" },
    { name: "sff" },
  ]);
  return (
    <>
      <h1>Order History</h1>
      <section className="flex flex-col gap-1">
        <div className="flex flex-col items-center border border-black p-1">
          <h5>YOUR ORDER: A234324234</h5>
          <div>24 Febuary 2023 | € 234.40 | 1 item</div>
          <button className="small-standard-button">View Details</button>
        </div>
        <div className="flex flex-col items-center border border-black p-1">
          <h5>YOUR ORDER: A234324234</h5>
          <div>24 Febuary 2023 | € 234.40 | 1 item</div>
          <button className="small-standard-button">View Details</button>
        </div>
      </section>
    </>
  );
}

function UserAddress() {
  const [editState, setEditState] = useState(false);

  const [name, setName] = useState("Bob Meier");
  const [street, setStreet] = useState("Bob Straße 1");
  const [city, setCity] = useState("Berlin");
  const [state, setState] = useState("Berlin");
  const [country, setCountry] = useState("Germany");
  const [zipcode, setZipeCode] = useState("20303");

  return (
    <>
      <h1>Addresses</h1>
      {editState ? (
        <div className="flex flex-col items-center gap-1 border border-black">
          <label className="font-semibold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className="border border-black"
          />
          <label className="font-semibold" htmlFor="street">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={street}
            className="border border-black"
          />
          <label className="font-semibold" htmlFor="city">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            className="border border-black"
          />
          <label className="font-semibold" htmlFor="state">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            className="border border-black"
          />
          <label className="font-semibold" htmlFor="country">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            className="border border-black"
          />
          <label className="font-semibold" htmlFor="zipcode">
            Zip Code:
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            className="border border-black"
          />
          <button className="small-standard-button">Submit</button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1 border border-black">
          <div>
            <h4 className="font-semibold">Name:</h4>
            <span>{name}</span>
          </div>
          <div>
            <h4 className="font-semibold">Street:</h4>
            <span>{street}</span>
          </div>
          <div>
            <h4 className="font-semibold">City:</h4>
            <span>{city}</span>
          </div>
          <div>
            <h4 className="font-semibold">State:</h4>
            <span>{state}</span>
          </div>
          <div>
            <h4 className="font-semibold">Country:</h4>
            <span>{country}</span>
          </div>
          <div>
            <h4 className="font-semibold">Zip Code:</h4>
            <span>{zipcode}</span>
          </div>
          <button
            className="small-standard-button"
            onClick={() => setEditState(true)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}

const UserDetails = () => {
  const [editState, setEditState] = useState(false);

  const [email, setEmail] = useState("bob@bob.de");
  const [mobile, setMobile] = useState("040 12345678");

  return (
    <>
      <h1>Account Details</h1>
      {editState ? (
        <div className="flex flex-col items-center gap-1 border border-black">
          <label className="font-semibold" htmlFor="email">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            className="border border-black"
          />
          <label className="font-semibold" htmlFor="mobile">
            Phone Number:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            className="border border-black"
          />
          <button className="small-standard-button">Submit</button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1 border border-black">
          <div>
            <h4 className="font-semibold">Email Address:</h4>
            <span>{email}</span>
          </div>
          <div>
            <h4 className="font-semibold">Phone Number:</h4>
            <span>{mobile}</span>
          </div>
          <button
            className="small-standard-button"
            onClick={() => setEditState(true)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default Users;
