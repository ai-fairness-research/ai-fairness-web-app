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
  // {
  //   field: "bias1",
  //   headerName:
  //     "How knowledgeable are you about artificial intelligence (AI) and machine learning (ML)?",
  //   width: 180,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.bias[0] || ""} `,
  // },
  // {
  //   field: "bias2",
  //   headerName:
  //     "How concerned are you about potential biases or discrimination embedded in algorithmic decision-making systems?",
  //   width: 180,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.bias[1] || ""} `,
  // },
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
    field: "factors1",
    headerName: "Factors 1",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[0]?.factors || ""} `,
  },
  {
    field: "decision1",
    headerName: "Decision 1",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[0]?.decision || ""} `,
  },
  {
    field: "predictions1",
    headerName: "Predictions 1",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[0]?.predictions || ""} `,
  },
  {
    field: "modelImpact1",
    headerName: "Model Impact 1",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[0]?.modelImpact) || ""} `,
  },
  {
    field: "buildFocus1",
    headerName: "Build Focus 1",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[0]?.buildFocus) || ""} `,
  },
  {
    field: "context 2",
    headerName: "Context 2",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.context || ""} `,
  },
  {
    field: "factors2",
    headerName: "Factors 2",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.factors || ""} `,
  },
  {
    field: "decision2",
    headerName: "Decision 2",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.decision || ""} `,
  },
  {
    field: "predictions2",
    headerName: "Predictions 2",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[1]?.predictions || ""} `,
  },
  {
    field: "modelImpact2",
    headerName: "Model Impact 2",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[1]?.modelImpact) || ""} `,
  },
  {
    field: "buildFocus2",
    headerName: "Build Focus 2",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[1]?.buildFocus) || ""} `,
  },
  {
    field: "context 3",
    headerName: "Context 3",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.context || ""} `,
  },
  {
    field: "factors3",
    headerName: "Factors 3",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.factors || ""} `,
  },
  {
    field: "decision3",
    headerName: "Decision 3",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.decision || ""} `,
  },
  {
    field: "predictions3",
    headerName: "Predictions 3",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[2]?.predictions || ""} `,
  },
  {
    field: "modelImpact3",
    headerName: "Model Impact 3",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[2]?.modelImpact) || ""} `,
  },
  {
    field: "buildFocus3",
    headerName: "Build Focus 3",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[2]?.buildFocus) || ""} `,
  },
  {
    field: "context 4",
    headerName: "Context 4",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.context || ""} `,
  },
  {
    field: "factors4",
    headerName: "Factors 4",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.factors || ""} `,
  },
  {
    field: "decision4",
    headerName: "Decision 4",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.decision || ""} `,
  },
  {
    field: "predictions4",
    headerName: "Predictions 4",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[3]?.predictions || ""} `,
  },
  {
    field: "modelImpact4",
    headerName: "Model Impact 4",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[3]?.modelImpact) || ""} `,
  },
  {
    field: "buildFocus4",
    headerName: "Build Focus 4",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[3]?.buildFocus) || ""} `,
  },
  {
    field: "context 5",
    headerName: "Context 5",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.context || ""} `,
  },
  {
    field: "factors5",
    headerName: "Factors 5",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.factors || ""} `,
  },
  {
    field: "decision5",
    headerName: "Decision 5",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.decision || ""} `,
  },
  {
    field: "predictions5",
    headerName: "Predictions 5",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row?.answers[4]?.predictions || ""} `,
  },
  {
    field: "modelImpact5",
    headerName: "Model Impact 5",
    width: 220,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[4]?.modelImpact) || ""} `,
  },
  {
    field: "buildFocus5",
    headerName: "Build Focus 5",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${renderArrayField(params.row?.answers[4]?.buildFocus) || ""} `,
  },
  {
    field: "proId",
    headerName: "Prolific ID",
    width: 100,
  },
];
