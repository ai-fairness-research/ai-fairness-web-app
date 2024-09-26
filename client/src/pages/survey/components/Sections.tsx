import React, { ReactElement } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProlificId from "./ProlificId";
import Context from "./Context";
// import Demographics from "./Demographics";
import Opinions from "./Opinions";
import Exit from "./Exit";

interface SectionsProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  isIdSubmitted: boolean;
  isOpinionsSubmitted: boolean;
  isDemoSubmitted: boolean;
  isExitSubmitted: boolean;
}

const Sections: React.FC<SectionsProps> = ({
  activeStep,
  handleNext,
  handleBack,
  handleReset,
  isIdSubmitted,
  isOpinionsSubmitted,
  // isDemoSubmitted,
  isExitSubmitted,
}) => {
  return (
    <>
      {activeStep === 0 && (
        <SectionWrapper
          activeStep={activeStep}
          topic="Prolific ID"
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <Box sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}>
            <ProlificId isIdSubmitted={isIdSubmitted} />
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
            <Context
              handleSectionNext={handleNext}
              handleSectionBack={handleBack}
            />
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
            <Opinions isOpinionsSubmitted={isOpinionsSubmitted} />
          </Box>
        </SectionWrapper>
      )}
      {/* {activeStep === 3 && (
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
              <Demographics isDemoSubmitted={isDemoSubmitted} />
            </Box>
          </>
        </SectionWrapper>
      )} */}
      {activeStep === 3 && (
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
              <Exit isExitSubmitted={isExitSubmitted} />
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
  activeContextStep?: number;
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
      {activeStep !== 1 && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 1, mr: 1 }}
          >
            {activeStep === 4 ? "Submit" : "Continue"}
            <ArrowForwardIcon sx={{ ml: 2, fontSize: "1rem" }} />
          </Button>
        </Box>
      )}
    </Paper>
  );
};
