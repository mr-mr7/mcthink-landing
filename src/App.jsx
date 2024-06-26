"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginService } from "./store/auth";

const App = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoginService());
  }, []);
  return <>{children}</>;
};
export default App;
