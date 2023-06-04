import React, { useState } from "react";
import { FaUser, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
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
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-slate-200 bg-white py-5 px-5">
      <HamburgerMenu />
      <Link
        className="absolute left-1/2 z-10 my-auto mb-auto block -translate-x-1/2 transform text-center"
        to="/"
      >
        Ecommerce
      </Link>
      <ul className="flex items-center justify-between">
        <li>
          <form action="" className="flex">
            <input
              type="text"
              name=""
              id=""
              className={`${
                !searchBarIsOpen ? "scale-x-0" : "scale-x-90"
              } origin-right border-b-[1px] bg-transparent text-sm font-thin tracking-wider text-black outline-none transition-all duration-200
                  ease-in-out focus:border-b-2 focus:border-b-black`}
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
        {user ? (
          <>
            <li className="ml-5">
              <Link
                className="flex items-center hover:text-gray-400"
                to="/login"
                onClick={onLogout}
              >
                <FaSignOutAlt className="mr-2" />
              </Link>
            </li>

            <li className="ml-5">
              <Link
                className="relative flex items-center hover:text-gray-400"
                to="/cart"
              >
                <CiHeart className="absolute left-1/2 mr-2 -translate-x-1/2 text-4xl font-extralight" />
                <span className="text-xs font-medium">10</span>
              </Link>
            </li>
          </>
        ) : (
          <>
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
                className="relative flex items-center hover:text-gray-400"
                to="/cart"
              >
                <CiHeart className="absolute left-1/2 mr-2 -translate-x-1/2 text-4xl font-extralight" />
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
