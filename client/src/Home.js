import React from "react";
import { UserContext } from "./UserProvider";
function Home() {
  const userData = React.useContext(UserContext);
  console.log(userData);
  return (
    <div>
      <h1 className="landingHeader">Workout Builder</h1>
      <p className="landingComment">
        Build your own workouts or use what others have created!
      </p>
    </div>
  );
}
export default Home;
