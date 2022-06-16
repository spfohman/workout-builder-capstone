import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserProvider";

function NavBar() {
  const { loggedIn } = React.useContext(UserContext);
  return (
    <div>
      {loggedIn ? (
        <div>
          {" "}
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <p>This is the external nav bar</p>
          <nav>
            <NavLink to="login">Login</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
            <NavLink to="home">Home</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}
export default NavBar;
