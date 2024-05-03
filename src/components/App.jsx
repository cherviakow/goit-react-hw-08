import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import  PrivateRoute  from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const ContactForm = lazy(() => import("./ContactForm/ContactForm"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const App = () => {


  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // const isRefreshing = useSelector(selectIsRefreshing);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<HomePage />} />
  //         <Route element={<RestrictedRoute />}>
  //           <Route path="login" element={<Login />} />
  //           <Route path="register" element={<Register />} />
  //         </Route>
  //         <Route element={<PrivateRoute />}>
  //           <Route path="contacts" element={<ContactForm />} />
  //         </Route>
  //         <Route path="*" element={<NotFoundPage />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );

  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      {isRefreshing ? (
        <p>Refreshing user, please wait...</p>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<Login />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactForm />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );



};