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

interface CommonCheckboxComponentProps {
  question: string;
  choices: string[];
  additionalText?: string;
  selectedOptions?: string[];
  onOptionChange?: (selectedOption: string, checked: boolean) => void;
  helperText?: string;
}

const CommonCheckboxComponent: React.FC<CommonCheckboxComponentProps> = ({
  question,
  choices,
  additionalText,
  selectedOptions = [],
  onOptionChange,
  helperText = "",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    if (onOptionChange) onOptionChange(name, checked);
  };

  return (
    <>
      <FormControl>
        <FormLabel id="check-box">
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
        {helperText !== "" && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CommonCheckboxComponent;
