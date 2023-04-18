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
          <section className="font-bold mb-8">
            <h1 className="text-5xl m-4">
              <FaLock className="inline m-auto" /> Reset
            </h1>
            <p className="text-3xl text-slate-400">Retrieve Password</p>
          </section>
          <section className="form w-full mx-auto">
            <form onSubmit={handlleSubmit}>
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
      ) : (
        <>
          <>
            <section className="font-bold mb-8">
              <p className="text-2xl ">Email Sent</p>
            </section>
            <section className="form w-full mx-auto">
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
                    className="w-96 standard-button"
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
