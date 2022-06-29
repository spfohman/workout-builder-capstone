import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserProvider";

function Logout() {
  const navigate = useNavigate();
  const { logout } = React.useContext(UserContext);
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => {
      logout();
      navigate("/");
    });
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Logout;
