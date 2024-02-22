import React, { createContext, useContext, useState, ReactNode } from "react";
import { SurveyAnswerPayload } from "../services/utilities/types";

interface SurveyAnswerContextProps {
  surveyAnswers: SurveyAnswerPayload;
  setSurveyAnswers: React.Dispatch<React.SetStateAction<SurveyAnswerPayload>>;
}

const SurveyAnswerContext = createContext<SurveyAnswerContextProps | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useSurveyAnswerContext = (): SurveyAnswerContextProps => {
  const context = useContext(SurveyAnswerContext);
  if (!context) {
    throw new Error(
      "useSurveyAnswerContext must be used within a SurveyAnswerProvider"
    );
  }
  return context;
};

interface SurveyAnswerProviderProps {
  children: ReactNode;
}

export const SurveyAnswerProvider: React.FC<SurveyAnswerProviderProps> = ({
  children,
}) => {
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswerPayload>({
    email: "",
    bornYear: "",
    gender: "",
    home: "United States",
    education: "",
    living_desc: "",
    isReligion: "",
    religion: "",
    isMinority: "",
    minority: [],
    bias: [],
    answers: [],
    attitude: [],
  });

  const value: SurveyAnswerContextProps = {
    surveyAnswers,
    setSurveyAnswers,
  };

  return (
    <SurveyAnswerContext.Provider value={value}>
      {children}
    </SurveyAnswerContext.Provider>
  );
};
