import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h2" align="center">
            AI Audit
          </Typography>
          <Typography variant="body1" sx={{ color: grey[600] }} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.
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
              Start Survey
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={
              "https://ik.imagekit.io/aifairness/Frame-2.webp?updatedAt=1709519629218"
            }
            alt="bg-"
            style={{ width: "100%", objectFit: "contain" }}
            loading="eager"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
