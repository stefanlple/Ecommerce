import React, { useState } from "react";

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
            after:bg-slate-50 after:-rotate-45 after:-translate-y-0`
          }`}
        ></span>
      </div>
      <nav
        className={`fixed  ${
          isOpen ? "w-full" : "w-0"
        } h-full top-0 left-0 bg-neutral-900 bg-opacity-70 -z-10 transition-all duration-500 east-in-out`}
      ></nav>
    </>
  );
}

export default HamburgerMenu;
