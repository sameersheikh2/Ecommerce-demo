const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productsRoute = require("./routes/product");

app.use(cors());
dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.use("/api/products", productsRoute);

app.use("/api/products/:id", productsRoute);

app.use("/api/products/category/:productCategory", productsRoute);

app.listen(port, () => {
  // listen to  req.
  console.log(`Example app listening on port ${port}`);
});
