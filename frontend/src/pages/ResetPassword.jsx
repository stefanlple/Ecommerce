import React from "react";
import { FaLockOpen } from "react-icons/fa";

function ResetPassword() {
  return (
    <>
      <section className="mb-2 font-bold">
        <h1 className="m-4 text-5xl">
          <FaLockOpen className="m-auto inline" /> Reset
        </h1>
        <p className="text-3xl text-slate-400">Set New Password</p>
      </section>
      <section className="form mx-auto w-full">
        <p>for</p>
        <p className="mb-2">bob@bob.de</p>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="w-96 border-2 border-slate-200 p-2"
              id="email"
              name="mail"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="w-96 border-2 border-slate-200 p-2"
              id="email"
              name="mail"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-3 flex justify-center">
            <button type="submit" className="standard-button w-96">
              Reset Password
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResetPassword;
