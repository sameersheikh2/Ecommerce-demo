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
