const User = require("../Models/User");
const bcrypt = require("bcryptjs");
exports.Register = async (req, res) => {
  const { name, email, auth0Id, password } = req.body;

  if (!name || !email || !auth0Id || !password) {
    return res.status(404).json({
      Status: "Failed",
      Message: "Please provide all information",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      auth0Id,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error during user registration:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
