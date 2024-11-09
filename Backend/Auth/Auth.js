const express = require("express");
const User = require("../Models/User");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());

// Registration
exports.Register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate inputs
    if (!username || !email || !password) {
      return res.status(401).json({
        Status: "Failed",
        Message: "Please provide username, email, and password",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(402).json({
        Status: "Failed",
        Message: "Account is already created By this email",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role,
    });

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, "qwerty12345", {
      expiresIn: "90d",
    });
    req.user = newUser;
    res.status(200).json({
      Status: "Success",
      Message: "Account has been created",
      role: newUser.role,
      email: newUser.email,
      username: username,
      Token: token,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(402).json({ error: error.message });
    } else {
      res.status(500).json({
        Status: "Failed",
        Message: "Please try again later",
      });
      console.error("Error while creating account:", error);
    }
  }
};

// Login
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!email || !password) {
      return res.status(400).json({
        Status: "Failed",
        Message: "please provide EMAIL and PASSWORD",
      });
    }

    if (!user) {
      return res.status(401).json({
        Status: "Failed",
        Message: "User Not Found With This Email Id",
      });
    }
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res.status(402).json({
        Status: "Failed",
        Message: "Password is incorrect",
      });
    }

    const token = jwt.sign({ id: user._id }, "qwerty12345", {
      expiresIn: "90d",
    });

    req.user = user;
    res.status(200).json({
      Status: "Success",
      Message: "Login  SuccessFull",
      Token: token,
      role: user.role,
      email: user.email,
      username: user.username,
      cartdata: user.cartdata,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      Status: "Failed",
      Message: "Failure While Login Account",
    });
  }
};
