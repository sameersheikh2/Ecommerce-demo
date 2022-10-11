const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productsRoute = require("./routes/product");
const userDataRoute = require("./routes/userData");

app.use(bodyParser.json());
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
app.use("/api/users/create", userDataRoute);

app.listen(port, () => {
  // listen to  req.
  console.log(`Example app listening on port ${port}`);
});
