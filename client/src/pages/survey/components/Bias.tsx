import React, { useEffect, useState } from "react";
import { biasService } from "../../../services/utilities/provider";
import { Bias } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { Divider, Skeleton, Typography } from "@mui/material";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface BiasProps {
  isBiasedSubmitted: boolean;
}

const Bias: React.FC<BiasProps> = ({ isBiasedSubmitted }) => {
  const [biasQuestions, setBiasQuestions] = useState<Bias[]>([]);

  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();

  const [isLoading, setIsLoading] = useState(true);

  const fetchBias = async () => {
    const response = await biasService?.getAll();
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
    const biasAnswers = [...surveyAnswers.bias];
    biasAnswers[questionIndex] = selectedOption;
    setSurveyAnswers({ ...surveyAnswers, ["bias"]: biasAnswers });
  };

  const doesItHaveErr = (val: string): boolean | undefined => {
    if (isBiasedSubmitted) {
      if (val === "" || val === undefined) return true;
      return false;
    }
    return false;
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
          isError={doesItHaveErr(surveyAnswers?.bias[index])}
        />
      ))}
      {(surveyAnswers.bias[0] === "Not knowledgeable at all" ||
        surveyAnswers.bias[0] === "Slightly knowledgeable" ||
        surveyAnswers.bias[1] === "Not concerned" ||
        surveyAnswers.bias[1] === "Slightly concerned") && (
        <>
          <Divider />
          <Typography component={"h4"} variant="h4" sx={{ mb: 4 }}>
            Learning about bias in algorithmic systems
          </Typography>
          <LiteYouTubeEmbed id="BtgcuhQ0cks" title="Bias in AI is a Problem" />
        </>
      )}
    </>
  );
};

export default Bias;
