import React, { useEffect, useState } from "react";
import { biasService } from "../../../services/utilities/provider";
import { Bias } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { Skeleton } from "@mui/material";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";

const Bias = () => {
  const [biasQuestions, setBiasQuestions] = useState<Bias[]>([]);

  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();

  const [isLoading, setIsLoading] = useState(true);

  const fetchBias = async () => {
    const response = await biasService?.getAll();
    console.log(response);
    setBiasQuestions(response.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBias();
  }, []);

  const handleQuestionChange = (
    questionIndex: number,
    selectedOption: string
  ) => {
    setSurveyAnswers((prevAnswers) => ({
      ...prevAnswers,
      bias: {
        ...prevAnswers.bias,
        [questionIndex]: selectedOption,
        // [biasQuestions[questionIndex]._id]: selectedOption,
      },
    }));
  };

  return isLoading ? (
    <>
      <Skeleton variant="rounded" width={"100%"} height={60} animation="wave" />
      <Skeleton variant="rounded" width={"100%"} height={60} animation="wave" />
      <Skeleton variant="rounded" width={"100%"} height={60} animation="wave" />
    </>
  ) : (
    <>
      {biasQuestions.map((question, index) => (
        <CommonSwitchComponent
          question={question.question}
          selectedOption={surveyAnswers?.bias[index] || ""}
          choices={question.options}
          key={question._id}
          onOptionChange={(selectedOption) =>
            handleQuestionChange(index, selectedOption)
          }
        />
      ))}
    </>
  );
};

export default Bias;
