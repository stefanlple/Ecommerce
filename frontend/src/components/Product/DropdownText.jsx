import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
function DropdownText(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="panel" onClick={toggleContent}>
      <h5>
        {props.name}
        <MdKeyboardArrowDown
          className={`inline m-auto float-right transition duration ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </h5>
      <hr className="bg-black h-0.5"></hr>
      <div
        className={`duration-500 ease-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        nibh vel mattis tincidunt, odio ligula aliquam arcu, nec lacinia magna
        nisi sit amet eros. Quisque vel felis arcu. Duis ut mauris a ante
        ultricies tristique eu euismod elit. Vivamus ac quam vel justo ultricies
        pharetra nec a tellus. Integer ut massa quis purus ultricies auctor sed
        in nulla. Aliquam erat volutpat.
      </div>
    </div>
  );
}

export default DropdownText;
