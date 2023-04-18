import React, { useState } from "react";
import { FaLock } from "react-icons/fa";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="font-bold mb-8">
        <h1 className="text-5xl m-4">
          <FaLock className="inline m-auto" /> Reset
        </h1>
        <p className="text-3xl text-slate-400">Retrieve Password</p>
      </section>
      <section className="form w-full mx-auto">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="w-96 p-2 border-slate-200 border-2"
              id="email"
              name="mail"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-3 flex justify-center">
            <button type="submit" className="w-96 standard-button">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ForgotPassword;
