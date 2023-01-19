// add the  cattle

import Cattle from "../models/cattle.model.js";

export const addCattle = async (req, res) => {
  const { name, gender, dob, cost } = req.body;
  try {
    const cattle = await Cattle.create({ name, gender, dob, cost });
    res.status(201).json({ success: true, data: cattle });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
