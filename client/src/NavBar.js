import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserProvider";
import Logout from "./Logout";

function NavBar() {
  const { loggedIn } = React.useContext(UserContext);
  return (
    <div>
      {loggedIn ? (
        <div>
          {" "}
          <nav>
            <NavLink to="/userHome">Home</NavLink>
            <NavLink to="addExercise">Add Exercise</NavLink>
            <NavLink to="createWorkout">Create Workout</NavLink>
            <NavLink to="workoutList">All Workouts</NavLink>
            <Logout />
          </nav>
        </div>
      ) : (
        <div>
          <p>This is the external nav bar</p>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}
export default NavBar;
