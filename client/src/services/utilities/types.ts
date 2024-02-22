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
  bornYear: string;
  gender: string;
  home: string;
  education: string;
  living_desc: string;
  isReligion: string;
  religion: string;
  isMinority: string;
  minority: string[];
  bias: string[];
  answers: ContextAnswer[];
  attitude: string[];
}
