import React, { useEffect, useState } from "react";
import Filter from "../components/products/Filter";
import ProductList from "../components/products/ProductList";
import TuneIcon from "@mui/icons-material/Tune";
import Close from "@mui/icons-material/Close";
// import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [showFilterOption, setShowFilterOption] = useState(false);
  // const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = localStorage.getItem("products");
      if (allProducts) {
        setProducts(JSON.parse(allProducts));
        setFilterProduct(JSON.parse(allProducts));
      } else {
        try {
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          localStorage.setItem("products", JSON.stringify(data));
          setProducts(data);
          setFilterProduct(data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);

  const productFilterHandler = async (filterValue) => {
    setSelectedFilter(filterValue);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${filterValue}`
      );
      const data = await res.json();
      setFilterProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (selectedFilter !== "") {
      setFilterProduct(filterProduct);
    } else {
      setFilterProduct(products);
    }
  }, [selectedFilter, products, filterProduct]);

  return (
    <>
      <div className="w-[100%] mx-auto scroll-smooth">
        <h1 className="mt-1 ml-7 text-2xl font-medium">All Products -</h1>
        <div className="flex justify-end w-[95%]">
          <button
            className="mt-3 ml-7 bg-white/80 text-base font-medium flex items-center rounded-lg shadow-3xl px-3 "
            onClick={() => {
              setShowFilterOption(!showFilterOption);
            }}
          >
            <TuneIcon style={{ fontSize: "17px", marginTop: "0px" }} /> Filter
          </button>
        </div>
        <div className="flex mt-3 mb-3 items-start w-[95%] m-auto flex-col justify-start">
          <button
            className="bg-white/80 rounded-lg shadow-4xl px-[6px] font-semibold"
            onClick={() => {
              setSelectedFilter("");
            }}
          >
            {selectedFilter.length > 1 && (
              <Close style={{ fontSize: "22px" }} />
            )}
            {selectedFilter.toUpperCase()}
          </button>
          {showFilterOption && <Filter onFilter={productFilterHandler} />}
        </div>
        <div className="flex flex-wrap justify-center">
          {filterProduct.map((product) => (
            <ProductList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
