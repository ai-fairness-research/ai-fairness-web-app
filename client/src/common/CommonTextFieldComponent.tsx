import React from "react";
import { TextField, Typography } from "@mui/material";
import { error, secondary } from "../theme/themeColors";

interface CommonTextFieldComponentProps {
  question: string;
  value: string;
  onValueChange?: (text: string) => void;
  helperText?: string;
  isError?: boolean;
  classes?: object;
}

const CommonTextFieldComponent: React.FC<CommonTextFieldComponentProps> = ({
  question,
  value,
  onValueChange,
  helperText = "",
  isError = false,
  classes = {},
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) onValueChange(event.target.value);
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: 500,
          color: isError ? error.main : "#000",
          ...classes,
        }}
      >
        {question}
      </Typography>
      {helperText && (
        <Typography
          sx={{
            fontStyle: "italic",
            color: secondary[400],
            fontSize: 15,
            mb: 2,
          }}
        >
          {helperText}
        </Typography>
      )}
      <TextField
        multiline
        fullWidth
        rows={4}
        value={value || ""}
        onChange={handleTextChange}
        error={isError}
        sx={{ mb: 4 }}
      />
    </>
  );
};

export default CommonTextFieldComponent;
