import React, { useState, useEffect } from "react";

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
  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };
  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };
  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };
  return (
    <UserContext.Provider value={(user, signup, logout, login, loggedIn)}>
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
