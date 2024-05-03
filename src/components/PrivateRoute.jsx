import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";



export default function PrivateRoute({
    // eslint-disable-next-line react/prop-types
    component: Component,
    // eslint-disable-next-line react/prop-types
    redirectTo = "/login",
  }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
  }




/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

// export const PrivateRoute = () => {
//   const { isRefreshing } = useAuth();
//   const isLoggedIn = useSelector(selectIsLoggedIn)
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={"/login"} /> : <Outlet />;
// };