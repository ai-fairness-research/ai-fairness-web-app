import React from "react";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";
import { TextField, Typography } from "@mui/material";

interface ProlificPageProps {
  isIdSubmitted: boolean;
}

const ProlificPage: React.FC<ProlificPageProps> = ({ isIdSubmitted }) => {
  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();

  const handleProId = (e) => {
    setSurveyAnswers({ ...surveyAnswers, ["proId"]: e.target.value });
  };

  const doesItHaveErr = (val: string): boolean | undefined => {
    if (isIdSubmitted) {
      if (val === "" || val === undefined) return true;
      return false;
    }
    return false;
  };

  return (
    <>
      <Typography sx={{ mt: 2, fontWeight: 500, fontSize: 18 }}>
        Please Enter Prolific Id
      </Typography>
      <TextField
        label="Proilific ID"
        value={surveyAnswers.proId}
        onChange={handleProId}
        sx={{ marginBottom: 2 }}
        size="small"
        fullWidth
        error={doesItHaveErr(surveyAnswers?.proId)}
      />
    </>
  );
};

export default ProlificPage;
