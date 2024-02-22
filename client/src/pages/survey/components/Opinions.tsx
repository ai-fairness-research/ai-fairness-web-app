import React, { useEffect, useState } from "react";
import { ATTITUDE_CHOICES, ATTITUDE_QUESTIONS } from "../../../constants";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";

const Opinions = () => {
  const { setSurveyAnswers } = useSurveyAnswerContext();
  const [attitudeAnswers, setAttitudeAnswers] = useState<string[]>([]);

  // Update surveyAnswers when attitudeAnswers change
  useEffect(() => {
    setSurveyAnswers((prevAnswers) => ({
      ...prevAnswers,
      attitude: attitudeAnswers,
    }));
  }, [attitudeAnswers, setSurveyAnswers]);

  // Handle change of attitude answer
  const handleAttitudeChange = (
    questionIndex: number,
    selectedOption: string
  ) => {
    setAttitudeAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = selectedOption;
      return updatedAnswers;
    });
  };

  return (
    <>
      {ATTITUDE_QUESTIONS.map((question, index: number) => (
        <CommonSwitchComponent
          question={question}
          choices={ATTITUDE_CHOICES}
          key={question}
          selectedOption={attitudeAnswers[index] || ""}
          onOptionChange={(selectedOption) =>
            handleAttitudeChange(index, selectedOption)
          }
        />
      ))}
    </>
  );
};

export default Opinions;
