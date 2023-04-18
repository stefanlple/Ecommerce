import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);

  const handleSearchBar = (event) => {
    setSearchBarIsOpen((curr) => !curr);
  };
  return (
    <header className="flex justify-between items-center w-full fixed top-0 bg-white z-50 py-5 px-5 border-slate-200 border-b-2">
      <HamburgerMenu />
      <Link
        className="absolute block left-1/2 my-auto mb-auto text-center z-10 transform -translate-x-1/2"
        to="/"
      >
        Ecommerce
      </Link>
      <ul className="flex items-center justify-between">
        {user ? (
          <>
            <li className="ml-5">
              <button className="btn" onClick={onLogout}>
                <FaUser className="mr-2" /> Logout
              </button>
            </li>
            <li className="ml-5">
              <button className="btn" onClick={"/"}>
                <CiHeart className="mr-2" /> Cart
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <form action="" className="flex">
                <input
                  type="text"
                  name=""
                  id=""
                  className={`${
                    !searchBarIsOpen ? "scale-x-0" : "scale-x-90"
                  } origin-right bg-transparent text-black font-thin outline-none text-sm border-b-[1px] focus:border-b-black focus:border-b-2
                  transition-all ease-in-out duration-200`}
                  placeholder="SEARCH"
                />
                <button
                  type={`${!searchBarIsOpen ? "submit" : "button"}`}
                  className="text-black"
                  onClick={handleSearchBar}
                >
                  <FaSearch className="hover:text-gray-400" />
                </button>
              </form>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center hover:text-gray-400"
                to="/login"
              >
                <FaUser className="mr-2" />
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center hover:text-gray-400 relative"
                to="/cart"
              >
                <CiHeart className="mr-2 absolute text-4xl left-1/2 -translate-x-1/2 font-extralight" />
                <span className="text-xs font-medium">10</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
