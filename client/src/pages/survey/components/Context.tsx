import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Instructions from "./Instructions";
import { contextService } from "../../../services/utilities/provider";
import { Context, ContextAnswer } from "../../../services/utilities/types";
import ContextSection from "./ContextSection";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";

const steps = [
  "Instructions",
  "Scenario 1",
  "Scenario 2",
  "Scenario 3",
  "Scenario 4",
  "Scenario 5",
];

const ContextComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [context, setContext] = useState<Context[]>([]);
  const [contextAnswers, setContextAnswers] = useState<ContextAnswer[]>([]);

  const { setSurveyAnswers } = useSurveyAnswerContext();

  const handleNext = () => {
    if (activeStep !== steps.length - 1)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fetchContext = async () => {
    const response = await contextService.getAll();
    setContext(response.message);
  };

  useEffect(() => {
    fetchContext();
  }, []);

  const handleFinish = () => {
    // You can handle storing context answers in context or wherever necessary
    console.log("Context Answers:", contextAnswers);
    setSurveyAnswers((prevAnswers) => ({
      ...prevAnswers,
      answers: contextAnswers,
    }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        sx={{ mb: 4, width: "100%", overflowX: "auto" }}
      >
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        {activeStep === 0 ? (
          <Instructions />
        ) : (
          <ContextSection
            context={context[activeStep]}
            index={activeStep}
            contextAnswers={contextAnswers}
            setContextAnswers={setContextAnswers}
            // onAnswer={(answer) =>
            //   setContextAnswers((prevAnswers) => [...prevAnswers, answer])
            // }
          />
        )}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={
              activeStep === steps.length - 1 ? handleFinish : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default ContextComponent;
