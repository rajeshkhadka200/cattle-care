import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: [true, "Please add a phone number"],
    unique: true,
    trim: true,
    maxlength: [10, "Phone number can not be more than 10 characters"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  farmName: {
    type: String,
    required: [true, "Please add a farm name"],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
