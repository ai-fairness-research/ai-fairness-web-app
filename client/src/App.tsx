import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "./styles/style.css";
import { customTheme } from "./theme";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import React from "react";

const App = () => {
  const allPages = useRoutes(routes);

  // const [darkTheme] = useContext(ThemeContext);

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
      <Box
      // className={darkTheme ? `dark-theme` : `light-theme`}
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Toaster toastOptions={toasterOptions} />
            {allPages}
          </ThemeProvider>
        </StyledEngineProvider>
      </Box>
    </>
  );
};

export default App;
