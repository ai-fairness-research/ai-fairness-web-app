import { TextField, Typography } from "@mui/material";
import React from "react";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";

const Exit = () => {
  return (
    <>
      <Typography>Thank you for participating!</Typography>
      <Typography>
        Our research team is interested in hearing more about your experiences.
        Would you be interested in participating in a comprehensive interview on
        algorithmic bias? If you're up for it, please share your email address,
        and if chosen, we'll compensate you for your time.
      </Typography>
      <CommonSwitchComponent
        question="r"
        choices={[
          "Yes, I would like to participate",
          "No, I do not want to participate",
        ]}
      />

      <TextField />
    </>
  );
};

export default Exit;
