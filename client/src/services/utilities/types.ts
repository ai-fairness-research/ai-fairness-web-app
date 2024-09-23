export interface Bias {
  _id: string;
  question: string;
  options: string[];
  date: string;
  __v: number;
}

export interface BiasResponse {
  data: number;
  message: Bias[];
}

export interface Context {
  _id: string;
  context: string;
  problem: string;
  options: string[];
  reasoning: string[];
  date: string;
  title: string;
  example: string;
  __v: number;
}

export interface ContextResponse {
  data: number;
  message: Context[];
}

export interface ContextAnswer {
  context: string;
  factors: string;
  decision: string;
  predictions: string;
  modelImpact: string[];
  buildFocus: string[];
  ranking: string;
}

export interface SurveyAnswerPayload {
  email: string;
  isInterested: string;
  isDiscriminated: string;
  birthYear: string;
  gender: string;
  country: string;
  educationYears: string;
  areaDesc: string;
  incomeDesc: string;
  isReligion: string;
  religion: string;
  isMinority: string;
  minority: string[];
  answers: ContextAnswer[];
  attitude: string[];
  proId: string;
}

export interface SurveyResponse {
  data: number;
  message: SurveyAnswerPayload[];
}

export interface ApiResponse {
  status: string;
  message: string;
}
