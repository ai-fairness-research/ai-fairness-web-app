// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Supports weights 100-900
import "@fontsource-variable/outfit";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
