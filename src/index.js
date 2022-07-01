import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ShoppingContext } from "./context/ShoppingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShoppingContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShoppingContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
