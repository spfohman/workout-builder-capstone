import React from "react";

import { UserContext } from "./UserProvider";

function UserHome() {
  const { user } = React.useContext(UserContext);

  return (
    <div>
      {user ? (
        <h1>
          Welcome{" "}
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}!
        </h1>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
export default UserHome;
