const express = require("express");
const app = express();
const products = require("./products.json");
const cors = require("cors");
const port = 9000;
app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  //(two arg.)(path, call back fnc.)
<<<<<<< HEAD

=======
  if (req.params.id !== products.length) {
    res.status(404).send("error");
    return;
  }
>>>>>>> 316625c1f52ebd09c16354a0cddd3c4c20d7d32b
  res.json(
    products.filter((product) => {
      return product.id === parseInt(req.params.id);
    })
  );
});
app.get("/api/products/category/:productCategory", (req, res) => {
  res.json(
<<<<<<< HEAD
    products.filter((product) => {
      return product.category === req.params.productCategory;
=======
    products.find((product) => {
      return product.category === parseInt(req.params.productCategory);
>>>>>>> 316625c1f52ebd09c16354a0cddd3c4c20d7d32b
    })
  );
});

app.listen(port, () => {
<<<<<<< HEAD
  // listen to  req.
=======
  // listen to req.
>>>>>>> 316625c1f52ebd09c16354a0cddd3c4c20d7d32b
  console.log(`Example app listening on port ${port}`);
});
