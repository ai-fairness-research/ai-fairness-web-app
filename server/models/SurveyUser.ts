import { Schema, Document, model, Types } from "mongoose";

export interface ISurveyUser {
  email?: string;
  isInterested?: string;
  birthYear?: string;
  gender?: string;
  country?: string;
  educationYears?: string;
  areaDesc?: string;
  incomeDesc?: string;
  isReligion?: string;
  religion?: string;
  isMinority?: string;
  minority?: string[];
  isDiscriminated?: string;
  bias?: string[];
  answers?: Types.Array<IAnswer>;
  attitude?: string[];
  date?: Date;
}

export interface IAnswer {
  context: string;
  protected: string[];
  optimized: string[];
  developer: string[];
  textAnswer: string;
}

interface ISurveyUserDocument extends ISurveyUser, Document {}

const SurveyUserSchema = new Schema<ISurveyUserDocument>({
  email: { type: String },
  isInterested: { type: String },
  birthYear: { type: String },
  gender: { type: String },
  country: { type: String },
  educationYears: { type: String },
  areaDesc: { type: String },
  incomeDesc: { type: String },
  isReligion: { type: String },
  religion: { type: String },
  isMinority: { type: String },
  minority: { type: [String] },
  isDiscriminated: { type: String },
  bias: { type: [String] },
  answers: { type: [Object] },
  attitude: { type: [String] },
  date: { type: Date, default: Date.now },
});

const SurveyUser = model<ISurveyUserDocument>("SurveyUser", SurveyUserSchema);

export default SurveyUser;
