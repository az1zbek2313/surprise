import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function CommentSection({ reviews }) {
  const params = useParams();
  const commentRef = useRef();
  const navigate = useNavigate();
  const [review, setReview] = useState(reviews || []);
  const [number, setNumber] = useState(2);
  const token = useSelector((state) => state.userIdReducer.uid);
  const [rating, setRating] = useState(0);

  const fetchAllUsers = async (reviews) => {
    const userIds = [...new Set(reviews.map((comment) => comment.user))];

    try {
      const userPromises = userIds.map((id) =>
        fetch(`${import.meta.env.VITE_DEFAULT_HOST}users/${id}`)
          .then((res) => res.json())
          .then((result) => ({ id, name: result.name || "Unknown User" }))
      );

      const users = await Promise.all(userPromises);

      const userMap = users.reduce((map, user) => {
        map[user.id] = user.name;
        return map;
      }, {});

      const updatedReviews = reviews.map((comment) => ({
        ...comment,
        name: userMap[comment.user] || "Unknown User",
      }));

      setReview(updatedReviews);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    if (Array.isArray(reviews)) {
      setReview(reviews.reverse());
      fetchAllUsers(reviews);
    }
  }, [reviews]);

  const thirdExample = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    color: "gray",
    activeColor: "orange",
    onChange: (newValue) => {
      setRating(newValue);
    },
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("token", token.token);

    const formdata = new FormData();
    formdata.append("product", params.id);
    formdata.append("rating", rating);
    formdata.append("comment", commentRef.current.value.trim());

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}review`, {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result?._id) {
          setReview([result, ...review]);
          commentRef.current.value = "";
          setRating(0);
        } else {
          navigate("/cart");
        }
      })
      .catch((error) => console.error("Error posting comment:", error));
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
          Customer Comments
        </h2>
        <div className="flex justify-between items-start flex-wrap">
          <div className="space-y-3 relative w-full lg:w-[50%]">
            {review.length > 0 ? (
              review
                .slice(0, number)
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
                          {items?.name || "User name"}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Posted on {formatDate(items.createdAt)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{items?.comment}</p>
                    <div className="flex items-center mt-2">
                      <span className="flex items-center gap-1 text-sm text-blue-500">
                        <p>Rating:</p>
                        <span>{items.rating}</span>
                      </span>
                    </div>
                  </div>
                ))
            ) : (
              <h3>No comment</h3>
            )}

            {review.length > number ? (
              <div className="absolute right-0">
                <p
                  className="px-2 py-1 shadow-md hover:shadow-lg hover:text-blue-500 transition-all duration-100 rounded-full border text-sm text-gray-700 cursor-pointer"
                  onClick={() => setNumber((prev) => prev + 2)}
                >
                  View More
                </p>
              </div>
            ) : (
              <div className="absolute right-0">
                <p
                  className="px-2 py-1 shadow-md hover:shadow-lg hover:text-blue-500 transition-all duration-100 rounded-full border text-sm text-gray-700 cursor-pointer"
                  onClick={() => setNumber(2)}
                >
                  View Less
                </p>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg shadow w-full mt-14 lg:mt-0 lg:w-[48%]"
          >
            <h3 className="text-lg font-semibold">Add a Comment</h3>
            <div className="flex items-center gap-4">
              <ReactStars {...thirdExample} />
              <p className="text-xl">{rating}</p>
            </div>
            <div className="mb-4">
              <textarea
                ref={commentRef}
                id="comment"
                name="comment"
                rows="3"
                className="w-full px-3 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-blue-500 flex justify-end border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
