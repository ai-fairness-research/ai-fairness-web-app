export interface Bias {
  _id: string;
  question: string;
  options: string[];
  date: string;
  __v: number;
}

export interface BiasResponse {
  // data: number;
  status: string;
  message: Bias[];
}

export interface BiasPayload {
  // data: number;
  question: string;
  options: string[];
}

export interface Context {
  _id: string;
  context: string;
  problem: string;
  options: string[];
  reasoning: string[];
  date: string;
  __v: number;
}

export interface ContextResponse {
  // data: number;
  status: string;
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

export interface ContextPayload {
  context: string;
  problem: string;
  options: string[];
  reasoning: string[];
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
  uniqueId: string;
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

export interface ApiResponse {
  status: string;
  message: string;
}

export interface Attitude {
  _id: string;
  question: string;
  date: string;
  __v: number;
}

export interface AttitudeResponse {
  status: string;
  message: Attitude[];
}

export interface AttitudePayload {
  question: string;
}
