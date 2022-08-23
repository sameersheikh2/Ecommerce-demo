import React from "react";

const Filter = ({ onFilter }) => {
  const allProducts = JSON.parse(localStorage.getItem("products"));
  // console.log(allProducts);
  const filterCategories = Array.from(
    new Set(
      allProducts.map((itemCategory) => {
        return itemCategory.category;
      })
    )
  );
  // console.log(filterCategories);
  return (
    <div className="w-[100%] mt-3">
      <ul className="flex flex-wrap items-center mt-1 sm:w-[60%] ">
        {filterCategories.map((category, index) => (
          <li
            key={index}
            className="mr-2 cursor-pointer px-4 rounded-md border-[1px] border-black hover:bg-black hover:text-white"
            onClick={() => {
              onFilter(category);
            }}
          >
            {category.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
