import { IRankingOptions } from "../services/utilities/types";
import { country_list } from "./countries";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const PREFIX = "AI-Fairness-";

export const FACTORS = [
  "Age",
  "Disability",
  "Gender",
  "Gender identity/expression",
  "Marital Status",
  "National Origin",
  "Parental Status",
  "Political Affiliation",
  "Race/Ethnicity",
  "Sexual Orientation",
  "Socioeconomic Status",
  "Veteran Status",
];

export const FACTORS1 = [
  "Age",
  "Disability",
  "Gender",
  "Gender identity/expression",
  "Marital Status",
  "National Origin",
  "Parental Status",
];

export const FACTORS2 = [
  "Political Affiliation",
  "Race/Ethnicity",
  "Sexual Orientation",
  "Socioeconomic Status",
  "Veteran Status",
  "Others",
];

export const DEMO_QUESTIONS = [
  {
    question: "What is your current gender?",
    options: ["Man", "Woman"],
    field: "gender",
  },
  {
    question: "What is your home country?",
    options: country_list,
    type: "select",
    field: "country",
  },
  {
    question:
      "Please select the option that represents the total number of years you have spent in formal education, including primary, secondary, and higher education.",
    options: [
      "0-6 years",
      "7-9 years",
      "10-12 years",
      "13-15 years",
      "16 or more years",
    ],
    field: "educationYears",
  },
  {
    question: "Which phrase best describes the area where you currently live?",
    options: [
      "A big city",
      "The suburbs or outskirts of a big city",
      "A town or a small city",
      "A country village",
      "A farm or home in the countryside",
    ],
    field: "areaDesc",
  },
  {
    question:
      "Which of the descriptions comes closest to how feel you about your household’s income over the last five years?",
    options: [
      "Living comfortably on present income",
      "Coping on present income",
      "Finding it difficult on present income",
      "Finding it very difficult on present income",
      "Prefer not to say",
    ],
    field: "incomeDesc",
  },
  {
    question:
      "Do you consider yourself as belonging to any religion or denomination?",
    options: ["Yes", "No", "Prefer not to say"],
    field: "isReligion",
  },
  {
    question: "Which religion do you belong to?",
    options: [
      "Roman Catholic",
      "Protestant",
      "Eastern Orthodox",
      "Jewish",
      "Islam",
      "Eastern religions",
      "Other non-Christian religions",
      "Other Christian denomination",
      "Prefer not to say",
    ],
    field: "religion",
  },
  {
    question: "Do you consider yourself a member of a minority group?",
    options: ["Yes", "No", "Don't know"],
    field: "isMinority",
  },
  {
    question:
      "Please identify any minority group(s) to which you belong (select all that apply): ",
    options: [...FACTORS],
    type: "mcq",
    field: "minority",
  },
  {
    question:
      "Would you describe yourself as being a member of a group that is discriminated against?",
    options: ["Yes", "No"],
    field: "isDiscriminated",
  },
];

export const ATTITUDE_QUESTIONS = [
  "It is important for algorithmic systems to consider individual needs and well-being to ensure fair and personalized experiences.",
  "Algorithmic systems should prioritize other objectives, such as efficiency or profitability over individual needs and well-being",
  "Algorithmic systems should focus solely on their primary objectives and not be concerned with individual needs and well-being.",
  "Algorithmic systems should base decisions solely on objective criteria to ensure fairness and eliminate discrimination.",
  "There may be instances where considering social or demographic backgrounds could lead to more just and inclusive results.",
  "Algorithmic systems should consider social and demographic backgrounds to address historical biases and promote equity.",
];

export const ATTITUDE_CHOICES = [
  "Strongly disagree",
  "Somewhat disagree",
  "Neither agree nor disagree",
  "Somewhat agree",
  "Strongly agree",
];

export const RANKING_OPTIONS: IRankingOptions[] = [
  {
    id: "1",
    title:
      "Make sure the same percentage of applicants from all backgrounds are recommended for interviews.",
    description:
      "This means that if 10% of applicants from one background are recommended, then 10% of applicants from another background should also be recommended, no matter what.",
  },
  {
    id: "2",
    title:
      "Ensure that the model is equally accurate in recommending the best candidates, regardless of their background.",
    description:
      "If the model correctly identifies the best candidates from one background, it should be just as accurate for candidates from another background.",
  },
  {
    id: "3",
    title:
      "Focus on making sure that applicants with similar qualifications have an equal chance of being recommended for an interview.",
    description:
      "Applicants with similar experience and skills should be treated equally regardless of their background.",
  },
  {
    id: "4",
    title:
      "Check if the model’s recommendations unintentionally favor or disadvantage certain groups of people.",
    description:
      "If applicants from one background are consistently being overlooked or recommended less often, adjust the model to fix this.",
  },
];

export const EXPORT_OPTIONS: string[] = [
  "consider people’s needs and well-being to create fair and personalized experiences.",
  "prioritize objectives like efficiency or profitability over people’s needs and well-being.",
  "focus only on their main goals and not consider people’s needs or well-being.",
  "base decisions only on objective data to ensure fairness and eliminate discrimination.",
  "sometimes consider people’s backgrounds to make fairer and more inclusive decisions.",
  "take people’s backgrounds into account to address past inequalities and promote fairness.",
];
