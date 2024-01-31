import * as React from "react";
import { Grid } from "@mui/material";
import Steppers from "./components/Steppers";
import Sections from "./components/Sections";

const Survey = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container sx={{ minHeight: "80vh" }}>
      <Grid item xs={12} md={4}>
        <Steppers
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Sections
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      </Grid>
    </Grid>
  );
};

export default Survey;
