// import controller
import {
  addIncome,
  getAllIncomes,
  getIncomeById,
  updateIncome,
  deleteIncome,
} from "../controllers/income.controller.js";

import express from "express";
const router = express.Router();

// Create a new Income
router.post("/", addIncome);

// Retrieve all incomes
router.get("/:user", getAllIncomes);

// Retrieve a single Income with id
router.get("/:user/:id", getIncomeById);

// Update a Income with id
router.put("/:id", updateIncome);

// Delete a Income with id
router.delete("/:id", deleteIncome);

export default router;
