import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Login from "./components/login-page/Login";
import RegisterPage from "./components/register-page/RegisterPage";
import { useContextState } from "./state/ContextProvider";
import Home from "./pages/Home/Home";
import BackendOperation from "./pages/BackendOperation/BackendOperation";
import FirstTask from "./pages/first-task/FirstTask";

const RoutesPage = () => {
  const [isAuthentication, setAuthentication] = useState(false);
  const { isAuthenticated } = useContextState();

  useEffect(() => {
    console.log(isAuthenticated);
    setAuthentication(isAuthenticated);
  }, [isAuthenticated]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthentication ? <Home /> : <Login />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "first-task",
      element: isAuthentication ? <FirstTask /> : <Login />,
    },
    {
      path: "back-end-operation",
      element: isAuthentication ? <BackendOperation /> : <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesPage;
