import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please enter income type"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter income amount"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User id is required"],
  },
});

const Income = mongoose.model("Income", incomeSchema);

export default mongoose.models.Income || Income;
