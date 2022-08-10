import React, { useState } from "react";
import DummyReview from "./DummyReview";

const Review = () => {
  const [typedReview, setTypedReview] = useState("");
  const [review, setReview] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { id: Math.random(), message: typedReview };
    setReview((preReview) => {
      return [...preReview, data];
    });
    setTypedReview("");
  };

  return (
    <div id="review" className="w-[100%]">
      <div>
        <form
          onSubmit={submitHandler}
          className="w-[50%] mx-auto flex justify-center flex-col"
        >
          <textarea
            className="p-5 rounded-xl resize-none my-3 outline-gray-200 bg-gray-200 placeholder:text-black/70"
            name=""
            id=""
            cols="75"
            rows="4"
            placeholder="Write review here..."
            onChange={(e) => {
              setTypedReview(e.target.value);
            }}
            value={typedReview}
          ></textarea>
          <button className="bg-blue-500 text-white font-medium rounded-md w-[5rem]">
            Submit
          </button>
        </form>
      </div>
      <div className="w-[96%] mx-auto">
        <DummyReview review={review} />
      </div>
    </div>
  );
};

export default Review;
