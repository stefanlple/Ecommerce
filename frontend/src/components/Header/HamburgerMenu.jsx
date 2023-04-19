import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((curr) => !curr);
  };

  return (
    <>
      <div
        className="flex items-center justify-center w-8 h-8"
        onClick={handleOpen}
      >
        <span
          className={`w-6 h-[1px] rounded-3xl bg-black
          before:content-[''] before:absolute before:w-6 before:h-[1px] before:rounded-rounded-3xl before:bg-black before:-translate-y-1.5 before:-translate-x-1/2 
          after:content-[''] after:absolute after:w-6 after:h-[1px] after:rounded-rounded-3xl after:bg-black after:translate-y-1.5 after:-translate-x-1/2
          before:transition-all before:ease-in-out before:duration-200
          after:transition-all after:ease-in-out after:duration-200
          ${
            isOpen &&
            `bg-transparent 
            before:bg-slate-50 before:rotate-45 before:translate-y-0 
            after:bg-slate-50 after:-rotate-45 after:translate-y-0`
          }`}
        ></span>
      </div>
      <nav
        className={`fixed text-left pt-24 overflow-hidden
        ${isOpen ? "w-full" : "w-0"} 
        h-full top-0 left-0 bg-neutral-900 bg-opacity-70 backdrop-blur-md -z-10 transition-all duration-500 east-in-out`}
      >
        <div className="px-5 h-5/6 overflow-y-scroll overflow-x-hidden">
          <div className="flex flex-col pb-3 gap-3">
            <a href="#" className="text-white uppercase font-thin">
              news
            </a>
            <a href="#" className="text-white uppercase font-thin">
              tees
            </a>
            <a href="#" className="text-white uppercase font-thin">
              knitwear
            </a>
            <a href="#" className="text-white uppercase font-thin">
              top
            </a>
            <a href="#" className="text-white uppercase font-thin">
              outerwear
            </a>
            <a href="#" className="text-white uppercase font-thin">
              pants
            </a>
            <a href="#" className="text-white uppercase font-thin">
              shorts
            </a>
            <a href="#" className="text-white uppercase font-thin">
              accessoires
            </a>
            <a href="#" className="text-white uppercase font-thin">
              footwear
            </a>
            <a href="#" className="text-white uppercase font-thin">
              special
            </a>
          </div>
          <form
            action=""
            className="pb-2 border-b-white border-b-[1px] relative"
          >
            <input
              type="text"
              name=""
              id=""
              className="w-full h-8 bg-transparent text-white font-thin outline-none text-sm"
              placeholder="SEARCH"
            />
            <button
              type="submit"
              className="absolute right-2 p-0 translate-y-1/2 text-white"
            >
              <FaSearch />
            </button>
          </form>
          <div className="flex flex-col gap-2 mt-3 pb-3">
            <a href="" className="text-white font-extralight text-xs">
              Support
            </a>
            <a href="" className="text-white font-extralight text-xs">
              Terms & Conditions
            </a>
            <a href="" className="text-white font-extralight text-xs">
              Privacy Policy
            </a>
            <a href="" className="text-white font-extralight text-xs">
              Instagram
            </a>
          </div>
          <form
            action=""
            className="py-2 border-b-white border-b-[1px] relative"
          >
            <label for="newsletter" className="text-white font-thin text-xs">
              NEWSLETTER
            </label>
            <input
              type="text"
              name="newsletter"
              id="newsletter"
              className="w-full h-8 bg-transparent text-white font-thin outline-none text-xs"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="absolute right-0 p-0 translate-y-1/2 text-white font-thin text-xs"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default HamburgerMenu;
