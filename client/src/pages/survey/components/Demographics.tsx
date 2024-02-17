import React from "react";
import { DEMO_QUESTIONS } from "../../../constants";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";

const Demographics = () => {
  return (
    <>
      {DEMO_QUESTIONS.map((itm) =>
        itm.type === "select" ? (
          <FormControl fullWidth>
            <Typography>{itm.question}</Typography>
            <Select
              // labelId="demo-simple-select-label"
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
