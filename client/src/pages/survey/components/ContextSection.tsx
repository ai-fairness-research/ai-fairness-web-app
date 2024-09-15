import React, { useCallback } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";
import { FACTORS } from "../../../constants";
import { Context, ContextAnswer } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { error } from "../../../theme/themeColors";
import { CommonWrapper } from "../../../common/CommonBox";
import DatasetImg from "../../../assets/images/dataset.jpg";
import ModelImg from "../../../assets/images/model.jpg";
import RankingForm from "./Ranking";

interface ContextSectionProps {
  context: Context;
  index: number;
  contextAnswers: ContextAnswer[];
  setContextAnswers: React.Dispatch<React.SetStateAction<ContextAnswer[]>>;
  isContextSubmitted?: boolean;
}

const ContextSection: React.FC<ContextSectionProps> = ({
  context,
  index,
  contextAnswers,
  setContextAnswers,
  isContextSubmitted,
}) => {
  const handleContextChange = (
    selectedOption: string,
    field: string,
    checked?: boolean,
    ranking?: string[]
  ) => {
    const updatedContextAnswers = [...contextAnswers];
    let updatedAnswer = { ...contextAnswers[index - 1] };
    if (field === "modelImpact" || field === "buildFocus") {
      if (!updatedAnswer[field]) updatedAnswer[field] = [];
      let updatedChoice = [...updatedAnswer[field]];
      if (checked) updatedChoice = [...updatedChoice, selectedOption];
      else
        updatedChoice = updatedChoice.filter((itm) => itm !== selectedOption);
      updatedAnswer = { ...updatedAnswer, [field]: updatedChoice };
    } else if (field === "ranking") {
      if (!ranking) {
        ranking = [];
      }
      updatedAnswer = { ...updatedAnswer, [field]: ranking };
    } else {
      updatedAnswer = { ...updatedAnswer, [field]: selectedOption };
    }

    updatedAnswer["context"] = context.title;
    updatedContextAnswers[index - 1] = updatedAnswer;
    // console.log({ updatedContextAnswers });

    setContextAnswers(updatedContextAnswers);
  };

  const doesItHaveErr = useCallback(
    (val: string | string[]): boolean | undefined => {
      if (isContextSubmitted) {
        if (val === "" || val === undefined || val.length === 0) return true;
        return false;
      }
      return false;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isContextSubmitted, contextAnswers]
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 28,
          textAlign: "center",
        }}
      >
        {context?.context}: {context?.title}
      </Typography>
      {/* </Box> */}
      <CommonWrapper>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Problem: {context?.problem}
        </Typography>

        <Typography sx={{ my: 2 }}>
          <b style={{ marginRight: 4 }}>Example Application:</b>{" "}
          {context?.example}
        </Typography>

        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
            Datasets:
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              sm={12}
              md={4}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={DatasetImg}
                alt="datasets"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Grid>
            <Grid item sm={12} md={8}>
              {context?.options?.map(
                (option) =>
                  option !== "" && (
                    <Typography sx={{ my: 1 }} key={option}>
                      {" "}
                      - {option}
                    </Typography>
                  )
              )}
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
            Model:
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              sm={12}
              md={4}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={ModelImg}
                alt="model"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Grid>
            <Grid item sm={12} md={8}>
              {context?.reasoning?.map(
                (option) =>
                  option !== "" && (
                    <Typography sx={{ my: 1 }} key={option}>
                      - {option}
                    </Typography>
                  )
              )}
            </Grid>
          </Grid>
        </Box>
      </CommonWrapper>

      <Typography sx={{ fontWeight: 600, fontSize: 28 }}>The Audit</Typography>

      <CommonWrapper>
        <Typography
          sx={{
            fontWeight: 500,
            color: doesItHaveErr(contextAnswers?.[index - 1]?.factors)
              ? error.main
              : "#000",
            mb: 2,
          }}
        >
          1. Are there any factors (e.g., data, community or cultural practices)
          that the model might not be considering?
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={4}
          value={contextAnswers?.[index - 1]?.factors || ""}
          onChange={(e) => handleContextChange(e.target.value, "factors")}
          error={doesItHaveErr(contextAnswers?.[index - 1]?.factors)}
          sx={{ mb: 4 }}
        />

        <CommonSwitchComponent
          question={
            "2. Is there a high risk of negative consequences if the model makes an incorrect decision?"
          }
          choices={["Very High ", "High", "Moderate", "Low", "Very Low"]}
          selectedOption={contextAnswers?.[index - 1]?.decision || ""}
          onOptionChange={(selectedOption) =>
            handleContextChange(selectedOption, "decision")
          }
          isError={doesItHaveErr(contextAnswers?.[index - 1]?.decision)}
          direction={true}
        />

        <Typography
          sx={{
            fontWeight: 500,
            color: doesItHaveErr(contextAnswers?.[index - 1]?.predictions)
              ? error.main
              : "#000",
            mt: 4,
            mb: 2,
          }}
        >
          3. What do you believe to be the potential consequences if the model
          makes a mistake in its predictions?
        </Typography>
        <TextField
          multiline
          rows={4}
          value={contextAnswers?.[index - 1]?.predictions || ""}
          onChange={(e) => handleContextChange(e.target.value, "predictions")}
          error={doesItHaveErr(contextAnswers?.[index - 1]?.predictions)}
          fullWidth
          sx={{ mb: 4 }}
        />

        <CommonCheckboxComponent
          question={
            "4. Which of the following groups in your community might be negatively impacted by the model's decisions?"
          }
          choices={FACTORS}
          selectedOptions={contextAnswers?.[index - 1]?.modelImpact || []}
          onOptionChange={(selectedOption, checked) =>
            handleContextChange(selectedOption, "modelImpact", checked)
          }
          isError={doesItHaveErr(contextAnswers?.[index - 1]?.modelImpact)}
          additionalText="Can Select Multiple Options"
          multicol={true}
        />
        <br />
        <br />
        <CommonCheckboxComponent
          question={
            "5. When building the model, which factor do you believe is the most important to focus on to limit potential bias?"
          }
          choices={FACTORS}
          selectedOptions={contextAnswers?.[index - 1]?.buildFocus || []}
          onOptionChange={(selectedOption, checked) =>
            handleContextChange(selectedOption, "buildFocus", checked)
          }
          isError={doesItHaveErr(contextAnswers?.[index - 1]?.buildFocus)}
          additionalText="Can Select Multiple Options"
          multicol={true}
        />
        <RankingForm
          handleContextChange={handleContextChange}
          contextAnswer={contextAnswers?.[index - 1]}
        />
      </CommonWrapper>
    </Box>
  );
};

export default ContextSection;
