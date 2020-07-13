const { Router } = require("express");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = Router();

////////////////////////////////// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Email is incorrect").isEmail(),
    check("password", "Password length must be minimum 6 characters").isLength({
      min: 6,
    }),
    check(
      "firstName",
      "First name length must be minimum 2 characters"
    ).isLength({
      min: 2,
    }),
    check("lastName", "Last name length must be minimum 2 characters").isLength(
      {
        min: 2,
      }
    ),
  ],
  async (req, res) => {
    try {
      console.log("Body", req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data during registration",
        });
      }
      const { email, password, firstName, lastName } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "User with this email is already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });
      await user.save();
      res.status(201).json({ message: "A new user is created" });
      // await res.redirect(201, "/profile");
    } catch (e) {
      res.status(500).json({ message: "Something went wrong...Try again" });
    }
  }
);

////////////////////////////////// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Enter the correct email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Incorrect login details" });
      }
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User is not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password, try again" });
      }
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong...Try again" });
    }
  }
);

module.exports = router;
