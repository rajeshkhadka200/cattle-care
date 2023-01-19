import Cattle from "../models/cattle.model.js";

// add the  cattle
export const addCattle = async (req, res) => {
  const { name, gender, dob, cost, user_id } = req.body;
  try {
    const cattle = await Cattle.create({ name, gender, dob, cost });
    res.status(201).json({ success: true, data: cattle });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// get all the cattle by user id / currently loged in
export const getAllCattle = async (req, res) => {
  try {
    // find cattle by id
    const mycattle = await Cattle.find({ _id: req.user_id });
    res.status(200).json({ success: true, data: mycattle });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// update cattle
