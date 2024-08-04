import {
    createBrowserRouter
  } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import Home from "../components/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../components/Error/Error";
import SignNew from "../components/SignUp/iphone/SignNew";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<PrivateRoute><Home></Home></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/signin',
        element: <SignIn></SignIn>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
      path: '/signnew',
      element: <SignNew></SignNew>
    }
  ]);

  export default router;