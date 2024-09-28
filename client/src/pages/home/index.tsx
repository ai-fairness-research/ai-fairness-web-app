import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import AboutSection from "./components/aboutSection";
import HomeImage from "../../assets/images/home.png";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h2" align="left" sx={{ fontSize: 48 }}>
            Community AI Audits
          </Typography>
          <Typography variant="body1" sx={{ color: grey[700] }} align="left">
            AI systems are becoming a part of our everyday lives, from
            recommending movies to making important decisions about health. But
            sometimes, these systems can miss the mark, especially when they
            don’t consider the diverse experiences and values of all people.
            That's where you come in!
            <br />
            <br />
            AI audits allow individual like you to share your thoughts on how AI
            should work in real-world settings. Your feedback helps developers
            create AI that is fair, unbiased, and works well for everyone.
          </Typography>
          <NavLink
            to="/questions"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <Button variant="contained" color="primary" sx={{ mt: 4, mb: 4 }}>
              Start Audit
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={HomeImage}
            alt="bg-"
            style={{ width: "100%", objectFit: "contain" }}
            loading="eager"
          />
        </Grid>
      </Grid>
      <AboutSection />
    </Container>
  );
};

export default LandingPage;
