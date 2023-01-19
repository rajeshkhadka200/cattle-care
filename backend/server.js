import express from "express";
import dotenv from "dotenv";

// load env vars
dotenv.config();

const app = express();

// initialize the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
