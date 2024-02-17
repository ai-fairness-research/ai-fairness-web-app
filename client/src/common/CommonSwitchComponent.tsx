import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

// interface FormProps {
//   value: string;
//   label: string;
// }

interface CommonSwitchComponentProps {
  question: string;
  choices: string[];
}

const CommonSwitchComponent: React.FC<CommonSwitchComponentProps> = ({
  question,
  choices,
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
            Select one option.
          </Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {choices.map((choice) => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Radio />}
              label={choice}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default CommonSwitchComponent;
