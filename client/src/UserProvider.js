import React, { useState, useEffect } from "react";
// import App from "./App";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("sarah");
  const [errors, setErrors] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
        setLoggedIn(true);
      } else {
        response.json().then((data) => setErrors(data.errors));
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
export { UserProvider, UserContext };
