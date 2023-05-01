import React, { useState } from "react";

const UserAddress = () => {
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
          <label className="font-semibold" for="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className="border border-black"
          />
          <label className="font-semibold" for="street">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={street}
            className="border border-black"
          />
          <label className="font-semibold" for="city">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            className="border border-black"
          />
          <label className="font-semibold" for="state">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            className="border border-black"
          />
          <label className="font-semibold" for="country">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            className="border border-black"
          />
          <label className="font-semibold" for="zipcode">
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
};

export default UserAddress;
