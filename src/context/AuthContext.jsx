import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUser = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:5005/auth/me", {
        withCredentials: true,
      });
      if (response.data && response.data._id) {
        setIsLoggedIn(true);
        setUserData(response.data);
      } else {
        setIsLoggedIn(false);
        setUserData({});
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUserData({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
    
  }, []);

  const value = {
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    checkUser,
  };

  console.log(userData)

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
