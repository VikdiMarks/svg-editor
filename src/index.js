import React from "react";
import ReactDOM from "react-dom/client";
import LeftTools from "./components/left-tools/LeftTools";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <LeftTools />
  </React.StrictMode>
);
