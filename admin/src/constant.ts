import { GridColDef } from "@mui/x-data-grid";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const PREFIX = "AI-Fairness-";

export const SURVEY_DATA: GridColDef[] = [
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "birthYear",
    headerName: "Birth Year",
  },
  {
    field: "gender",
    headerName: "Gender",
  },
  {
    field: "country",
    headerName: "Country",
  },
  {
    field: "educationYears",
    headerName: "Education Years",
  },
  {
    field: "areaDesc",
    headerName: "Area Description",
    width: 220,
  },
  {
    field: "incomeDesc",
    headerName: "Income Description",
    width: 220,
  },

  {
    field: "isReligion",
    headerName: "Is Religious",
  },
  {
    field: "religion",
    headerName: "Religion",
  },
  {
    field: "isMinority",
    headerName: "Is a Minority?",
    width: 120,
  },
  {
    field: "isDiscriminated",
    headerName: "Is Discriminated",
  },
  {
    field: "isInterested",
    headerName: "Is Interested in Participation",
    width: 220,
  },
  // bias: "Bias",
  //   answers: "Answers",
  // attitude: "Attitude",
];
