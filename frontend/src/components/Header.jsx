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
    <header className="w-full bg-black flex justify-between align items-center py-10 px-0 mb-60 border-b-1 border-b-slate-50 k">
      <div className="">
        <Link to="/">Ecommerce</Link>
      </div>
      <ul className="flex items-center justify-between">
        {user ? (
          <>
            <li className="ml-20 hover:bg-violet-600">
              <li>
                <button className="btn" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </li>
            <li className="ml-20 hover:bg-violet-600">
              <li>
                <button className="btn" onClick={"/"}>
                  <FaShoppingCart /> Cart
                </button>
              </li>
            </li>
          </>
        ) : (
          <>
            <li className="ml-20 hover:bg-violet-600">
              <Link className="flex items-center" to="/login">
                <FaSignInAlt className="mr-5" /> Login
              </Link>
            </li>
            <li className="ml-20 hover:bg-violet-600">
              <Link className="flex items-center" to="/register">
                <FaUser className="mr-5" /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
