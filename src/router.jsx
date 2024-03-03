import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/login-page/Login";
import RegisterPage from "./components/register-page/RegisterPage";
import { useContextState } from "./state/ContextProvider";
import Home from "./pages/Home/Home";
import BackendOperation from "./pages/BackendOperation/BackendOperation";
import FirstTask from "./pages/first-task/FirstTask";

const RoutesPage = () => {
  const { isAuthenticated } = useContextState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Home /> : <Login />,
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
      element: <FirstTask />,
    },
    {
      path: "back-end-operation",
      element: isAuthenticated ? <BackendOperation /> : <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesPage;
