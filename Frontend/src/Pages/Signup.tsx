import Quote from "../components/Quote/Quote";
import Register from "../components/Register";
// import React from "react";
const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <Register />
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
