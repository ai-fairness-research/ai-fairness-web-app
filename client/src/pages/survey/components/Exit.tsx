import { TextField, Typography } from "@mui/material";
import React, { useCallback } from "react";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";

interface ExitProps {
  isExitSubmitted: boolean;
}

const Exit: React.FC<ExitProps> = ({ isExitSubmitted }) => {
  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();

  const handleExitChange = (selectedOption: string, field: string) => {
    const updatedExitAnswers = { ...surveyAnswers };
    updatedExitAnswers[field] = selectedOption;
    setSurveyAnswers(updatedExitAnswers);
  };

  const doesItHaveErr = useCallback(
    (val: string): boolean | undefined => {
      if (isExitSubmitted) {
        if (val === "" || val === undefined) return true;
        return false;
      }
      return false;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isExitSubmitted]
  );

  return (
    <>
      <Typography>Thank you for participating!</Typography>
      <Typography>
        Our research team is interested in hearing more about your experiences.
        Would you be interested in participating in a comprehensive interview on
        algorithmic bias? If you're up for it, please share your email address,
        and if chosen, we'll compensate you for your time.
      </Typography>
      <CommonSwitchComponent
        question=""
        choices={[
          "Yes, I would like to participate",
          "No, I do not want to participate",
        ]}
        selectedOption={surveyAnswers?.isInterested || ""}
        onOptionChange={(selectedOption) =>
          handleExitChange(selectedOption, "isInterested")
        }
        isError={doesItHaveErr(surveyAnswers?.isInterested)}
      />

      {surveyAnswers?.isInterested === "Yes, I would like to participate" && (
        <>
          <Typography sx={{ fontWeight: 500 }}>
            If Yes, Please enter your email
          </Typography>
          <TextField
            label="Enter your email"
            value={surveyAnswers?.email || ""}
            onChange={(e) => handleExitChange(e.target.value, "email")}
            error={doesItHaveErr(surveyAnswers?.email)}
          />
        </>
      )}
    </>
  );
};

export default Exit;
