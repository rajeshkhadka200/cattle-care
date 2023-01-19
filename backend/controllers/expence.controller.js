import Expence from "../models/expence.model.js";

export const addExpence = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Save an expence in the database
  try {
    const expence = new Expence({
      type: req.body.type,
      amount: req.body.amount,
      date: req.body.date,
      user: req.body.user,
    });

    Expence.create(expence, (err, data) => {
      if (err)
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while creating the expence.",
        });
      else {
        res.status(201).send({
          success: true,
          data: data,
          message: "expence added successfully",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message:
        error.message || "Some error occurred while creating the expence.",
    });
    console.log(error);
  }
};

// Retrieve all expence from the database. by user id
export const getAllExpence = (req, res) => {
  try {
    const user = req.params.user;

    const query = Expence.find({ user: user });

    query.exec((err, data) => {
      if (err)
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while retrieving expence.",
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
      message: error.message || "Some error occurred while retrieving expence.",
    });
    console.log(error);
  }
};

// retrieve an income by id
export const getExpenceById = (req, res) => {
  try {
    const id = req.params.id;
    const query = Expence.findById(id);
    query.exec((err, data) => {
      if (err) {
        if (err.kind === "ObjectId") {
          res.status(404).send({
            success: false,
            message: "Expence not found with id " + id,
          });
        }
        res.status(500).send({
          success: false,
          message: "Error retrieving expence with id " + id,
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
      message: error.message || "Some error occurred while retrieving expence.",
    });
    console.log(error);
  }
};

// Update an expence identified by the id in the request
export const updateExpence = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  try {
    const id = req.params.id;
    const expence = await Expence.findByIdAndUpdate(id, req.body);
    if (!expence) {
      res.status(404).send({
        message: `Cannot update expence with id=${id}. Maybe expence was not found!`,
      });
    } else {
      res.status(200).send({
        success: true,
        data: expence,
        message: "expence updatd successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Some error occurred while updating expence.",
    });
    console.log(error);
  }
};

export const deleteExpence = async (req, res) => {
  try {
    const id = req.params.id;
    const expence = await Expence.findByIdAndRemove(id);

    console.log(expence);

    if (!expence) {
      res.status(404).send({
        message: `Cannot delete expence with id=${id}. Maybe expence was not found!`,
      });
    } else {
      res.status(200).send({
        success: true,
        data: expence,
        message: "expence deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Some error occurred while deleting expence.",
    });
    console.log(error);
  }
};
