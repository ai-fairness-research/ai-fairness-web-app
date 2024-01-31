import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const SwitchComponent: React.FC = () => {
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <Typography component="span" sx={{ color: "#000", fontWeight: 500 }}>
            Question text goes here.{" "}
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
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="choice answer"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="choice answer"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="choice answer"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default SwitchComponent;
