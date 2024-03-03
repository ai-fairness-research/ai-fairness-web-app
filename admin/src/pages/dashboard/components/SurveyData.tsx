import React, { useEffect, useState } from "react";
import { surveyUserService } from "../../../services/utilities/provider";
import {
  SurveyAnswerPayload,
  SurveyResponse,
} from "../../../services/utilities/types";
import { SURVEY_DATA } from "../../../constant";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const SurveyData: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [surveys, setSurveys] = useState<SurveyAnswerPayload[]>([]);

  const fetchSurveyData = async () => {
    setIsLoading(true);
    try {
      const res: SurveyResponse = await surveyUserService.getAll();
      console.log(res);
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

  // const renderArrayField = (array: string[]): string | React.ReactNode => {
  //   if (Array.isArray(array)) {
  //     return array.join(", ");
  //   }
  //   // else if (array && typeof array[0] === "object" && "value" in array[0]) {
  //   //   // Assuming ContextAnswer is an object with a 'value' field
  //   //   return (array as ContextAnswer[])
  //   //     .map((item: ContextAnswer) => item.value)
  //   //     .join(", ");
  //   // }
  //   else {
  //     return "";
  //   }
  // };

  // const renderArrayField = (array: string[] | ContextAnswer): string => {
  //   if (Array.isArray(array)) {
  //     return array.join(", ");
  //   } else if (array && typeof array[0] === "object") {
  //     return array.context;
  //   } else {
  //     return "";
  //   }
  // };

  console.log({ SURVEY_DATA });

  // const columns: GridColDef[] = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  // ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <DataGrid
        // rows={rows}
        // columns={columns}
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
    </div>
    // <Box>
    //   <TableContainer>
    //     <Table aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           {SURVEY_DATA.map((key) => (
    //             <TableCell key={key.field}>{key.label}</TableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {surveys.map((survey, index) => (
    //           <TableRow key={index}>
    //             <TableCell>{survey?.email}</TableCell>
    //             <TableCell>{survey?.birthYear}</TableCell>
    //             <TableCell>{survey?.gender}</TableCell>
    //             <TableCell>{survey?.country}</TableCell>
    //             <TableCell>{survey?.educationYears}</TableCell>
    //             <TableCell>{survey?.areaDesc}</TableCell>
    //             <TableCell>{survey?.incomeDesc}</TableCell>
    //             <TableCell>{survey?.isReligion}</TableCell>
    //             <TableCell>{survey?.religion}</TableCell>
    //             <TableCell>{survey?.isMinority}</TableCell>
    //             <TableCell>{survey?.isDiscriminated}</TableCell>
    //             <TableCell>{survey?.isInterested}</TableCell>

    //             {/* {SURVEY_DATA.map((key) => (
    //               <TableCell key={key.field}>{survey[key.field]}</TableCell>
    //             ))} */}
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Box>
  );
};

export default SurveyData;

{
  /* {keysToDisplay.map((key) => (
                  <TableCell key={key}>{survey?.[key]}</TableCell>
                  // <TableCell key={key}>
                  //   {Array.isArray(survey[key])
                  //     ? renderArrayField(survey[key])
                  //     : survey[key]}
                  // </TableCell>
                ))} */
}

// <TableCell key={key.field}>
//   {Array.isArray(survey[key.field])
//     ? renderArrayField(survey[key.field])
//     : typeof survey[key.field] === "object" &&
//       survey[key.field] !== null
//     ? JSON.stringify(survey[key.field])
//     : key.field === "isMinority" ||
//       key.field === "isReligion" ||
//       key.field === "isDiscriminated" ||
//       key.field === "isInterested"
//     ? survey[key.field] === "Yes"
//       ? "Yes"
//       : "No"
//     : survey[key.field]}
// </TableCell>

{
  /* {key.field === "answers" && Array.isArray(survey[key.field])
                      ? survey[key.field].map((answer, index) => (
                          <div key={index}>
                            <p>{answer.context}</p>
                            <p>Protected: {answer.protected.join(", ")}</p>
                            <p>Optimized: {answer.optimized.join(", ")}</p>
                            <p>Developer: {answer.developer.join(", ")}</p>
                            <p>Text Answer: {answer.textAnswer}</p>
                          </div>
                        ))
                      : Array.isArray(survey[key.field])
                      ? renderArrayField(survey[key.field])
                      : typeof survey[key.field] === "object" &&
                        survey[key.field] !== null
                      ? JSON.stringify(survey[key.field])
                      : key.field === "isMinority" ||
                        key.field === "isReligion" ||
                        key.field === "isDiscriminated" ||
                        key.field === "isInterested"
                      ? survey[key.field] === "Yes"
                        ? "Yes"
                        : "No"
                      : survey[key.field]} */
}
