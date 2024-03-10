import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { error } from "../theme/themeColors";

interface CommonSwitchComponentProps {
  question: string;
  choices: string[];
  selectedOption?: string;
  onOptionChange?: (selectedOption: string) => void;
  additionalTextField?: boolean;
  helperText?: string;
  isError?: boolean;
}

const CommonSwitchComponent: React.FC<CommonSwitchComponentProps> = ({
  question,
  choices,
  selectedOption,
  onOptionChange,
  additionalTextField = false,
  helperText = "Select one option at least",
  isError = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onOptionChange)
      onOptionChange((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <FormControl error={isError}>
        {question !== "" && (
          <FormLabel id="radio-buttons-group-label">
            <Typography
              component="span"
              sx={{ color: isError ? error.main : "#000", fontWeight: 500 }}
            >
              {question}{" "}
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#94A4C4", fontStyle: "italic" }}
            >
              Select one option.
            </Typography>
          </FormLabel>
        )}

        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          name="radio-buttons-group"
          value={selectedOption}
          onChange={handleChange}
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
        {isError && <FormHelperText>{helperText}</FormHelperText>}
        {additionalTextField && (
          <>
            <Typography sx={{ fontStyle: "italic", mb: 0.5 }}>
              Not listed, please tell us
            </Typography>
            <TextField
              value={selectedOption}
              onChange={handleChange}
              size="small"
            />
          </>
        )}
      </FormControl>
    </>
  );
};

export default CommonSwitchComponent;
