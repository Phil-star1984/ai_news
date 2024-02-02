import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  /* const [isLoggedIn, setIsLoggedIn] = useState(false); */
  const {
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    checkUser,
  } = useAuth();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}auth/signin`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      if (!response) {
        console.log("User could not log in");
      }
      if (response.status == 200) {
        alert("You are logged in");
        navigate("/");
        checkUser();
      }
    } catch (error) {
      /* console.log(error); */
      /* setResponse(error.message); */
      setResponse(error.response.data.message || "Sign In failed.");
      /* console.log(error.response.data.message); */
    }
  };

  return (
    <div className="signin_outer_container">
      <h1>Please Sign In</h1>
      <div className="signin_inner_container">
        {response ? <p>{response}</p> : ""}
        <form className="signin_form" type="submit">
          <label name="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label name="password">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <button type="submit" className="signin_button" onClick={handleClick}>
            SIGN IN
          </button>
        </form>
        <p>
          If not signed up jet, <Link to="/signup">Sign Up</Link> first
        </p>
      </div>
    </div>
  );
}

export default SignIn;
