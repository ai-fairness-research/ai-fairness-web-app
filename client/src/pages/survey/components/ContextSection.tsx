import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";
import { FACTORS } from "../../../constants";
import { Context, ContextAnswer } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";

interface ContextSectionProps {
  context: Context;
  index: number;
  contextAnswers: ContextAnswer[];
  setContextAnswers: React.Dispatch<React.SetStateAction<ContextAnswer[]>>;
}

const ContextSection: React.FC<ContextSectionProps> = ({
  context,
  index,
  contextAnswers,
  setContextAnswers,
}) => {
  const handleContextChange = (
    questionIndex: number,
    selectedOption: string,
    field: string
  ) => {
    setContextAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const currentAnswer = updatedAnswers[index]; // Get the current answer object
      const updatedAnswer = { ...currentAnswer }; // Create a copy of the current answer object to modify

      // Update the specific field in the answer object based on the provided field parameter
      if (field === "developer") {
        updatedAnswer[field] = [selectedOption];
      } else if (field === "textAnswer") {
        updatedAnswer[field] = selectedOption;
      } else {
        // Handle other fields if needed
      }

      // Update the answer object at the specified index in the array
      updatedAnswers[index - 1] = updatedAnswer;

      console.log(updatedAnswers);
      return updatedAnswers;
    });
  };
  // const handleContextChange = (
  //   questionIndex: number,
  //   selectedOption: string,
  //   field: string
  // ) => {
  //   console.log(questionIndex, selectedOption, field);
  //   setContextAnswers((prevAnswers) => {
  //     const updatedAnswers = [...prevAnswers];
  //     // eslint-disable-next-line no-unsafe-optional-chaining
  //     const newAnswer = {
  //       context: [],
  //       protected: [],
  //       optimised: [],
  //       developer: [selectedOption],
  //     };

  //     updatedAnswers[index] = newAnswer;
  //     // updatedAnswers[field] = [selectedOption];
  //     console.log(updatedAnswers);
  //     return updatedAnswers;
  //   });
  // };

  console.log(contextAnswers);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography sx={{ fontWeight: 500 }}>
        Context: {context.context}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: 600,
          //   fontStyle: "italic",
        }}
      >
        Problem: {context.problem}
      </Typography>
      <CommonCheckboxComponent
        question={
          "Which of the following protected identities be bias the outcome of the model (check all that apply)?"
        }
        choices={FACTORS}
      />
      <CommonCheckboxComponent
        question={
          "Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):"
        }
        choices={FACTORS}
      />
      <CommonSwitchComponent
        question={"The developer should ensure that model:"}
        choices={context.options}
        selectedOption={contextAnswers[index - 1]?.developer[0] || ""}
        onOptionChange={(selectedOption) =>
          handleContextChange(index, selectedOption, "developer")
        }
      />
      <Box>
        <Typography> In this evaluation, you indicated that:</Typography>
        <Typography>
          [options from the second question in the scenario]
        </Typography>
        <Typography>
          were important and that the model output should ensure that:
        </Typography>
        <Typography>
          [text selection from the third question in the scenario]
        </Typography>
      </Box>
      <Typography>
        Can you provide a brief rationale for your choice?
      </Typography>
      <TextField
        multiline
        rows={4}
        // value={contextAnswers[index - 1]?.textAnswer || ""}
        // onChange={(e) =>
        //   handleContextChange(index, e.target.value, "textAnswer")
        // }
      />
    </Box>
  );
};

export default ContextSection;
