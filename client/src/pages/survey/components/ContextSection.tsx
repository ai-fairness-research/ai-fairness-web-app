import React from "react";
import { Box, Divider, TextField, Typography } from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";
import { FACTORS } from "../../../constants";
import { Context, ContextAnswer } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { LOCALHOST_URL } from "../../../services/api";
import { secondary } from "../../../theme/themeColors";

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
    selectedOption: string,
    field: string,
    checked?: boolean
  ) => {
    const updatedContextAnswers = [...contextAnswers];
    let updatedAnswer = { ...contextAnswers[index - 1] };
    if (field === "protected" || field === "optimized") {
      if (!updatedAnswer[field]) updatedAnswer[field] = [];
      let updatedChoice = [...updatedAnswer[field]];
      if (checked) updatedChoice = [...updatedChoice, selectedOption];
      else
        updatedChoice = updatedChoice.filter((itm) => itm !== selectedOption);
      updatedAnswer = { ...updatedAnswer, [field]: updatedChoice };
    } else if (field === "developer") {
      updatedAnswer = { ...updatedAnswer, [field]: [selectedOption] };
    } else {
      updatedAnswer = { ...updatedAnswer, [field]: selectedOption };
    }

    updatedAnswer["context"] = context.context;
    updatedContextAnswers[index - 1] = updatedAnswer;
    // console.log({ updatedContextAnswers });

    setContextAnswers(updatedContextAnswers);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          position: "relative",
          height: 200,
          "&::before": {
            content: '""',
            position: "absolute",
            height: 200,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <img
          src={`${LOCALHOST_URL}/context/image/${context?._id}`}
          style={{
            objectFit: "cover",
            height: 200,
            width: "100%",
            backgroundPosition: "center",
          }}
          loading="lazy"
        />
        <Typography
          sx={{
            fontWeight: 600,
            position: "absolute",
            top: "50%",
            left: "50%",
            color: secondary.main,
            fontSize: 28,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          Context: {context?.context}
        </Typography>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: 600,
          //   fontStyle: "italic",
        }}
      >
        Problem: {context?.problem}
      </Typography>
      <CommonCheckboxComponent
        question={
          "Which of the following protected identities be bias the outcome of the model (check all that apply)?"
        }
        choices={FACTORS}
        selectedOptions={contextAnswers?.[index - 1]?.protected || []}
        onOptionChange={(selectedOption, checked) =>
          handleContextChange(selectedOption, "protected", checked)
        }
      />
      <CommonCheckboxComponent
        question={
          "Typically, a handful of protected characteristics can be optimized, when building the model, the designer should focus on limiting potential bias based on (select up to 2):"
        }
        choices={FACTORS}
        selectedOptions={contextAnswers?.[index - 1]?.optimized || []}
        onOptionChange={(selectedOption, checked) =>
          handleContextChange(selectedOption, "optimized", checked)
        }
      />
      <CommonSwitchComponent
        question={"The developer should ensure that model:"}
        choices={context.options}
        selectedOption={contextAnswers?.[index - 1]?.developer?.[0] || ""}
        onOptionChange={(selectedOption) =>
          handleContextChange(selectedOption, "developer")
        }
      />
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontWeight: 500 }}>
          In this evaluation, you indicated that:
        </Typography>
        <Typography>
          {contextAnswers[index - 1]?.protected?.map((itm) => itm + ",")}
        </Typography>
        <Typography sx={{ fontWeight: 500 }}>
          were important and that the model output should ensure that:
        </Typography>
        <Typography>
          {contextAnswers[index - 1]?.optimized?.map((itm) => itm + ", ")}
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 500 }}>
        Can you provide a brief rationale for your choice?
      </Typography>
      <TextField
        multiline
        rows={4}
        value={contextAnswers?.[index - 1]?.textAnswer || ""}
        onChange={(e) => handleContextChange(e.target.value, "textAnswer")}
      />
    </Box>
  );
};

export default ContextSection;
