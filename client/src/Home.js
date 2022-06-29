import React from "react";
import UserHome from "./UserHome";

import { UserContext } from "./UserProvider";
function Home() {
  const { user } = React.useContext(UserContext);

  return (
    <div>
      {user ? (
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
