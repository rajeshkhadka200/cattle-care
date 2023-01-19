// import controller
import {
  createIncome,
  // getIncome, getIncomeById, updateIncome, deleteIncome
} from "../controllers/income.controller.js";

import express from "express";
const router = express.Router();

// Create a new Income
router.post("/", createIncome);
