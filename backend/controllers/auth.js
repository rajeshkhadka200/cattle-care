//import schema
import User from "../models/auth.js";

// register new user
export const register = async (req, res) => {
  const { phone, password, farmName } = req.body;
  try {
    const user = await User.create({ phone, password, farmName });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// login user
export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone }).select("+password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid credentials" });
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid credentials" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
