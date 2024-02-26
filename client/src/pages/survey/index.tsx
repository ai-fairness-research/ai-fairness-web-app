import * as React from "react";
import { Grid } from "@mui/material";
import Steppers from "./components/Steppers";
import Sections from "./components/Sections";
import { useSurveyAnswerContext } from "../../context/SurveyAnswerContext";
import { useNavigate } from "react-router-dom";
import { secondary } from "../../theme/themeColors";
import { surveyUserService } from "../../services/utilities/provider";

const Survey = () => {
  const navigate = useNavigate();
  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    sendAnswer();
    navigate("/");
    setActiveStep(0);
  };

  const sendAnswer = async () => {
    await surveyUserService.post(surveyAnswers).then((res) => {
      console.log(res);
    });
    console.log(surveyAnswers);
    setSurveyAnswers({
      email: "",
      isInterested: "",
      isDiscriminated: "",
      birthYear: "",
      gender: "",
      country: "United States",
      educationYears: "",
      areaDesc: "",
      incomeDesc: "",
      isReligion: "",
      religion: "",
      isMinority: "",
      minority: [],
      bias: [],
      answers: [],
      attitude: [],
    });
  };

  return (
    <Grid container sx={{ minHeight: "80vh" }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ position: "sticky", top: 0, backgroundColor: secondary.main }}
      >
        <Steppers activeStep={activeStep} />
      </Grid>
      <Grid item xs={12} md={8} sx={{ overflowY: "scroll", maxHeight: "80vh" }}>
        <Sections
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      </Grid>
    </Grid>
  );
};

export default Survey;
