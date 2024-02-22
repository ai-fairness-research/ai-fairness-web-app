import React, { ReactElement } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Bias from "./Bias";
import Context from "./Context";
import Demographics from "./Demographics";
import Opinions from "./Opinions";
import Exit from "./Exit";

interface SectionsProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

const Sections: React.FC<SectionsProps> = ({
  activeStep,
  handleNext,
  handleBack,
  handleReset,
}) => {
  return (
    <>
      {activeStep === 0 && (
        <SectionWrapper
          activeStep={activeStep}
          // topic="Background Information"
          topic="Bias in Machine Learning"
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <Box sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}>
            <Bias />
          </Box>
        </SectionWrapper>
      )}
      {activeStep === 1 && (
        <SectionWrapper
          activeStep={activeStep}
          topic=""
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <>
            <Context />
          </>
        </SectionWrapper>
      )}
      {activeStep === 2 && (
        <SectionWrapper
          activeStep={activeStep}
          // topic="Mitigating Bias"
          topic=""
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <Box sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}>
            <Opinions />
          </Box>
        </SectionWrapper>
      )}
      {activeStep === 3 && (
        <SectionWrapper
          activeStep={activeStep}
          topic="Demographics"
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <>
            <Box
              sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}
            >
              <Demographics />
            </Box>
          </>
        </SectionWrapper>
      )}
      {activeStep === 4 && (
        <SectionWrapper
          activeStep={activeStep}
          topic="Exit Questionairre"
          handleNext={handleReset}
          handleBack={handleBack}
        >
          <>
            <Box
              sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}
            >
              <Exit />
            </Box>
          </>
        </SectionWrapper>
      )}
    </>
  );
};

export default Sections;

interface SectionWrapperProps {
  activeStep: number;
  topic: string;
  handleNext: () => void;
  handleBack: () => void;
  children: ReactElement;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  activeStep,
  topic,
  handleNext,
  handleBack,
  children,
}) => {
  return (
    <Paper square elevation={0} sx={{ p: 3 }}>
      {topic !== "" && (
        <Typography component={"h4"} variant="h4" sx={{ mb: 4 }}>
          {topic}
        </Typography>
      )}
      <Box>{children}</Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {activeStep === 4 ? "Submit" : "Continue"}
          <ArrowForwardIcon sx={{ ml: 2, fontSize: "1rem" }} />
        </Button>
      </Box>
    </Paper>
  );
};
