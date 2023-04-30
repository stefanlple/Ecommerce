import React from "react";

export type ButtonProps = {
  /* innerHTML */
  children?: React.ReactNode;
  /* Button Type */
  type: "button" | "submit" | "reset";
  /* Button size */
  size: Size;
  /* Add custom CSS */
  className?: string;
  /* OnClick callback event*/
  onClick?: () => void;
};

export type Size = "small" | "medium" | "large";
