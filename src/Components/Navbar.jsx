import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="navbar">
        <div className="left">
          <h1>BloggerDogger</h1>
        </div>
        <div className="navigation">
          <span>Home</span>
          <span>Login</span>
          <span>SignUp</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
