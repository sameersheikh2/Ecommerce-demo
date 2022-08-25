import React from "react";
import { Avatar } from "@mui/material";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Review = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-wrap items-start my-9">
          <div className="mr-4">
            <Avatar sx={{ width: 100, height: 100 }} />
          </div>
          <p>{review.message}</p>
          <div className="flex justify-end w-[90%] items-end h-[100%]">
            <AiOutlineLike
              size={30}
              className="mx-1 cursor-pointer hover:scale-110 hover:bg-black hover:fill-white hover:rounded-2xl p-1"
            />
            <AiOutlineDislike
              size={30}
              className="mx-1 cursor-pointer hover:scale-110 hover:bg-black hover:fill-white hover:rounded-2xl p-1"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Review;
