import Cattle from "../models/cattle.model.js";

// add the  cattle
export const addCattle = async (req, res) => {
  const { name, gender, dob, cost, user_id } = req.body;
  try {
    const cattle = await Cattle.create({ name, gender, dob, cost, user_id });
    res.status(201).json({ success: true, data: cattle });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// get all the cattle by user id / currently loged in
export const getMycattle = async (req, res) => {
  console.log(req.params.user_id);
  try {
    // find cattle by user id
    const mycattle = await Cattle.find({ user_id: req.params.user_id });
    res.status(200).json({ success: true, data: mycattle });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// update cattle
export const updateCattle = async (req, res) => {
  const { cattle_id } = req.params;

  const { name, gender, dob, cost } = req.body;
  console.log(name);
  try {
    const updatedcattle = await Cattle.findByIdAndUpdate(cattle_id, {
      name,
      gender,
      dob,
      cost,
    });
    res.status(200).json({
      success: true,
      data: "cattle udpated successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "Unable to update cattle",
    });
  }
};

// delete cattle
export const deleteCattle = async (req, res) => {
  const { cattle_id } = req.params;
  try {
    const deletedcattle = await Cattle.findByIdAndDelete(cattle_id);
    res.status(200).json({
      success: true,
      data: "cattle deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "Unable to delete cattle",
    });
  }
};
