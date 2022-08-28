import React, { useState } from "react";
import ReviewFrom from "./ReviewForm";
import Review from "./Review";

const ReviewWrapper = () => {
  const [reviews, setReviews] = useState([]);

  const addReviewHandler = (reviews) => {
    setReviews((preReviews) => {
      return [...preReviews, reviews];
    });
  };

  return (
    <div id="review" className="w-[100%]">
      <ReviewFrom onAdd={addReviewHandler} />
      <div className="w-[96%] mx-auto">
        <Review reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewWrapper;
