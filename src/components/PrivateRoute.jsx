import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = () => {
  const { isRefreshing } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={"/login"} /> : <Outlet />;
};