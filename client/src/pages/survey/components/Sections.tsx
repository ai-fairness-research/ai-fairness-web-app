import React, { ReactElement } from "react";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SwitchComponent from "./SwitchComponent";

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
          topic="Background Information"
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <Box sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}>
            <SwitchComponent />
            <SwitchComponent />
            <SwitchComponent />
            <FormGroup>
              <FormLabel sx={{ color: "#000", fontWeight: 500, mb: 2 }}>
                Question Text
              </FormLabel>
              <TextField id="filled-multiline-flexible" multiline rows={4} />
            </FormGroup>
          </Box>
        </SectionWrapper>
      )}
      {activeStep === 1 && (
        <SectionWrapper
          activeStep={activeStep}
          topic="Bias in Machine Learning...A Primer"
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <>
            <img
              src="https://picsum.photos/id/237/300/200"
              alt="bg"
              width="100%"
              height={200}
              style={{ objectFit: "cover" }}
            />
            <Typography sx={{ mb: 4 }}>
              This document has been designed to help you quickly generate
              offline materials in which to gather feedback, survey your
              audience, or just generally inform your approach based on user
              insight.
            </Typography>
          </>
        </SectionWrapper>
      )}
      {activeStep === 2 && (
        <SectionWrapper
          activeStep={activeStep}
          topic="Mitigating Bias"
          handleNext={handleNext}
          handleBack={handleBack}
        >
          <Box sx={{ display: "flex", gap: 4, flexDirection: "column", mb: 4 }}>
            <Typography>
              This document has been designed to help you quickly generate
              offline materials in which to gather feedback, survey your
              audience, or just generally inform your approach based on user
              insight.
            </Typography>
            <SwitchComponent />
          </Box>
        </SectionWrapper>
      )}
      {activeStep === 3 && (
        <SectionWrapper
          activeStep={activeStep}
          topic="Exit Questionnaire"
          handleNext={handleReset}
          handleBack={handleBack}
        >
          <>
            <Typography>
              This is the very first iteration of a document I hope to expand
              on. If you have any suggestions or feedback, please send it to me
              at.
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 2, mb: 4 }}>
              YOUR MECHANICAL TURK CODE: c3934f
            </Typography>
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
      <Typography component={"h4"} variant="h4" sx={{ mb: 8 }}>
        {topic}
      </Typography>
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
          {activeStep === 3 ? "Reset" : "Continue"}
          <ArrowForwardIcon sx={{ ml: 2, fontSize: "1rem" }} />
        </Button>
      </Box>
    </Paper>
  );
};
