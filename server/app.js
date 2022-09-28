const express = require("express");
const app = express();
const products = require("./products.json");
const cors = require("cors");
const port = 9000;
const mongoose = require("mongoose");
app.use(cors());

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://sameersheikh1:sheikh.mongodb1@mystore.00cjup1.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  res.json(
    products.filter((product) => {
      return product.id === parseInt(req.params.id);
    })
  );
});

app.get("/api/products/category/:productCategory", (req, res) => {
  res.json(
    products.filter((product) => {
      return product.category === req.params.productCategory;
    })
  );
});

app.listen(port, () => {
  // listen to  req.
  console.log(`Example app listening on port ${port}`);
});
