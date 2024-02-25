import { Schema, Document, model } from "mongoose";

export interface IModel {
  context: string;
  problem: string;
  options?: string[];
  reasoning?: string[];
  date?: Date;
}

interface IModelDocument extends IModel, Document {}

const ModelSchema = new Schema<IModelDocument>({
  context: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
  },
  reasoning: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Model = model<IModelDocument>("Model", ModelSchema);

export default Model;
