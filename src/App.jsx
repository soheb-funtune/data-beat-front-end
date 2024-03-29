import { useEffect, useState } from "react";
import "./App.css";
import RoutesPage from "./router";
import { useContextState } from "./state/ContextProvider";

function App() {
  const { dispatch } = useContextState();
  let userData = localStorage.getItem("userData");
  userData = JSON.parse(userData);
  useEffect(() => {
    console.log({ userData });
    userData?.token &&
      dispatch({
        type: "LOGIN",
        payload: {
          user: userData?.email,
          token: userData?.token,
        },
      });
  }, [userData?.token]);
  return (
    <>
      <RoutesPage />
    </>
  );
}

export default App;
