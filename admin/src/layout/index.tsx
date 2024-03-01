import React from "react";
import { Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout: React.FC = () => {
  return (
    <>
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
