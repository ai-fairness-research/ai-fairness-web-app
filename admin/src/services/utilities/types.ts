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
  [key: string]: string | string[];
  context: string;
  protected: string[];
  optimized: string[];
  developer: string[];
  textAnswer: string;
}

export interface SurveyAnswerPayload {
  [key: string]: string | string[] | ContextAnswer[];
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
  bias: string[];
  answers: ContextAnswer[];
  attitude: string[];
}

export interface SurveyResponse {
  status: string;
  message: SurveyAnswerPayload[];
}

export interface AuthPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  status: string;
  token: string;
  userId: string;
  name?: string;
  uname?: string;
}
