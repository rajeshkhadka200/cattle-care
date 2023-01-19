import mongoose from "mongoose";

// creating schema for adding new cattle

const cattleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  cost: { type: String },
});

// Creating model for cattle
const blogModal = mongoose.model("cattle", cattleSchema);
export default cattleSchema;
