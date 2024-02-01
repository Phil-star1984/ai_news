import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function AdminRoute() {
  const { isLoggedIn, userData } = useAuth();
  const isAdmin = isLoggedIn && userData.role === "Admin";
  return <>{isAdmin ? <Outlet /> : <Navigate to="/" />}</>;
}

export default AdminRoute;
