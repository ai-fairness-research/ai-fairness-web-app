import { TextField, Typography } from "@mui/material";
import React from "react";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";

const Exit = () => {
  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();

  const handleExitChange = (selectedOption: string, field: string) => {
    const updatedExitAnswers = { ...surveyAnswers };

    updatedExitAnswers[field] = selectedOption;

    console.log({ updatedExitAnswers });
    setSurveyAnswers(updatedExitAnswers);
  };

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
      />
      <Typography sx={{ fontWeight: 500 }}>
        If Yes, Please enter your email
      </Typography>
      <TextField
        value={surveyAnswers?.email || ""}
        onChange={(e) => handleExitChange(e.target.value, "email")}
      />
    </>
  );
};

export default Exit;
