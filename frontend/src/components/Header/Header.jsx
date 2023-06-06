import React, { useState } from "react";
import { FaUser, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
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

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((curr) => !curr);
  };

  return (
    <>
      <div
        className="flex h-8 w-8 items-center justify-center"
        onClick={handleOpen}
      >
        <span
          className={`before:rounded-rounded-3xl after:rounded-rounded-3xl h-[1px] w-6
          rounded-3xl bg-black before:absolute before:h-[1px] before:w-6 before:-translate-y-1.5 before:-translate-x-1/2 before:bg-black 
          before:transition-all before:duration-200 before:ease-in-out before:content-[''] after:absolute after:h-[1px] after:w-6 after:translate-y-1.5
          after:-translate-x-1/2 after:bg-black after:transition-all
          after:duration-200 after:ease-in-out after:content-['']
          ${
            isOpen &&
            `bg-transparent 
            before:translate-y-0 before:rotate-45 before:bg-slate-50 
            after:translate-y-0 after:-rotate-45 after:bg-slate-50`
          }`}
        ></span>
      </div>
      <nav
        className={`fixed overflow-hidden pt-24 text-left
        ${isOpen ? "w-full" : "w-0"} 
        east-in-out top-0 left-0 -z-10 h-full bg-neutral-900 bg-opacity-70 backdrop-blur-md transition-all duration-500`}
      >
        <div className="h-5/6 overflow-x-hidden overflow-y-scroll px-5">
          <div className="flex flex-col gap-3 pb-3">
            <a href="#" className="font-thin uppercase text-white">
              news
            </a>
            <a href="#" className="font-thin uppercase text-white">
              tees
            </a>
            <a href="#" className="font-thin uppercase text-white">
              knitwear
            </a>
            <a href="#" className="font-thin uppercase text-white">
              top
            </a>
            <a href="#" className="font-thin uppercase text-white">
              outerwear
            </a>
            <a href="#" className="font-thin uppercase text-white">
              pants
            </a>
            <a href="#" className="font-thin uppercase text-white">
              shorts
            </a>
            <a href="#" className="font-thin uppercase text-white">
              accessoires
            </a>
            <a href="#" className="font-thin uppercase text-white">
              footwear
            </a>
            <a href="#" className="font-thin uppercase text-white">
              special
            </a>
          </div>
          <form
            action=""
            className="relative border-b-[1px] border-b-white pb-2"
          >
            <input
              type="text"
              name=""
              id=""
              className="h-8 w-full bg-transparent text-sm font-thin text-white outline-none"
              placeholder="SEARCH"
            />
            <button
              type="submit"
              className="absolute right-2 translate-y-1/2 p-0 text-white"
            >
              <FaSearch />
            </button>
          </form>
          <div className="mt-3 flex flex-col gap-2 pb-3">
            <a href="" className="text-xs font-extralight text-white">
              Support
            </a>
            <a href="" className="text-xs font-extralight text-white">
              Terms & Conditions
            </a>
            <a href="" className="text-xs font-extralight text-white">
              Privacy Policy
            </a>
            <a href="" className="text-xs font-extralight text-white">
              Instagram
            </a>
          </div>
          <form
            action=""
            className="relative border-b-[1px] border-b-white py-2"
          >
            <label
              htmlFor="newsletter"
              className="text-xs font-thin text-white"
            >
              NEWSLETTER
            </label>
            <input
              type="text"
              name="newsletter"
              id="newsletter"
              className="h-8 w-full bg-transparent text-xs font-thin text-white outline-none"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="absolute right-0 translate-y-1/2 p-0 text-xs font-thin text-white"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
