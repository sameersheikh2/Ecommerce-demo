const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  wishList: {
    type: Object,
  },

  cart: { products: { type: String, require: true } },
});

module.exports = mongoose.model("users", userSchema);
