const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/register", async (req, res) => {
  try {
    // checking user is Already exists or not

    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Failed to create a New User",
        reason: "Already Exists in DB",
      });
    }
    // Create a new User

    const newUser = new User({
      fullName: req.body.username || "",
      username: req.body.username,
      email: req.body.email,
    });
    //Saving new User

    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
