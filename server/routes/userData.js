const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const alreadyExist = await User.findOne({ email: req.body.email });
  if (alreadyExist !== null) {
    res.json({ message: "email already exist" });
    return;
  }
  const userData = await User({
    userName: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    userData.save();
    res.status(200).json({ message: "account created" });
  } catch (err) {
    res.send(err);
  }
});

// router.get("/", (req, res) => {
//   res.send("success");
// });

module.exports = router;
