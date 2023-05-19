import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="mb-8 font-bold">
        <h1 className="m-4 text-5xl">
          <FaUser className="m-auto inline" /> Register
        </h1>
        <p className="text-3xl text-slate-400"> Please create an account</p>
      </section>
      <section className="form mx-auto w-full">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="w-96 border-2 border-slate-200 p-2"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="w-96 border-2 border-slate-200 p-2"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="w-96 border-2 border-slate-200 p-2"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="w-96 border-2 border-slate-200 p-2"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Repeat your password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 flex justify-center">
            <button type="submit" className="standard-button w-96">
              Submit
            </button>
          </div>
        </form>
        <Link to="/login" className="text-xs underline hover:text-gray-400">
          Login
        </Link>
      </section>
    </>
  );
}

export default Register;
