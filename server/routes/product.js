const express = require("express");
const router = express.Router();
const products = require("../models/Product");

router.get("/", (req, res) => {
  products
    .find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

router.get("/:id", (req, res) => {
  products
    .find()
    .then((products) => {
      res.status(200).json(
        products.filter((product) => {
          return product.id === parseInt(req.params.id);
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.get("/category/:productCategory", (req, res) => {
  products
    .find()
    .then((products) => {
      res.status(200).json(
        products.filter((product) => {
          return product.category === req.params.productCategory;
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

module.exports = router;
