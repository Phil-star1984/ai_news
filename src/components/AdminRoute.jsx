import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function AdminRoute() {
  const { isLoggedIn, userData } = useAuth();
  return (
    <>
      {!!isLoggedIn && userData.role == "Admin" ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default AdminRoute;
