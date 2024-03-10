import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { error } from "../theme/themeColors";

interface CommonCheckboxComponentProps {
  question: string;
  choices: string[];
  additionalText?: string;
  selectedOptions?: string[];
  onOptionChange?: (selectedOption: string, checked: boolean) => void;
  isError?: boolean;
  helperText?: string;
}

const CommonCheckboxComponent: React.FC<CommonCheckboxComponentProps> = ({
  question,
  choices,
  additionalText,
  selectedOptions = [],
  onOptionChange,
  isError = false,
  helperText = "Select at least one option",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    if (onOptionChange) onOptionChange(name, checked);
  };

  return (
    <>
      <FormControl error={isError}>
        <FormLabel id="check-box">
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
            {additionalText}
          </Typography>
        </FormLabel>
        <FormGroup>
          {choices.map((choice) => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={
                <Checkbox
                  name={choice}
                  onChange={handleChange}
                  checked={selectedOptions?.includes(choice) || false}
                />
              }
              label={choice}
            />
          ))}
        </FormGroup>
        {isError && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CommonCheckboxComponent;
