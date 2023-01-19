// umport controllers
import { register, login } from "../controllers/auth.controller.js";

//import express
import express from "express";

// create routers
const router = express.Router();

// register new user
router.post("/register", register);
router.post("/login", login);

export default router;
