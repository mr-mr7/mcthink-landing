"use client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainProvider = ({ children }) => (
  <Provider store={store}>
    <ToastContainer />
    <App>{children}</App>
  </Provider>
);

export default MainProvider;
