import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container component={"footer"}>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 3,
        }}
      >
        <Typography variant="h6" component="h3">
          Copyrights {"  "}
          <Link to="https://cdis.wisc.edu/">UW Madison.</Link>
        </Typography>
        <div>
          <Link to="https://github.com/ai-fairness-research/air-fairness-web-app">
            <IconButton aria-label="github">
              <GitHubIcon />
            </IconButton>
          </Link>
        </div>
      </Box>
    </Container>
  );
};

export default Footer;
