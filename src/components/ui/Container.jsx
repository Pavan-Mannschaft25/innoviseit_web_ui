import React from "react";

const Container = ({ children, className = "", maxWidth = "max-w-8xl" }) => (
  <div className={`${maxWidth} mx-auto px-2 sm:px-2 lg:px-6 ${className}`}>
    {children}
  </div>
);

export default Container;
