import { Schema, model } from "mongoose";

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserInterface>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
