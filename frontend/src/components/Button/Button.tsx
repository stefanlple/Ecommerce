import React from "react";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  type,
  size = "medium",
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const sizeStyling = {
    small: "px-0.5 text-sm font-light",
    medium: "",
    large: "py-[10px] px-5 text-base font-bold",
  };

  const basicStyling =
    " flex items-center justify-center bg-black border-black border-2 rounded-md cursor-pointer text-center text-white hover:scale-[99%] ";

  return (
    <button
      type={type}
      className={className + basicStyling + sizeStyling[size]}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
