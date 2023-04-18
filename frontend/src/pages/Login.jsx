import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="font-bold mb-8">
        <h1 className="text-5xl m-4">
          <FaSignInAlt className="inline m-auto" /> Login
        </h1>
        <p className="text-3xl text-slate-400"> Please Login</p>
      </section>
      <section className="form w-[384px] mx-auto">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="w-96 p-2 border-slate-200 border-2"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 flex flex-col items-center">
            <input
              type="password"
              className="w-96 p-2 border-slate-200 border-2 "
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
            <Link className="ml-auto text-xs text-gray-400 hover:text-gray-500 text-right pt-1">
              Forgot Password?
            </Link>
          </div>
          <div className="mb-3 flex justify-center">
            <button type="submit" className="w-96 standard-button">
              Submit
            </button>
          </div>
        </form>
        <Link to="/register" className="text-sm hover:text-gray-400 underline">
          Register
        </Link>
      </section>
    </>
  );
}

export default Login;
