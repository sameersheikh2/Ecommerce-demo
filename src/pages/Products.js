import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import TuneIcon from "@mui/icons-material/Tune";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [showFilterOption, setShowFilterOption] = useState(false);

  useEffect(() => {
    (async () => {
      const allProducts = localStorage.getItem("products");
      if (allProducts) {
        setProducts(JSON.parse(allProducts));
      } else {
        try {
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          localStorage.setItem("products", JSON.stringify(data));
          setProducts(data);
        } catch (err) {
          // const message = (err)
          console.log(err);
        }
      }
    })();
  }, []);

  const productFilterHandler = (filteredValue) => {
    console.log(filteredValue);
    setProducts(
      products.filter((item) => {
        return item.category === filteredValue;
      })
    );
    console.log(products);
  };

  return (
    <>
      <div className="w-[95%] mx-auto">
        <h1 className="mt-12 ml-7 text-2xl font-medium">All Products -</h1>
        <button
          className="mt-4 ml-7 text-base font-medium flex items-center rounded-lg shadow-3xl px-3 "
          onClick={() => {
            setShowFilterOption(!showFilterOption);
          }}
        >
          <TuneIcon style={{ fontSize: "17px", marginTop: "0px" }} /> Filter
        </button>
        {showFilterOption && <Filter onFilter={productFilterHandler} />}
        <div className="flex flex-wrap gap-4 rounded justify-center">
          {products.map((product) => (
            <ProductList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
