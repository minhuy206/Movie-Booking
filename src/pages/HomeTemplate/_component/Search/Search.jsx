import { Input } from "antd";
import "./Search.css";
import React from "react";

export const Search = ({
  tailwindClasses,
  placeholder,
  backgroundColor,
  icon,
  ...props
}) => {
  return (
    <Input
      className={`search bg-${backgroundColor} ${[...tailwindClasses]}`}
      placeholder={placeholder}
      prefix={icon}
      {...props}
    />
  );
};
