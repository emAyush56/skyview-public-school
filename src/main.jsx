import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollRestoration from "./components/utilities/ScrollRestoration";
import "./assets/css/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
