import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

interface CommonSelectComponentProps {
  question: string;
  choices: string[];
  additionalText?: string;
  selectedOption?: string;
  onOptionChange?: (selectedOption: string) => void;
}

const CommonSelectComponent: React.FC<CommonSelectComponentProps> = ({
  question,
  choices,
  selectedOption,
  onOptionChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (onOptionChange) onOptionChange(event.target.value as string);
  };

  return (
    <>
      <FormControl fullWidth>
        <Typography>{question}</Typography>
        <Select
          value={selectedOption}
          label=""
          size="small"
          onChange={handleChange}
          sx={{ marginTop: 0.75 }}
        >
          {choices.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CommonSelectComponent;
