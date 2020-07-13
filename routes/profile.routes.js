const { Router } = require("express");
const auth = require("../middleware/auth.middleware");

const User = require("../models/User");

const router = Router();

router.get("/profile/:id", async (req, resp) => {
  try {
    const profile = await User.findById(req.params.userId);
    res.json(profile);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong...Try again" });
  }
});

module.exports = router;
