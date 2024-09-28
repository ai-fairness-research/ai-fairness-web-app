import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const AboutSection: React.FC = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="stretch"
      sx={{ my: 4 }}
    >
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            p: 2,
            height: "100%",
            backgroundColor: grey[100],
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              How the audit works
            </Typography>
            <Typography variant="body1" sx={{ color: grey[700] }}>
              <b>Review: </b> Look at simple scenarios or questions.
              <br />
              <b>Share: </b> Provide your perspective on what feels fair and
              just. There are no wrong opinions!
              <br />
              <b>Impact: </b>
              Your input helps make AI decisions better for everyone.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            p: 2,
            height: "100%",
            backgroundColor: grey[100],
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Who should participate?
            </Typography>
            <Typography variant="body1" sx={{ color: grey[700] }}>
              Everyone's voice is valuable, regardless of their technical
              background.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
