import React, { useEffect, useState } from "react";
import { surveyUserService } from "../../../services/utilities/provider";
import {
  SurveyAnswerPayload,
  SurveyResponse,
} from "../../../services/utilities/types";
import { SURVEY_DATA } from "../../../constant";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";
import { error, secondary } from "../../../theme/themeColors";

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

  const delSurveyData = async (id: string) => {
    await surveyUserService
      .delete(id)
      .then((res) => {
        if (res.status === "200") {
          fetchSurveyData();
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  const SURVEY_COL: GridColDef[] = [
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      renderCell: (params: GridRenderCellParams) => (
        <strong>
          <IconButton
            onClick={() => delSurveyData(params.row._id)}
            color="error"
            sx={{ backgroundColor: error.main, color: secondary.main }}
          >
            <DeleteRounded />
          </IconButton>
        </strong>
      ),
    },
    ...SURVEY_DATA,
  ];

  return (
    <Box sx={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={surveys}
        columns={SURVEY_COL}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        loading={isLoading}
        pageSizeOptions={[5, 10]}
        slots={{ toolbar: GridToolbar }}
        density="standard"
      />
    </Box>
  );
};

export default SurveyData;
