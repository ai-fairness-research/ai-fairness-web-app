import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";
import { FACTORS } from "../../../constants";
import { Context } from "../../../services/utilities/types";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";

interface ContextSectionProps {
  context: Context;
}

const ContextSection: React.FC<ContextSectionProps> = ({ context }) => {
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
      <TextField multiline rows={4} />
    </Box>
  );
};

export default ContextSection;
