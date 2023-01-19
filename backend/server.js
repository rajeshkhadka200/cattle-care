import express from "express";
import {} from "dotenv/config";
import { connectDB } from "./db/connection.js";

const app = express();

// initialize the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// connect database
connectDB();
