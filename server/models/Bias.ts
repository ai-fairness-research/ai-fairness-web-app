import { Schema, Document, model } from "mongoose";

export interface IBias {
  question: string;
  options?: string[];
  date?: Date;
}

interface IBiasDocument extends IBias, Document {}

const BiasSchema = new Schema<IBiasDocument>({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Bias = model<IBiasDocument>("Bias", BiasSchema);

export default Bias;
