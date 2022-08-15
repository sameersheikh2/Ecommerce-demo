import React from "react";

const Filter = ({ onFilter, products }) => {
  const filterCategories = Array.from(
    new Set(
      products.map((itemCategory) => {
        return itemCategory.category;
        // <li className="m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white">
        // </li>
      })
    )
  );
  console.log(filterCategories);
  return (
    <div>
      <ul className="flex ml-1 justify-evenly flex-wrap items-center mt-4 sm:w-[60%]">
        {filterCategories.map((category) => (
          <li
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
