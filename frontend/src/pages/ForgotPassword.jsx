import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const handlleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <>
      {!submitted ? (
        <>
          <section className="mb-8 font-bold">
            <h1 className="m-4 text-5xl">
              <FaLock className="m-auto inline" /> Reset
            </h1>
            <p className="text-3xl text-slate-400">Retrieve Password</p>
          </section>
          <section className="form mx-auto w-full">
            <form onSubmit={handlleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="w-96 border-2 border-slate-200 p-2"
                  id="email"
                  name="mail"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mb-3 flex justify-center">
                <button type="submit" className="standard-button w-96">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </>
      ) : (
        <>
          <>
            <section className="mb-8 font-bold">
              <p className="text-2xl ">Email Sent</p>
            </section>
            <section className="form mx-auto w-full">
              <div className="mb-3">
                <p>
                  We have sent you an email with a link to update your password.
                </p>
              </div>
              <div className="mb-3 flex justify-center">
                <Link to="/login">
                  <button
                    type="button"
                    onclick="location.href='http://www.google.com'"
                    className="standard-button w-96"
                  >
                    RETURN TO SIGN IN
                  </button>
                </Link>
              </div>
            </section>
          </>
        </>
      )}
    </>
  );
}

export default ForgotPassword;
