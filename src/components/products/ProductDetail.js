import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useDispatch } from "react-redux/es/exports";
import { add } from "../../store/CartSlice";
import ReviewWrapper from "./ReviewWrapper";

const ProductDetail = () => {
  const [item, setItem] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:9000/api/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [params]);

  const addToCartHandler = (item) => {
    dispatch(add(item));
  };

  return (
    <>
      {item.map((item) => (
        <div
          className="relative flex my-[5rem] lg:max-w-[1320px] md:max-w-[750px] h-[auto] md:h-[auto] sm:h-[auto] mx-auto bg-white rounded-xl shadow-2xl"
          key={item.id}
        >
          <div className="absolute top-[-14px] right-[-8px]">
            <Link to="/products">
              <AiFillCloseCircle
                size={35}
                className="cursor-pointer hover:scale-105 ease-in-out duration-200"
              />
            </Link>
          </div>
          <div className="flex w-[400px] h-full mx-5">
            <img
              src={item.image}
              alt=""
              className="w-full hover:scale-125 hover:ml-[5rem] duration-300 hover:delay-500 ease cursor-pointer rounded-xl h-full object-contain"
            />
          </div>
          <div className="w-full p-5">
            <h1 className="text-4xl font-bold">{item.title}.</h1>
            <div className="flex items-center mt-4">
              <span className="flex items-center mx-4 p-1 pr-2 rounded font-medium bg-green-600 hover:scale-[1.02] cursor-pointer group">
                <AiFillStar className="fill-white mx-1 group-hover:fill-yellow-500" />
                {item.rating?.rate} / 5
              </span>
              <span className="font-medium text-xl px-1">
                {item.price?.toFixed(0)}$
              </span>
            </div>
            <div className="mt-[4rem] ">
              <p className="text-lg">{item.description}</p>
            </div>
            <div className="mt-10">
              <span className="mx-2 mb-3">
                {" "}
                <MdOutlineReviews size={20} />
                {item.rating?.count}{" "}
                <ScrollLink
                  className="text-blue-500 cursor-pointer inline hover:text-blue-400 font-medium"
                  to="review"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Reviews by users.
                </ScrollLink>
              </span>
              <button
                className="bg-blue-700/90 w-[130px] flex items-center cursor-pointer hover:bg-blue-700 rounded-xl text-white font-medium text-center p-[.6rem] shadow-xl hover:scale-[1.04] duration-200"
                onClick={() => {
                  addToCartHandler(item);
                }}
              >
                <ShoppingCartIcon style={{ fontSize: "25px", fill: "white" }} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="max-w-[1320px] h-auto py-2 flex rounded-3xl shadow-3xl mx-auto justify-center flex-wrap bg-white">
        <ReviewWrapper />
      </div>
    </>
  );
};

export default ProductDetail;
