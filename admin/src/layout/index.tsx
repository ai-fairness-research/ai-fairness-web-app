import { Container, Toolbar } from "@mui/material";

import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";

const Layout = () => {
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
      </Box> */}
      <Container>
        <Header />
        <Toolbar />
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
