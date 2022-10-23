const { RssFeed } = require("@mui/icons-material");
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create", async (req, res) => {
  const alreadyExist = await User.findOne({ email: req.body.email });
  if (alreadyExist !== null) {
    res.status(400).json({ message: "email already exist" });
    return;
  }
  const userData = await User({
    userName: req.body.name,
    email: req.body.email,
    password: req.body.password,
    wishlist: {
      title: req.body.wishlist.title,
      price: req.body.price,
      description: req.body.description,
    },
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

router.post("/account/find", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user !== null) {
    res.status(200).send(user);
    return;
  }
  res.status(400).json({ message: "Email dosen't match any account" });
});

// router.get("/", (req, res) => {
//   res.send("success");
// });

module.exports = router;
