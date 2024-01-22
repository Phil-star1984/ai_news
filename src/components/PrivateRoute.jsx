import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
}

export default PrivateRoute;
