import mongoose from "mongoose";

// creating schema for adding new cattle

const cattleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  cost: { type: String },
  user_id: { type: Number, required: true },
});

// Creating model for cattle
export default mongoose.models.Cattle || mongoose.model("Cattle", cattleSchema);
