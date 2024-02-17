import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface SteppersProps {
  activeStep: number;
}

const Steppers: React.FC<SteppersProps> = ({ activeStep }) => {
  const steps = [
    {
      label: "BIAS IN MACHINE LEARNING",
    },
    {
      label: "MODEL BUILDING EVALUATION",
    },
    {
      label: "ATTITUDES AND OPINIONS ABOUT BIAS IN ML",
    },
    {
      label: "DEMOGRAPHICS",
    },
    {
      label: "EXIT QUESTIONAIRRE",
    },
  ];

  return (
    <>
      <Box sx={{ py: 3 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default Steppers;
