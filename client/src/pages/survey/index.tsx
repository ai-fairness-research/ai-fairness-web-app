import * as React from "react";
import { Grid } from "@mui/material";
import Steppers from "./components/Steppers";
import Sections from "./components/Sections";
import { useSurveyAnswerContext } from "../../context/SurveyAnswerContext";
import { useNavigate } from "react-router-dom";
import { secondary } from "../../theme/themeColors";
import { surveyUserService } from "../../services/utilities/provider";
import CommonSnackbar from "../../common/CommonSnackbar";

const Survey = () => {
  const navigate = useNavigate();
  const { surveyAnswers, setSurveyAnswers } = useSurveyAnswerContext();
  const [activeStep, setActiveStep] = React.useState(0);

  const [isIdSubmitted, setIsIdSubmitted] = React.useState(false);
  const [isOpinionsSubmitted, setIsOpinionsSubmitted] = React.useState(false);
  const [isDemoSubmitted, setIsDemoSubmitted] = React.useState(false);
  const [isExitSubmitted, setIsExitSubmitted] = React.useState(false);

  const [openSnack, setIsOpenSnack] = React.useState(false);

  const handleNext = () => {
    if (activeStep === 0) {
      setIsIdSubmitted(true);
      if (surveyAnswers.proId !== "") {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setIsOpenSnack(true);
      }
    } else if (activeStep === 2) {
      setIsOpinionsSubmitted(true);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // setIsOpinionsSubmitted(true);
      // if (surveyAnswers.attitude.length === 6) {
      //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // } else {
      //   setIsOpenSnack(true);
      // }
    } else if (activeStep === 3) {
      setIsDemoSubmitted(true);
      if (
        surveyAnswers.birthYear !== "" &&
        surveyAnswers.gender &&
        surveyAnswers.country &&
        surveyAnswers.educationYears &&
        surveyAnswers.areaDesc &&
        surveyAnswers.incomeDesc &&
        surveyAnswers.isReligion &&
        surveyAnswers.religion &&
        surveyAnswers.isMinority &&
        surveyAnswers.minority &&
        surveyAnswers.minority.length !== 0 &&
        surveyAnswers.isDiscriminated
      ) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        setIsOpenSnack(true);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setIsExitSubmitted(true);
    if (
      !surveyAnswers.isInterested ||
      (surveyAnswers.isInterested === "Yes, I would like to participate" &&
        (surveyAnswers.email === undefined || surveyAnswers.email === ""))
    ) {
      setIsOpenSnack(true);
    } else {
      sendAnswer();
    }
  };

  const sendAnswer = async () => {
    console.log(surveyAnswers);
    await surveyUserService.post(surveyAnswers).then((res) => {
      console.log(res);
      navigate("/success");
    });
    // .finally(() => {
    //   // setActiveStep(0);
    // });

    // const uniqueId = cryptoRandomString({ length: 10, type: "alphanumeric" });
    // localStorage.setItem("uniqueId", uniqueId);
    // console.log(surveyAnswers);
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
      answers: [],
      attitude: [],
      proId: "",
    });
    setActiveStep(0);
  };

  return (
    <Grid container sx={{ minHeight: "80vh" }}>
      <CommonSnackbar
        open={openSnack}
        handleClose={() => setIsOpenSnack(false)}
      />
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
          isIdSubmitted={isIdSubmitted}
          isOpinionsSubmitted={isOpinionsSubmitted}
          isDemoSubmitted={isDemoSubmitted}
          isExitSubmitted={isExitSubmitted}
        />
      </Grid>
    </Grid>
  );
};

export default Survey;
