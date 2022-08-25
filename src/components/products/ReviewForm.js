import React, { useState } from "react";

const ReviewForm = ({ onAdd }) => {
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const reviews = { id: Math.random(), message: message };
    onAdd(reviews);
    setMessage("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-[50%] mx-auto flex justify-center flex-col"
    >
      <textarea
        required
        className="p-5 rounded-xl resize-none my-3 outline-gray-200 bg-gray-200 placeholder:text-black/70"
        name=""
        id=""
        cols="75"
        rows="4"
        placeholder="Write review here..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      ></textarea>
      <button className="bg-blue-500 text-white font-medium rounded-md w-[5rem]">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
