const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create", async (req, res) => {
  const alreadyExist = await User.findOne({ email: req.body.email });
  if (alreadyExist !== null) {
    res.status(400).json({ message: "email already register" });
    return;
  }
  const userData = await User({
    userName: req.body.name,
    email: req.body.email,
    password: req.body.password,
    // wishlist: req.body.wishlist,
  });
  try {
    userData.save();
    res.status(200).json({ message: "account created" });
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

router.get("/account/find/:userEmail", async (req, res) => {
  const user = await User.findOne({ email: req.params.userEmail });
  if (user !== null) {
    res.status(200).json(user);
    return;
  }
  res.status(400).json({ message: "Email dosen't match any account!" });
});

router.patch("/account/updatePassword", async (req, res) => {
  if (req.body.password.length < 6) {
    return res.status(400).json({ message: "password less than 6 character" });
  }
  const user = await User.findOne({ id: req.body.id });
  user.password = req.body.password;
  user.save();
  res.status(200).json({ message: "password updated" });
});
module.exports = router;
