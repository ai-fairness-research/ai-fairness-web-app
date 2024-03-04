import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sx={{ mb: 5, mt: 3 }}>
          <Typography variant="h2" align="center">
            About AI Fairness
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h4">About Us</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h4">About Us</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={6}>
        <Card sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h4">Our Services</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              Explore Services
            </Button>
          </CardActions>
        </Card>
      </Grid> */}
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" align="center" sx={{ mt: 4 }}>
            Start Survey Today
          </Typography>
          <NavLink to="/questions">
            <Button variant="contained" color="primary" sx={{ mt: 2, mb: 4 }}>
              Get Started
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
