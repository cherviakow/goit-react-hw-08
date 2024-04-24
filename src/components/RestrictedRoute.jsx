import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const RestrictedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};