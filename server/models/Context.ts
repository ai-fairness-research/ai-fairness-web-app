import { Schema, Document, model } from "mongoose";

export interface IModel {
  image: Buffer;
  context: string;
  title?: string;
  problem: string;
  example?: string;
  options?: string[];
  reasoning?: string[];
  date?: Date;
}

interface IModelDocument extends IModel, Document {}

const ModelSchema = new Schema<IModelDocument>({
  image: {
    type: Buffer,
  },
  context: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  problem: {
    type: String,
    required: true,
  },
  example: {
    type: String,
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
