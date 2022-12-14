import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { add } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="cursor-pointer bg-white py-3 h-auto relative flex items-center justify-center flex-col w-[400px] group">
      <button
        title="add to cart"
        className="absolute hidden top-3 right-5 hover:scale-110 duration-200 ease group-hover:block"
        onClick={() => {
          addToCartHandler(product);
        }}
      >
        <ShoppingCartIcon
          style={{
            fontSize: "30px",
            fill: "white",
            borderRadius: "100px",
            backgroundColor: "black",
            padding: "4px",
          }}
        />
      </button>
      <Link to={`/products/${product.id}`} key={product.id}>
        <div className="flex flex-col items-center">
          <div className="w-[150px]">
            <img
              src={product.image}
              alt=""
              className="object-contain w-full h-[215px]"
            />
          </div>
          <div className="flex flex-col h-auto items-center flex-wrap my-4 py-2">
            <h2 className="text-[15px] px-2 font-bold">{product.title}</h2>
            <div className="py-2">
              <span className="text-green-600 font-medium">
                $ {product.price?.toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
