import React, { useCallback } from "react";
import { DEMO_QUESTIONS } from "../../../constants";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { FormControl, TextField, Typography } from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";
import { useSurveyAnswerContext } from "../../../context/SurveyAnswerContext";
import CommonSelectComponent from "../../../common/CommonSelectComponent";
import { error } from "../../../theme/themeColors";

interface DemographicsProps {
  isDemoSubmitted: boolean;
}

const Demographics: React.FC<DemographicsProps> = ({ isDemoSubmitted }) => {
  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();

  const handleDemoChange = (
    selectedOption: string,
    field: string,
    checked?: boolean
  ) => {
    const updatedSurveysAnswers = { ...surveyAnswers };
    // let surveyField = updatedSurveysAnswers[field];
    if (field === "minority") {
      if (!updatedSurveysAnswers[field]) updatedSurveysAnswers[field] = [];
      if (checked)
        updatedSurveysAnswers[field] = [
          ...updatedSurveysAnswers[field],
          selectedOption,
        ];
      else
        updatedSurveysAnswers[field] = updatedSurveysAnswers[field].filter(
          (itm) => itm !== selectedOption
        );
    } else {
      updatedSurveysAnswers[field] = selectedOption;
    }
    console.log({ updatedSurveysAnswers });
    setSurveyAnswers(updatedSurveysAnswers);
  };

  const doesItHaveErr = useCallback(
    (val: string | string[]): boolean | undefined => {
      if (isDemoSubmitted) {
        if (val === "" || val === undefined || val?.length === 0) return true;
        return false;
      }
      return false;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDemoSubmitted]
  );

  return (
    <>
      <FormControl fullWidth>
        <Typography
          sx={{
            color: doesItHaveErr(surveyAnswers.birthYear) ? error.main : "#000",
          }}
        >
          In what year were you born?
        </Typography>
        <TextField
          type="number"
          size="small"
          value={surveyAnswers.birthYear}
          onChange={(e) => handleDemoChange(e.target.value, "birthYear")}
          error={doesItHaveErr(surveyAnswers?.birthYear)}
        />
      </FormControl>
      {DEMO_QUESTIONS.map((itm) =>
        itm.type === "select" ? (
          <CommonSelectComponent
            question={itm.question}
            choices={itm.options}
            key={itm.question}
            selectedOption={surveyAnswers?.[itm.field] || ""}
            onOptionChange={(selectedOption) =>
              handleDemoChange(selectedOption, itm.field)
            }
          />
        ) : itm.type === "mcq" ? (
          <CommonCheckboxComponent
            key={itm.question}
            question={itm.question}
            choices={itm.options}
            selectedOptions={surveyAnswers?.[itm.field] || []}
            onOptionChange={(selectedOption, checked) =>
              handleDemoChange(selectedOption, itm.field, checked)
            }
            isError={doesItHaveErr(surveyAnswers?.[itm.field])}
            multicol={true}
          />
        ) : (
          <CommonSwitchComponent
            question={itm.question}
            choices={itm.options}
            key={itm.question}
            selectedOption={surveyAnswers?.[itm.field] || ""}
            onOptionChange={(selectedOption) =>
              handleDemoChange(selectedOption, itm.field)
            }
            additionalTextField={itm.field === "gender"}
            isError={doesItHaveErr(surveyAnswers?.[itm.field])}
            multicol={itm.options.length > 7}
          />
        )
      )}
    </>
  );
};

export default Demographics;
