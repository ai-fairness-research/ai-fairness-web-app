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

export interface ContextResponse {
  _id: string;
  context: string;
  problem: string;
  options: string[];
  date: string;
  __v: number;
}
