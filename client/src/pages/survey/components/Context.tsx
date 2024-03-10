import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Instructions from "./Instructions";
import { ApiService } from "../../../services/utilities/provider";
import {
  Context,
  ContextAnswer,
  ContextResponse,
} from "../../../services/utilities/types";
import ContextSection from "./ContextSection";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";
import CommonSnackbar from "../../../common/CommonSnackbar";

const steps = [
  "Instructions",
  "Scenario 1",
  "Scenario 2",
  "Scenario 3",
  "Scenario 4",
  "Scenario 5",
];

interface ContextComponentProps {
  handleSectionNext: () => void;
  handleSectionBack: () => void;
}

const ContextComponent: React.FC<ContextComponentProps> = ({
  handleSectionNext,
  handleSectionBack,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [context, setContext] = useState<Context[]>([]);
  const [contextAnswers, setContextAnswers] = useState<ContextAnswer[]>([]);

  const [isContextSubmitted, setIsContextSubmitted] = useState(false);

  const { setSurveyAnswers } = useSurveyAnswerContext();

  const [openSnack, setIsOpenSnack] = useState(false);

  const handleNext = () => {
    console.log(contextAnswers[activeStep - 1]);
    if (activeStep !== 0) {
      setIsContextSubmitted(true);
      if (
        contextAnswers[activeStep - 1]?.optimized?.length === 0 ||
        contextAnswers[activeStep - 1]?.protected?.length === 0 ||
        contextAnswers[activeStep - 1]?.developer?.length === 0 ||
        contextAnswers[activeStep - 1]?.textAnswer === "" ||
        contextAnswers[activeStep - 1] === undefined ||
        contextAnswers[activeStep - 1]?.optimized === undefined ||
        contextAnswers[activeStep - 1]?.protected === undefined ||
        contextAnswers[activeStep - 1]?.developer === undefined ||
        contextAnswers[activeStep - 1]?.textAnswer === undefined
      ) {
        setIsOpenSnack(true);
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setIsContextSubmitted(false);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setIsContextSubmitted(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fetchContext = async () => {
    const contextRandomizeService = new ApiService<ContextResponse, Context[]>(
      "context",
      `randomize/5`
    );

    const response = await contextRandomizeService.getAll();
    // console.log(response);
    setContext(response.message);
  };

  useEffect(() => {
    fetchContext();
  }, []);

  const handleFinish = () => {
    // You can handle storing context answers in context or wherever necessary
    // console.log("Context Answers:", contextAnswers);

    setIsContextSubmitted(true);

    if (
      contextAnswers[activeStep - 1]?.optimized?.length === 0 ||
      contextAnswers[activeStep - 1]?.protected?.length === 0 ||
      contextAnswers[activeStep - 1]?.developer?.length === 0 ||
      contextAnswers[activeStep - 1]?.textAnswer === "" ||
      contextAnswers[activeStep - 1] === undefined ||
      contextAnswers[activeStep - 1]?.optimized === undefined ||
      contextAnswers[activeStep - 1]?.protected === undefined ||
      contextAnswers[activeStep - 1]?.developer === undefined ||
      contextAnswers[activeStep - 1]?.textAnswer === undefined
    ) {
      setIsOpenSnack(true);
    } else {
      setSurveyAnswers((prevAnswers) => ({
        ...prevAnswers,
        answers: contextAnswers,
      }));
      setIsContextSubmitted(false);
      if (handleSectionNext) handleSectionNext();
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CommonSnackbar
        open={openSnack}
        handleClose={() => setIsOpenSnack(false)}
      />
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
            context={context[activeStep - 1]}
            index={activeStep}
            contextAnswers={contextAnswers}
            setContextAnswers={setContextAnswers}
            isContextSubmitted={isContextSubmitted}
          />
        )}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            onClick={() => {
              if (activeStep === 0) {
                if (handleSectionBack) handleSectionBack();
              } else {
                handleBack();
              }
            }}
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
