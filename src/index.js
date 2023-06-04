import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// create a function for revealing the cards when in viewport on scroll

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
