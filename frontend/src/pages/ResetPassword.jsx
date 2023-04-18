import React from "react";
import { FaLockOpen } from "react-icons/fa";

function ResetPassword() {
  return (
    <>
      <section className="font-bold mb-2">
        <h1 className="text-5xl m-4">
          <FaLockOpen className="inline m-auto" /> Reset
        </h1>
        <p className="text-3xl text-slate-400">Set New Password</p>
      </section>
      <section className="form w-full mx-auto">
        <p>for</p>
        <p className="mb-2">bob@bob.de</p>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="w-96 p-2 border-slate-200 border-2"
              id="email"
              name="mail"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="w-96 p-2 border-slate-200 border-2"
              id="email"
              name="mail"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-3 flex justify-center">
            <button type="submit" className="w-96 standard-button">
              Reset Password
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResetPassword;
