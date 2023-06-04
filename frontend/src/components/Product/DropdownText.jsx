import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function DropdownText({ name, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="panel" onClick={toggleContent}>
      <h5>
        {name}
        <MdKeyboardArrowDown
          className={`duration float-right m-auto inline transition ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </h5>
      <hr className="h-0.5 bg-black"></hr>
      <div
        className={`duration-500 ease-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        {description}
      </div>
    </div>
  );
}

export default DropdownText;
