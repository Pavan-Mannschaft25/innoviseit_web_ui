// import React from "react";

// const Container = ({ children, className = "", maxWidth = "max-w-8xl" }) => (
//   <div className={`${maxWidth} mx-auto px-2 sm:px-2 lg:px-6 ${className}`}>
//     {children}
//   </div>
// );

// export default Container;

import React from "react";

const Container = ({ children, className = "", ...props }) => (
  <div
    className={`max-w-8xl mx-auto px-6 sm:px-8 lg:px-10 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Container;
