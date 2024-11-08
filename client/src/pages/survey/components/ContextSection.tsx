import React, { useCallback } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";
import { FACTORS } from "../../../constants";
import { Context, ContextAnswer } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { secondary, text } from "../../../theme/themeColors";
import { CommonWrapper } from "../../../common/CommonBox";
import DatasetImg from "../../../assets/images/dataset.jpg";
import ModelImg from "../../../assets/images/model.jpg";
import RankingForm from "./Ranking";
import { BACKEND_URL } from "../../../services/api";
import { UserAnswer } from "./Audit";
import CommonTextFieldComponent from "../../../common/CommonTextFieldComponent";

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
    checked?: boolean
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
      <ContextTitle
        id={context._id}
        context={context.context}
        title={context.title}
      />
      <CommonWrapper>
        <Typography variant="h5">Scenario </Typography>
        <UserAnswer
          tipText={context?.example}
          content={context?.problem}
          classes={{
            fontSize: 18,
            fontWeight: 400,
            marginLeft: 1,
            color: text.primary,
          }}
          isEric={false}
        />

        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
            Datasets:
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={12} md={8}>
              {context?.options?.map(
                (option) =>
                  option !== "" && (
                    <Typography sx={{ my: 1 }} key={option}>
                      <b style={{ marginRight: 2 }}>{option.split(":")[0]}:</b>{" "}
                      {option.split(":")[1]}
                    </Typography>
                  )
              )}
            </Grid>
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
          </Grid>
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2, mt: 2 }}>
            Model:
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={12} md={8}>
              {context?.reasoning?.map(
                (option) =>
                  option !== "" && (
                    <Typography sx={{ my: 1 }} key={option}>
                      {option}
                    </Typography>
                  )
              )}
            </Grid>
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
          </Grid>
        </Box>
      </CommonWrapper>

      <Typography sx={{ fontWeight: 600, fontSize: 28 }}>The Audit</Typography>

      <CommonWrapper>
        <CommonTextFieldComponent
          question={
            "1. Are there any factors (e.g., data, community or cultural practices) that the model might not be considering?"
          }
          value={contextAnswers?.[index - 1]?.factors}
          onValueChange={(text) => handleContextChange(text, "factors")}
          isError={doesItHaveErr(contextAnswers?.[index - 1]?.factors)}
          helperText={
            "Responses to this question that demonstrate high thoughtfulness and creativity are eligible for an additional $1 incentive pay."
          }
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

        <CommonTextFieldComponent
          question={
            "3. What do you believe to be the potential consequences if the model makes a mistake in its predictions?"
          }
          value={contextAnswers?.[index - 1]?.predictions}
          onValueChange={(text) => handleContextChange(text, "predictions")}
          isError={doesItHaveErr(contextAnswers?.[index - 1]?.predictions)}
          helperText={
            "Responses to this question that demonstrate high thoughtfulness and creativity are eligible for an additional $1 incentive pay."
          }
          classes={{ mt: 4 }}
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
          isError={doesItHaveErr(contextAnswers?.[index - 1]?.ranking)}
          selectedOption={contextAnswers?.[index - 1]?.ranking || ""}
          onOptionChange={(selectedOption) =>
            handleContextChange(selectedOption, "ranking")
          }
          index={index - 1}
        />
      </CommonWrapper>
    </Box>
  );
};

export default ContextSection;

interface ContextTitleProps {
  id: string;
  context: string;
  title: string;
}

const ContextTitle: React.FC<ContextTitleProps> = ({ id, context, title }) => (
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
        borderRadius: 4,
      },
    }}
  >
    <img
      src={`${BACKEND_URL}/context/image/${id}`}
      style={{
        objectFit: "cover",
        height: 200,
        width: "100%",
        backgroundPosition: "center",
        borderRadius: 16,
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
      {context}: {title}
    </Typography>
  </Box>
);
