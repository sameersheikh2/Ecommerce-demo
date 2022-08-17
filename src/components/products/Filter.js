import { CategoryOutlined } from "@mui/icons-material";
import React from "react";

const Filter = ({ onFilter }) => {
  const allProducts = JSON.parse(localStorage.getItem("products"));
  console.log(allProducts);
  const filterCategories = Array.from(
    new Set(
      allProducts.map((itemCategory) => {
        return itemCategory.category;
      })
    )
  );
  console.log(filterCategories);
  return (
    <div>
      <ul className="flex ml-1 justify-evenly flex-wrap items-center mt-4 sm:w-[60%]">
        {filterCategories.map((category, index) => (
          <li
            key={index}
            className="m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white"
            onClick={() => {
              onFilter(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
