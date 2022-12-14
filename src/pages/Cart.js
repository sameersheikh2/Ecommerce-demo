import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { remove } from "../store/CartSlice";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const removeItemHandler = (cartItem) => {
    dispatch(remove(cartItem));
  };

  return (
    <>
      {cartItem.length === 0 ? (
        <div className="w-[30%] text-center h-[83vh] items-center flex-col justify-center mx-auto mt-18 flex">
          <ProductionQuantityLimitsIcon
            style={{ fontSize: "65px", fill: "red" }}
          />
          <h3 className="text-2xl p-2">
            Your Cart is empty. Add some items from{" "}
            <Link
              to="/products"
              className="cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white px-2 rounded"
            >
              here.
            </Link>
          </h3>
        </div>
      ) : (
        <>
          <div className="w-[80%] my-7 h-auto flex items-center justify-between mx-auto">
            <button className="rounded px-2 h-7 shadow-4xl text-base hover:bg-[#E65c4f] duration-200 ease bg-white hover:text-white ">
              <Link to="/products">Continue Shopping</Link>
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl w-[80%] h-auto flex flex-col  mx-auto my-[65px]">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-evenly flex-wrap sm:flex-row p-5 my-3"
              >
                <div className="w-[250px] h-auto ">
                  <img src={item.image} alt="" className="object-contain" />
                </div>
                <div className="max-w-[100%] justify-between sm:max-w-[50%]  flex flex-wrap flex-col">
                  <div>
                    <h1 className="text-3xl mb-5 font-medium">{item.title}</h1>
                    <span className="font-medium">Description:</span>
                    <p className="text-base mt-3">{item.description}</p>
                  </div>
                  <div>
                    <div className="flex mt-6 justify-between items-center ">
                      <span className=" font-medium shadow-md rounded bg-green-500 w-auto border-t py-1 px-2 text-center">
                        <span>Price: </span>
                        {item.price?.toFixed(0)}$
                      </span>
                      <span className=" font-medium shadow-md rounded bg-blue-500 w-auto border-t py-1 px-2 text-center">
                        <span>Quantity: </span>
                        {item.quantity}
                      </span>
                      <button
                        className="cursor-pointer hover:shadow-xl hover:scale-[1.04] duration-75 ease"
                        onClick={() => removeItemHandler(item)}
                      >
                        <DeleteOutlineOutlinedIcon
                          style={{ fontSize: "25px", fill: "coral" }}
                        />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col pb-11 items-center justify-around">
            <span className="text-2xl font-bold mb-2">
              Total:
              {cartItem
                .map((total) => total.quantity * total.price)
                .reduce((a, b) => a + b)
                .toFixed(0)}
              $
            </span>
            <button className="rounded px-2 shadow-4xl text-base hover:bg-[#E65c4f] duration-200 ease bg-white hover:text-white">
              Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
