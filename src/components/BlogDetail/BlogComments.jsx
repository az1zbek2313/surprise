import React, { useState } from "react";

const commentData = [
  {
    id:1,
    name:"Annette Black",
    createdAt:"26 Apr, 2021",
    comment:"In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam."
  },
  {
    id:2,
    name:"Devon Lane",
    createdAt:"24 Apr, 2021",
    comment:"Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros."
  },
  {
    id:3,
    name:"Jacob Jones",
    createdAt:"20 Apr, 2021",
    comment:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  },
  {
    id:4,
    name:"Jane Cooper",
    createdAt:"18 Apr, 2021",
    comment:"Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex."
  },
  {
    id:5,
    name:"Darrell Steward",
    createdAt:"7 Apr, 2021",
    comment:"Nulla molestie interdum ultricies. "
  }
]

function BlogComments() {
  const [review, setReview] = useState(commentData);
  const [number, setNumber] = useState(2);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    // Sana qismlarini olamiz
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Oy 0-indekslangan
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Formatni yig'amiz
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <div>
      <div className="my-8">
        <h2 className="font-medium text-xl text-gray-900 mb-4 sm:mb-6">
          Leave a Commends
        </h2>
        <form
          action="Comment blog"
          className="flex gap-3 flex-wrap w-full my-2"
        >
          <div className="flex flex-col gap-1 w-full sm:w-[49%]">
            <label htmlFor="fullname" className="text-sm">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              className="focus:outline-none border rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-[49%]">
            <label htmlFor="email" className="text-sm">
              Email Adress
            </label>
            <input
              id="email"
              type="text"
              className="focus:outline-none border rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="description" className="text-sm">
              Description
            </label>
            <textarea
              id="description"
              className="focus:outline-none border rounded-sm p-3 h-32 placeholder:text-sm"
              placeholder="What’s your thought about this blog..."
            ></textarea>
          </div>
          <input
            type="button"
            value="post Commends"
            className="focus:outline-none font-bold text-white bg-primary-600 text-sm px-6 py-3 rounded-sm uppercase cursor-pointer hover:bg-primary-700 active:bg-primary-500 transition-all duration-200"
          />
        </form>
      </div>

      <div className="my-8 mb-14">
        <h2 className="font-medium text-xl text-gray-900 mb-4 sm:mb-6">
          Commends
        </h2>
        <div className="space-y-3 relative w-full">
          {review.length > 0 ? (
            review
              .slice(0, number) // Faqat kerakli miqdorda sharhni ko‘rsatamiz
              .map((items, index) => (
                <div
                  key={index}
                  className="bg-white p-2 lg:p-4 rounded-lg shadow"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold">
                        {items?.name ? items?.name : "User name"}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Posted on {items.createdAt}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{items?.comment}</p>
                </div>
              ))
          ) : (
            <h3>No comment</h3>
          )}

          {review.length > number ? (
            <div className="absolute left-0">
              <button
                onClick={() => setNumber((prev) => prev + 2)}
                className="flex gap-2 items-center px-6 py-3 rounded-sm border-2 border-primary-600 hover:bg-primary-100 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise text-primary-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
                <span className="uppercase text-sm font-bold text-primary-600">
                  Load More
                </span>
              </button>
            </div>
          ) : (
            <div className="absolute left-0">
              <button
                className="flex gap-2 items-center px-6 py-3 rounded-sm border-2 border-primary-600 hover:bg-primary-100 transition-all duration-200"
                onClick={() => setNumber(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise text-primary-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
                <span className="uppercase text-sm font-bold text-primary-600">
                  Load Less
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogComments;
