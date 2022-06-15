import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <p>This is the external nav bar</p>
      <nav>
        <NavLink to="login">Login</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
        <NavLink to="home">Home</NavLink>
      </nav>
    </div>
  );
}
export default NavBar;
