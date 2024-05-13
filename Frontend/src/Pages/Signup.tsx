import Quote from "../components/Quote/Quote";
import Register from "../components/Register";
// import React from "react";
const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <Register />
        <div className="hidden lg:block">
         <Quote />
        </div>
      </div>
  );
};

export default Signup;
