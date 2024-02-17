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

export const DEMO_QUESTIONS = [
  {
    question: "What is your current gender?",
    options: ["Man", "Woman"],
  },
  {
    question: "What is your home country?",
    options: country_list,
    type: "select",
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
  },
  {
    question:
      "Do you consider yourself as belonging to any religion or denomination?",
    options: ["Yes", "No", "Prefer not to say"],
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
  },
  {
    question: "Do you consider yourself a member of a minority group?",
    options: ["Yes", "No", "Don't know"],
  },
  {
    question:
      "Do you consider yourself as belonging to any religion or denomination?",
    options: ["Yes", "No", "Prefer not to say"],
  },
  {
    question:
      "Please identify any minority group(s) to which you belong (select all that apply): ",
    options: [...FACTORS],
  },
  {
    question:
      "Would you describe yourself as being a member of a group that is discriminated against?",
    options: ["Yes", "No"],
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
