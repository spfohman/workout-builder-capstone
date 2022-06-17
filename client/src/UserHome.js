import React from "react";
import Logout from "./Logout";
import { UserContext } from "./UserProvider";
function UserHome() {
  const { user } = React.useContext(UserContext);
  //   console.log(user.username);
  return (
    <div>
      <Logout />
      <h1>Welcome inside {user.username}.</h1>
    </div>
  );
}
export default UserHome;
