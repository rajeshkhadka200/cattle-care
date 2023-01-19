import express from "express";
import {} from "dotenv/config";
import { connectDB } from "./db/connection.js";

// import routes
import auth from "./routes/auth.route.js";

const app = express();

// body parser
app.use(express.json());

// mount routers
app.use("/api/user", auth);

// initialize the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// connect database
connectDB();
