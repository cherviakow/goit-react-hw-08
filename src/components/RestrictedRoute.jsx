import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";



export default function RestrictedRoute({
    // eslint-disable-next-line react/prop-types
    component: Component,
    // eslint-disable-next-line react/prop-types
    redirectTo = "/contacts",
}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}


// export const RestrictedRoute = () => {

//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
// };