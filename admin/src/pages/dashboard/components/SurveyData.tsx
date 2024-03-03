import React, { useEffect, useState } from "react";
import { surveyUserService } from "../../../services/utilities/provider";
import {
  SurveyAnswerPayload,
  SurveyResponse,
} from "../../../services/utilities/types";
import { SURVEY_DATA } from "../../../constant";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const SurveyData: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [surveys, setSurveys] = useState<SurveyAnswerPayload[]>([]);

  const fetchSurveyData = async () => {
    setIsLoading(true);
    try {
      const res: SurveyResponse = await surveyUserService.getAll();
      // console.log(res);
      if (res.status === "200") {
        const surveysWithCustomKey = res.message.map((survey) => ({
          ...survey,
          id: survey._id, // Or use the appropriate identifier for _id
        }));

        setSurveys(surveysWithCustomKey);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching survey data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSurveyData();
  }, []);

  return (
    <Box sx={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={surveys}
        columns={SURVEY_DATA}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        loading={isLoading}
        pageSizeOptions={[5, 10]}
        slots={{ toolbar: GridToolbar }}
        density="compact"
      />
    </Box>
  );
};

export default SurveyData;
