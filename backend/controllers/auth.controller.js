//import schema
import User from "../models/auth.model.js";

// register new user
export const register = async (req, res) => {
  const { phone, password, farmName } = req.body;
  try {
    // check if user already exists
    const user = await User.findOne({ phone });
    if (user) {
      return res
        .status(404)
        .json({ success: false, error: "User already exists" });
    }

    const newUser = await User.create({ phone, password, farmName });
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// login user
export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone }).select("+password");

    // check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "User doesn't exist" });
    }

    // check if password is correct
    const isMatch = (await user.password) == password;
    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid Password" });
    }

    // send user
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
