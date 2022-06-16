import React from "react";
import UserHome from "./UserHome";
import { UserContext } from "./UserProvider";
function Home() {
  const { loggedIn } = React.useContext(UserContext);

  return (
    <div>
      {loggedIn ? (
        <UserHome />
      ) : (
        <div>
          <h1 className="landingHeader">Workout Builder</h1>
          <p className="landingComment">
            Build your own workouts or use what others have created!
          </p>
        </div>
      )}
    </div>
  );
}
export default Home;
