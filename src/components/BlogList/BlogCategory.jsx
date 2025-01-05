import React, { useState } from "react";

const blogCategoryNames = [
  "All",
  "Electronics Devices",
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
];

function BlogCategory({setBlogModal, blogModal}) {
  const [checked, setChecked] = useState("All");

  return (
    <div className="rounded p-2 md:p-6 border max-w-[400px] border-[#E4E7E9]">
      <div className="flex justify-between">
        <h2 className="font-medium mb-2 uppercase sm:mb-4">Category</h2>
        <svg
          onClick={() => {setBlogModal(false)}}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`bi bi-x w-7 h-7 ${!blogModal && "hidden"}`}
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
      <ul className="flex flex-col items-start gap-2 sm:gap-3">
        {blogCategoryNames.map((item, index) => (
          <li
            key={index + 1}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="radio"
              onChange={() => {
                setChecked(item);
              }}
              name="blogcategory"
              defaultChecked={item == "All"}
              id={item}
              className="w-4 md:w-5 h-4 md:h-5 cursor-pointer"
            />
            <label
              htmlFor={item}
              className={`${
                item === checked && "font-semibold"
              } cursor-pointer text-xs sm:text-sm`}
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogCategory;
