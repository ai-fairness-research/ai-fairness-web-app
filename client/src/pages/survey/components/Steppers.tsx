import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Typography from "@mui/material/Typography";

interface SteppersProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

const Steppers: React.FC<SteppersProps> = ({
  activeStep,
  // handleNext,
  // handleBack,
  // handleReset,
}) => {
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
  ];

  return (
    <>
      <Box
        // sx={{ maxWidth: 400 }}
        sx={{ py: 3 }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel
              // optional={
              //   index === 2 ? (
              //     <Typography variant="caption">Last step</Typography>
              //   ) : null
              // }
              >
                {step.label}
              </StepLabel>
              {/* <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent> */}
            </Step>
          ))}
        </Stepper>
        {/* {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )} */}
      </Box>
    </>
  );
};

export default Steppers;
