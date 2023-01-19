import mongoose from "mongoose";

const expenceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please enter expence type"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter expence amount"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    required: [true, "User id is required"],
  },
});

const Income = mongoose.model("Expence", expenceSchema);

export default mongoose.models.Expence || Expence;
