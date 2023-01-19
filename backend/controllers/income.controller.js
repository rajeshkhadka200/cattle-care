// import schema

import Income from "../models/income.model.js";

// Create and Save a new Income
export const addIncome = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Save an income in the database
  try {
    const income = new Income({
      type: req.body.type,
      amount: req.body.amount,
      date: req.body.date,
      user: req.body.user,
    });

    Income.create(income, (err, data) => {
      if (err)
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while creating the income.",
        });
      else {
        res.status(201).send({
          success: true,
          data: data,
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message:
        error.message || "Some error occurred while creating the income.",
    });
    console.log(error);
  }
};
