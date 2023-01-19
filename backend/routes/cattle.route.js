//import express
import express from "express";

// import controllers
import { addCattle } from "../controllers/cattle.controller.js";

// create routers
const router = express.Router();

// register new user
router.post("/addcattle", addCattle);

export default router;
