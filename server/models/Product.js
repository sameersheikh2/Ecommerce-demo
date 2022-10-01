const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: { type: Number, require: true },
  title: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  category: { type: String, require: true },
  image: { type: String, require: true },
  rating: {
    rate: { type: Number, require: true },
    count: { type: Number, require: true },
  },
});

module.exports = mongoose.model("products", productSchema);
