// import controller
import {
  addExpence,
  deleteExpence,
  getAllExpence,
  getExpenceById,
  updateExpence,
} from "../controllers/expence.controller.js";

import express from "express";
const router = express.Router();

router.post("/", addExpence); // Create a new expence
router.get("/:user", getAllExpence); // Retrieve all incomes
router.get("/:user/:id", getExpenceById); // Retrieve a single Income with id
router.put("/:id", updateExpence); // update a Income with id
router.delete("/:id", deleteExpence); // Delete a Income with id

export default router;
