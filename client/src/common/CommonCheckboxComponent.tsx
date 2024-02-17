import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import React from "react";

interface CommonCheckboxComponentProps {
  question: string;
  choices: string[];
  additionalText?: string;
}

const CommonCheckboxComponent: React.FC<CommonCheckboxComponentProps> = ({
  question,
  choices,
  additionalText,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <Typography component="span" sx={{ color: "#000", fontWeight: 500 }}>
            {question}{" "}
          </Typography>
          <Typography
            component="span"
            sx={{ color: "#94A4C4", fontStyle: "italic" }}
          >
            {additionalText}
          </Typography>
        </FormLabel>
        <FormGroup>
          {choices.map((choice) => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Checkbox />}
              label={choice}
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CommonCheckboxComponent;
