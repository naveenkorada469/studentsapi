const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({
      message: "Registration successful",
    });

  } catch (error) {

    res.json({
      message: error.message,
    });

  }

});


// LOGIN

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.json({
        message: "User not found",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.json({
        message: "Invalid password",
      });

    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {

    res.json({
      message: error.message,
    });

  }

});

module.exports = router;