import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AuthPage() {
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const result = await axios.post(
      "http://localhost:5005/auth/signup",
      {
        name: userName,
        email: eMail,
        password: password,
      },
      { withCredentials: true }
    );

    if (result.status == 201) {
      setResponse("Successfully signed up!");
    } else {
      setResponse("Sign Up failed.");
    }

    console.log(result);

    setEmail("");
    setUserName("");
    setPassword("");
  };

  /* useEffect(() => {}, [response]); */

  return (
    <div className="auth_outer_container">
      <h1>Please Sign Up</h1>
      <div className="auth_inner_container">
        <form className="signup_form" type="submit">
          {response && <p>{response.toUpperCase()}</p>}
          <label htmlFor="name">Username</label>
          <input
            type="text"
            value={userName}
            placeholder="Input your name here"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={eMail}
            placeholder="Enter email here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password here"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={handleClick}>
            SEND
          </button>
        </form>
        <p>
          Already registered? Go to <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
