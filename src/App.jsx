import { useEffect, useState } from "react";
import "./App.css";
import RoutesPage from "./router";
import { useContextState } from "./state/ContextProvider";
import Header from "./components/Header/Header";

function App() {
  const { dispatch } = useContextState();
  useEffect(() => {
    let userData = localStorage.getItem("userData");
    userData = JSON.parse(userData);
    dispatch({
      type: "LOGIN",
      payload: {
        user: userData?.email,
        token: userData?.token,
      },
    });
  }, []);
  return (
    <>
      <RoutesPage />
    </>
  );
}

export default App;
