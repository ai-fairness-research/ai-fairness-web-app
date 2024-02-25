import { Schema, Document, model } from "mongoose";

interface IUser {
  name?: string;
  email: string;
  password: string;
  uname?: string;
  date?: Date;
}

interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>({
  name: {
    type: String,
    minlength: 6,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 6,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 6,
  },
  uname: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUserDocument>("User", UserSchema);

export default User;
