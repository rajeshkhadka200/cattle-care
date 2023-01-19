// import schema

import Income from "../models/income.model";

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
    });

    Income.create(income, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the income.",
        });
      else {
        res.status(201).send(data);
      }
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the income.",
    });
    console.log(error);
  }
};
