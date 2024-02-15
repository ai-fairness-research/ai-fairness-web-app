import React from "react";
import { Toaster } from "react-hot-toast";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { customTheme } from "./theme";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App: React.FC = () => {
  const allPages = useRoutes(routes);

  const appTheme = customTheme({
    // theme: darkTheme ? "dark" : "light",
    theme: "light",
    direction: "ltr",
  });

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Outfit Variable', sans-serif",
    },
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Toaster toastOptions={toasterOptions} />
          {allPages}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default App;
