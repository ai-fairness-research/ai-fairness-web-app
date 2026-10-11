import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { ApiService } from "../../../services/utilities/provider";
import {
  Context,
  ContextAnswer,
  ContextResponse,
} from "../../../services/utilities/types";
import ContextSection from "./ContextSection";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";
import CommonSnackbar from "../../../common/CommonSnackbar";
import Audit from "./Audit";

const steps = [
  "Instructions",
  "Scenario 1",
  "Scenario 2",
  "Scenario 3",
  // "Scenario 4",
  // "Scenario 5",
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

  // context: string;
  // factors: string;
  // decision: string;
  // predictions: string;
  // modelImpact: string[];
  // buildFocus: string[];
  // ranking: string[];

  const handleNext = () => {
    // console.log(contextAnswers[activeStep - 1]);
    if (activeStep !== 0) {
      setIsContextSubmitted(true);
      if (
        contextAnswers[activeStep - 1]?.modelImpact?.length === 0 ||
        contextAnswers[activeStep - 1]?.buildFocus?.length === 0 ||
        // contextAnswers[activeStep - 1]?.ranking?.length === 0 ||
        contextAnswers[activeStep - 1]?.factors === "" ||
        contextAnswers[activeStep - 1]?.decision === "" ||
        contextAnswers[activeStep - 1]?.predictions === "" ||
        contextAnswers[activeStep - 1] === undefined ||
        contextAnswers[activeStep - 1]?.modelImpact === undefined ||
        contextAnswers[activeStep - 1]?.buildFocus === undefined ||
        // contextAnswers[activeStep - 1]?.ranking === undefined ||
        contextAnswers[activeStep - 1]?.factors === undefined ||
        contextAnswers[activeStep - 1]?.decision === undefined ||
        contextAnswers[activeStep - 1]?.predictions === undefined
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

  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  
  const fetchContext = async () => {
    try {
      setIsLoading(true);
      setFetchError(null);
  
      const contextRandomizeService =
        new ApiService<ContextResponse, Context[]>(
          "context",
          "randomize/3"
        );
  
      const response = await contextRandomizeService.getAll();
      if (
          !Array.isArray(response.message) ||
          response.message.length === 0
        ) {
          throw new Error("No audit scenarios returned");
        }
    
        setContext(response.message);
      } catch (error) {
        console.error("Error loading audit scenarios:", error);
        setContext([]);
      }
    };
 
  useEffect(() => {
    fetchContext();
  }, []);

  const handleFinish = () => {
    // You can handle storing context answers in context or wherever necessary
    // console.log("Context Answers:", contextAnswers);

    setIsContextSubmitted(true);

    if (
      contextAnswers[activeStep - 1]?.modelImpact?.length === 0 ||
      contextAnswers[activeStep - 1]?.buildFocus?.length === 0 ||
      // contextAnswers[activeStep - 1]?.ranking?.length === 0 ||
      contextAnswers[activeStep - 1]?.factors === "" ||
      contextAnswers[activeStep - 1]?.decision === "" ||
      contextAnswers[activeStep - 1]?.predictions === "" ||
      contextAnswers[activeStep - 1] === undefined ||
      contextAnswers[activeStep - 1]?.modelImpact === undefined ||
      contextAnswers[activeStep - 1]?.buildFocus === undefined ||
      // contextAnswers[activeStep - 1]?.ranking === undefined ||
      contextAnswers[activeStep - 1]?.factors === undefined ||
      contextAnswers[activeStep - 1]?.decision === undefined ||
      contextAnswers[activeStep - 1]?.predictions === undefined
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

      if (isLoading) {
      return <Box>Loading audit scenarios...</Box>;
    }
    
    if (fetchError) {
      return (
        <Box>
          <p>{fetchError}</p>
          <Button onClick={fetchContext}>Try Again</Button>
        </Box>
      );
    }

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
          <Audit />
        ) : context[activeStep - 1] ? (
          <ContextSection
            context={context[activeStep - 1]}
            index={activeStep}
            contextAnswers={contextAnswers}
            setContextAnswers={setContextAnswers}
            isContextSubmitted={isContextSubmitted}
          />
        ) : (
          <Box sx={{ p: 3 }}>
            <Typography color="error">
              The audit scenario could not be loaded.
              Please refresh the page and try again.
            </Typography>
          </Box>
        )}
      
        {/* Navigation buttons */}
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
              activeStep === steps.length - 1
                ? handleFinish
                : handleNext
            }
            disabled={
              activeStep > 0 &&
              !context[activeStep - 1]
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


   
