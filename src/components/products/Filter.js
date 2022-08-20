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
    <div>
      <ul className="flex ml-1 justify-evenly flex-wrap items-center mt-4 sm:w-[60%]">
        <li className="m-2 cursor-pointer px-2 rounded-md border-[1px] border-black hover:bg-black hover:text-white">
          ALL
        </li>
        {filterCategories.map((category, index) => (
          <li
            key={index}
            className="m-2 cursor-pointer  px-4 rounded-md border-[1px] border-black hover:bg-black hover:text-white"
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
