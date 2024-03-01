import React, { useEffect, useState } from "react";
import { surveyUserService } from "../../../services/utilities/provider";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ContextAnswer,
  SurveyAnswerPayload,
  SurveyResponse,
} from "../../../services/utilities/types";

const labelMapping: { [key: string]: string | string[] } = {
  email: "Email",
  birthYear: "Birth Year",
  gender: "Gender",
  country: "Country",
  educationYears: "Education Years",
  areaDesc: "Area Description",
  incomeDesc: "Income Description",
  isReligion: "Has Religion",
  religion: "Religion",
  isMinority: "Is Minority",
  bias: "Bias",
  //   answers: "Answers",
  attitude: "Attitude",
  isDiscriminated: "Is Discriminated",
  isInterested: "Is Interested",
};

const keysToDisplay = Object.keys(labelMapping);

const SurveyData: React.FC = () => {
  const [surveys, setSurveys] = useState<SurveyAnswerPayload[]>([]);

  const fetchSurveyData = async () => {
    try {
      const res: SurveyResponse = await surveyUserService.getAll();
      if (res.status === "200") {
        setSurveys(res.message);
      }
    } catch (error) {
      console.error("Error fetching survey data:", error);
    }
  };

  useEffect(() => {
    fetchSurveyData();
  }, []);

  const renderArrayField = (
    array: string[] | ContextAnswer[] | undefined
  ): string | React.ReactNode => {
    if (Array.isArray(array)) {
      return array.join(", ");
    } else if (array && typeof array[0] === "object" && "value" in array[0]) {
      // Assuming ContextAnswer is an object with a 'value' field
      return (array as ContextAnswer[])
        .map((item: ContextAnswer) => item.value)
        .join(", ");
    } else {
      return "";
    }
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {keysToDisplay.map((key) => (
                <TableCell key={key}>{labelMapping[key]}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {surveys.map((survey, index) => (
              <TableRow key={index}>
                {keysToDisplay.map((key) => (
                  <TableCell key={key}>
                    {Array.isArray(survey[key])
                      ? renderArrayField(
                          survey[key] as string[] | ContextAnswer[]
                        )
                      : survey[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SurveyData;
