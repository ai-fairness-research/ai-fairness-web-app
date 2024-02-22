import React from "react";
import { DEMO_QUESTIONS } from "../../../constants";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CommonCheckboxComponent from "../../../common/CommonCheckboxComponent";

const Demographics = () => {
  return (
    <>
      <FormControl fullWidth>
        <Typography>In what year were you born?</Typography>
        <TextField size="small" />
      </FormControl>
      {DEMO_QUESTIONS.map((itm) =>
        itm.type === "select" ? (
          <FormControl fullWidth key={itm.question}>
            <Typography>{itm.question}</Typography>
            <Select
              // value={age}
              label=""
              size="small"
              // onChange={handleChange}
              sx={{ marginTop: 0.75 }}
            >
              {itm.options.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : itm.type === "mcq" ? (
          <CommonCheckboxComponent
            key={itm.question}
            question={itm.question}
            choices={itm.options}
          />
        ) : (
          <CommonSwitchComponent
            question={itm.question}
            choices={itm.options}
            key={itm.question}
          />
        )
      )}
    </>
  );
};

export default Demographics;
