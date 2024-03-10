import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { renderArrayField } from "./services/utilities/utils";

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
  {
    field: "bias1",
    headerName:
      "How knowledgeable are you about artificial intelligence (AI) and machine learning (ML)?",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bias[0] || ""} `,
  },
  {
    field: "bias2",
    headerName:
      "How concerned are you about potential biases or discrimination embedded in algorithmic decision-making systems?",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bias[1] || ""} `,
  },
  {
    field: "attitude1",
    headerName:
      "It is important for algorithmic systems to consider individual needs and well-being to ensure fair and personalized experiences",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.attitude?.[0] || ""} `,
  },
  {
    field: "attitude2",
    headerName:
      "Algorithmic systems should prioritize other objectives, such as efficiency or profitability over individual needs and well-being ",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.attitude?.[1] || ""} `,
  },
  {
    field: "attitude3",
    headerName:
      "Algorithmic systems should focus solely on their primary objectives and not be concerned with individual needs and well-being.",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.attitude?.[2] || ""} `,
  },
  {
    field: "attitude4",
    headerName:
      "Algorithmic systems should base decisions solely on objective criteria to ensure fairness and eliminate discrimination.",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.attitude?.[3] || ""} `,
  },
  {
    field: "attitude5",
    headerName:
      "There may be instances where considering social or demographic backgrounds could lead to more just and inclusive results.",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.attitude?.[4] || ""} `,
  },
  {
    field: "attitude6",
    headerName:
      "Algorithmic systems should consider social and demographic backgrounds to address historical biases and promote equity.",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.attitude?.[5] || ""} `,
  },
  {
    field: "context 1",
    headerName: "Context 1",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[0]?.context || ""} `,
  },
  {
    field: "protected1",
    headerName: "Protected Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[0]?.protected) || ""} `,
  },
  {
    field: "optimized1",
    headerName: "Optimized Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[0]?.optimized) || ""} `,
  },
  {
    field: "developer1",
    headerName: "Developer Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[0]?.developer?.[0] || ""} `,
  },
  {
    field: "suggestion1",
    headerName: "General Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[0]?.textAnswer || ""} `,
  },
  {
    field: "context 2",
    headerName: "Context 2",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.context || ""} `,
  },
  {
    field: "protected2",
    headerName: "Protected Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[1]?.protected) || ""} `,
  },
  {
    field: "optimized2",
    headerName: "Optimized Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[1]?.optimized) || ""} `,
  },
  {
    field: "developer2",
    headerName: "Developer Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.developer?.[0] || ""} `,
  },
  {
    field: "suggestion2",
    headerName: "General Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.textAnswer || ""} `,
  },
  {
    field: "context 3",
    headerName: "Context 3",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.context || ""} `,
  },
  {
    field: "protected3",
    headerName: "Protected Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[2]?.protected) || ""} `,
  },
  {
    field: "optimized3",
    headerName: "Optimized Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[2]?.optimized) || ""} `,
  },
  {
    field: "developer3",
    headerName: "Developer Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.developer?.[0] || ""} `,
  },
  {
    field: "suggestion3",
    headerName: "General Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.textAnswer || ""} `,
  },
  {
    field: "context 4",
    headerName: "Context 4",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.context || ""} `,
  },
  {
    field: "protected4",
    headerName: "Protected Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[3]?.protected) || ""} `,
  },
  {
    field: "optimized4",
    headerName: "Optimized Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[3]?.optimized) || ""} `,
  },
  {
    field: "developer4",
    headerName: "Developer Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.developer?.[0] || ""} `,
  },
  {
    field: "suggestion4",
    headerName: "General Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.textAnswer || ""} `,
  },
  {
    field: "context 5",
    headerName: "Context 5",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.context || ""} `,
  },
  {
    field: "protected5",
    headerName: "Protected Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[4]?.protected) || ""} `,
  },
  {
    field: "optimized5",
    headerName: "Optimized Categories",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[4]?.optimized) || ""} `,
  },
  {
    field: "developer5",
    headerName: "Developer Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.developer?.[0] || ""} `,
  },
  {
    field: "suggestion5",
    headerName: "General Suggestion",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.textAnswer || ""} `,
  },
  {
    field: "uniqueId",
    headerName: "Unique ID",
    width: 100,
  },
];
