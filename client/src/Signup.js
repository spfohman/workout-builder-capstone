import React, { useState } from "react";

import { UserContext } from "./UserProvider";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);
  const { signup } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          signup(data);
        } else {
          setSignupErrors(data.error);
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
        }
      });
  }
  const errorPs = signupErrors.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
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
        <input
          type="password"
          name="password"
          value={passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br></br>

        {errorPs}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
