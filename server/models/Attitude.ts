import { Schema, Document, model } from "mongoose";

export interface IAttitude {
  question: string;
  date?: Date;
}

interface IAttitudeDocument extends IAttitude, Document {}

const AttitudeSchema = new Schema<IAttitudeDocument>({
  question: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Attitude = model<IAttitudeDocument>("Attitude", AttitudeSchema);

export default Attitude;
