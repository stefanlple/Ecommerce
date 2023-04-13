import React, { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((curr) => !curr);
  };

  return (
    <nav>
      <div
        className="flex items-center justify-center w-8 h-8"
        onClick={handleOpen}
      >
        <div
          className={`w-6 h-0.5 rounded-3xl bg-black
          before:content-[''] before:absolute before:w-6 before:h-0.5 before:rounded-rounded-3xl before:bg-black before:-translate-y-1.5 before:-translate-x-1/2 
          after:content-[''] after:absolute after:w-6 after:h-0.5 after:rounded-rounded-3xl after:bg-black after:translate-y-1.5 after:-translate-x-1/2
          before:transition-transform before:duration before:ease-in-out
          after:transition-transform after:duration after:ease-in-out
          ${
            isOpen &&
            "bg-transparent before:rotate-45 before:translate-y-0 after:-rotate-45 after:-translate-y-0"
          }`}
        ></div>
      </div>
    </nav>
  );
}

export default HamburgerMenu;
