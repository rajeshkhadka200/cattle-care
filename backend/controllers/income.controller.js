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

// Retrieve all incomes from the database.
export const getAllIncomes = (req, res) => {
  try {
    const user = req.params.user;

    const query = Income.find({ user: user });

    query.exec((err, data) => {
      if (err)
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while retrieving incomes.",
        });
      else {
        res.status(200).send({
          success: true,
          data: data,
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Some error occurred while retrieving incomes.",
    });
    console.log(error);
  }
};

// retrieve an income by id
export const getIncomeById = (req, res) => {
  try {
    const id = req.params.id;
    const query = Income.findById(id);
    query.exec((err, data) => {
      if (err) {
        if (err.kind === "ObjectId") {
          res.status(404).send({
            success: false,
            message: "Income not found with id " + id,
          });
        }
        res.status(500).send({
          success: false,
          message: "Error retrieving income with id " + id,
        });
      } else {
        res.status(200).send({
          success: true,
          data: data,
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Some error occurred while retrieving income.",
    });
    console.log(error);
  }
};

// Update an income identified by the id in the request
export const updateIncome = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  try {
    const id = req.params.id;

    const income = await Income.findByIdAndUpdate(id, req.body);

    if (!income) {
      res.status(404).send({
        message: `Cannot update income with id=${id}. Maybe income was not found!`,
      });
    } else {
      res.status(200).send({
        success: true,
        data: income,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Some error occurred while updating income.",
    });
    console.log(error);
  }
};

// Delete an income with the specified id in the request
export const deleteIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const income = await Income.findByIdAndRemove(id);

    console.log(income);

    if (!income) {
      res.status(404).send({
        message: `Cannot delete income with id=${id}. Maybe income was not found!`,
      });
    } else {
      res.status(200).send({
        success: true,
        data: income,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Some error occurred while deleting income.",
    });
    console.log(error);
  }
};
