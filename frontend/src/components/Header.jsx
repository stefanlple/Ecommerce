import React from "react";
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="w-full sticky top-0  bg-white z-50 flex justify-between items-center py-5 px-10 mb-10 border-slate-200 border-b-2">
      <div className="">
        <Link to="/">Ecommerce</Link>
      </div>
      <ul className="flex items-center justify-between">
        {user ? (
          <>
            <li className="ml-5">
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </li>
            <li className="ml-5">
              <button className="btn" onClick={"/"}>
                <FaShoppingCart className="mr-2" /> Cart
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="ml-5">
              <Link
                className="flex items-center hover:text-gray-400"
                to="/login"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center hover:text-gray-400"
                to="/register"
              >
                <FaUser className="mr-2" /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
