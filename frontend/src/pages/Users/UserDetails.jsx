import React, { useState } from "react";

const UserDetails = () => {
  const [editState, setEditState] = useState(false);

  const [email, setEmail] = useState("bob@bob.de");
  const [fname, setFname] = useState("Bob");
  const [lname, setLname] = useState("Meier");
  const [mobile, setMobile] = useState("040 12345678");

  return (
    <>
      <h1>Account Details</h1>
      {editState ? (
        <div className="flex flex-col items-center gap-1 border border-black">
          <label className="font-semibold" for="email">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            className="border border-black"
          />
          <label className="font-semibold" for="fname">
            First Name:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            className="border border-black"
          />
          <label className="font-semibold" for="lname">
            Last Name:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            className="border border-black"
          />
          <label className="font-semibold" for="mobile">
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
            <h4 className="font-semibold">First Name:</h4>
            <span>{fname}</span>
          </div>
          <div>
            <h4 className="font-semibold">Last Name:</h4>
            <span>{lname}</span>
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

export default UserDetails;
