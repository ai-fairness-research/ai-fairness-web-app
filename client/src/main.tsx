import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// Supports weights 100-900
import "@fontsource-variable/outfit";
import React from "react";
import { SurveyAnswerProvider } from "./context/SurveyAnswerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SurveyAnswerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SurveyAnswerProvider>
);
