// add the male cattle

export const addMaleCattle = async (req, res) => {
  try {
    const { name, dob, cost } = req.body;
    //save cattle to db
    const newCattle = new Cattle({
      name,
      dob,
      cost,
    });
    await newCattle.save();
    res.status(200).json({
      message: "added male cattle successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "error while uploading",
    });
  }
};
