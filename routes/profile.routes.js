const { Router } = require("express");
const Profile = require("../models/Profile");
const router = new Router();
const auth = require("../middleware/auth.middleware");
const config = require("config");

// to edit profile
router.post("/edit", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");

    // const profile = await Profile.find({ owner: req.user.userId });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong...Try again" });
  }
});

// to get all users list
router.get("/", async (req, res) => {
  try {
    const users = await Profile.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong...Try again" });
  }
});

// to get user Profile by userId
router.get("/:userId", async (req, res) => {
  try {
    const user = await Profile.findById(req.params.userId);
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong...Try again" });
  }
});

module.exports = router;
