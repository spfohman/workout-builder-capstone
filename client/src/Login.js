import React, { useState } from "react";
import { UserContext } from "./UserProvider";

function Login() {
  const { login } = React.useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          login(data);
        } else {
          setLoginErrors(data.error);
          setUsername("");
          setPassword("");
        }
      });
  }
  const errorPs = loginErrors.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>

        {errorPs}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
