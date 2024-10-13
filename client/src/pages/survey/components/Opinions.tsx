import React, { useCallback, useEffect, useState } from "react";
import { ATTITUDE_CHOICES, ATTITUDE_QUESTIONS } from "../../../constants";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";
import {
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { error, secondary } from "../../../theme/themeColors";
import ModelImg from "../../../assets/images/attitude.jpg";

interface OpinionsProps {
  isOpinionsSubmitted: boolean;
}

const Opinions: React.FC<OpinionsProps> = ({ isOpinionsSubmitted }) => {
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
      <img
        src={ModelImg}
        alt="img"
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 600,
                borderBottom: `1px solid ${secondary[400]}`,
                borderRight: `1px solid ${secondary[400]}`,
              }}
            >
              {/* Algorithms should… */}
              To what extent do you agree or disagree with the following
              statements about how algorithms should operate?
            </TableCell>
            {ATTITUDE_CHOICES.map((choice) => (
              <TableCell
                key={choice}
                sx={{
                  fontWeight: 600,
                  borderBottom: `1px solid ${secondary[400]}`,
                }}
              >
                {choice}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {ATTITUDE_QUESTIONS.map((question, index: number) => (
            <OptionSwitchComponent
              selectedOption={attitudeAnswers[index] || ""}
              onOptionChange={(selectedOption) =>
                handleAttitudeChange(index, selectedOption)
              }
              question={question}
              isOpinionsSubmitted={isOpinionsSubmitted}
              attitudeAnswers={attitudeAnswers}
              index={index}
              key={index}
            />
          ))}
        </TableBody>
      </Table>

      {/* {ATTITUDE_QUESTIONS.map((question, index: number) => (
        <CommonSwitchComponent
          question={question}
          choices={ATTITUDE_CHOICES}
          key={question}
          selectedOption={attitudeAnswers[index] || ""}
          onOptionChange={(selectedOption) =>
            handleAttitudeChange(index, selectedOption)
          }
          isError={doesItHaveErr(attitudeAnswers[index])}
        />
      ))} */}
    </>
  );
};

export default Opinions;

interface OptionSwitchComponentProps {
  selectedOption?: string;
  onOptionChange?: (selectedOption: string) => void;
  question: string;
  isOpinionsSubmitted: boolean;
  attitudeAnswers: string[];
  index: number;
}

const OptionSwitchComponent: React.FC<OptionSwitchComponentProps> = ({
  selectedOption,
  onOptionChange,
  question,
  isOpinionsSubmitted,
  attitudeAnswers,
  index,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onOptionChange)
      onOptionChange((event.target as HTMLInputElement).value);
  };

  const doesItHaveErr = useCallback(
    (val: string): boolean | undefined => {
      if (isOpinionsSubmitted) {
        if (val === "" || val === undefined || val.length === 0) return true;
        return false;
      }
      return false;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpinionsSubmitted, attitudeAnswers]
  );

  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            color: doesItHaveErr(attitudeAnswers[index]) ? error.main : "#000",
            fontWeight: 500,
            borderRight: `1px solid ${secondary[400]}`,
          }}
        >
          {question}
        </TableCell>
        {ATTITUDE_CHOICES.map((choice, index: number) => (
          <TableCell
            key={choice}
            sx={{
              // border: `1px solid ${secondary[300]}`,
              textAlign: "center",
            }}
          >
            <Radio
              checked={choice === selectedOption}
              onChange={handleChange}
              value={choice}
              name={`radio-buttons-${index}`}
            />
          </TableCell>
        ))}
      </TableRow>
    </>
  );
};
