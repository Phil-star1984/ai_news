import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
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
        alert("You have Signed Up!");
        navigate("/signin");
      }
    } catch (error) {
      /* console.log(error); */
      setResponse(error.response?.data?.message || "Sign Up failed.");
    }
  };

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
          <button type="submit" onClick={handleClick} className="signup_button">
            SIGN UP
          </button>
        </form>
        <p>
          Already registered? Go to <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
