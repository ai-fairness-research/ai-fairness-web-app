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
  date: string;
  __v: number;
}

export interface ContextResponse {
  data: number;
  message: Context[];
}

export interface ContextAnswer {
  context: string;
  protected: string[];
  optimised: string[];
  developer: string[];
  textAnswer: string;
}

export interface SurveyAnswerPayload {
  email: string;
  isInterested: string;
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
  bias: string[];
  answers: ContextAnswer[];
  attitude: string[];
}
