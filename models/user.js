import { unique } from "@node_modules/next/dist/build/utils";
import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exixts!"],
    require: [true, "Email is required!"],
  },
  username: {
    type: String,
    require: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
