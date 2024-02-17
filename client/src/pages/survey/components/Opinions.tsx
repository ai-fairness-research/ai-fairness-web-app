import React from "react";
import { ATTITUDE_CHOICES, ATTITUDE_QUESTIONS } from "../../../constants";
import CommonSwitchComponent from "../../../common/CommonSwitchComponent";

const Opinions = () => {
  return (
    <>
      {ATTITUDE_QUESTIONS.map((question) => (
        <CommonSwitchComponent
          question={question}
          choices={ATTITUDE_CHOICES}
          key={question}
        />
      ))}
    </>
  );
};

export default Opinions;
