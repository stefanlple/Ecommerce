import React from "react";

function HamburgerMenu() {
  return (
    <nav>
      <div className="flex items-center justify-center w-8 h-8 bg-black">
        <div
          class="w-6 h-0.5 rounded-lg bg-white
          before:content-[''] before:absolute before:w-6 before:h-0.5 before:rounded-lg before:bg-white transform before:-translate-y-2"
        ></div>
      </div>
    </nav>
  );
}

export default HamburgerMenu;
