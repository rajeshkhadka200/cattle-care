//import express
import express from "express";

// import controllers
import {
  addCattle,
  getMycattle,
  updateCattle,
  deleteCattle,
} from "../controllers/cattle.controller.js";

// create routers
const router = express.Router();

// register new user
router.post("/addcattle", addCattle); // add cattle
router.get("/getmycattle/:user_id", getMycattle); // get my cattle
router.put("/updatecattle/:cattle_id", updateCattle); // update cattle
router.delete("/deletecattle/:cattle_id", deleteCattle); // delete cattle

export default router;
