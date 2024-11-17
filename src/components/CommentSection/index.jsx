import React from 'react'
import { useParams } from 'react-router-dom';

function CommentSection() {
  const params = useParams();

  return (
            <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Customer Comments</h2>
  
              <div className="flex justify-between items-start flex-wrap">
              <div className="space-y-3 relative w-full lg:w-[50%]">
                <div className="bg-white p-2 lg:p-4  rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-500">
                        Posted on March 15, 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Great product! I've been using it for a week now and I'm very
                    satisfied with its performance.
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="text-gray-500 text-sm hover:text-gray-600">
                      Reply
                    </button>
                  </div>
                </div>
  
                <div className="bg-white p-2 lg:p-4 rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold">Jane Smith</h3>
                      <p className="text-sm text-gray-500">
                        Posted on March 10, 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    The shipping was fast and the product arrived in perfect
                    condition. Highly recommended!
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="text-gray-500 text-sm hover:text-gray-600">
                      Reply
                    </button>
                  </div>
                </div>

                <div className="absolute right-0">
                    <p className='px-2 py-1 shadow-md hover:shadow-lg hover:text-blue-500 transition-all duration-100 rounded-full border text-sm text-gray-700 cursor-pointer'>View More</p>
                </div>
              </div>
  
              <form className="bg-white p-4 rounded-lg shadow w-full mt-14 lg:mt-0 lg:w-[48%]">
                <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
                <div className="mb-4">
                  <textarea
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
  )
}

export default CommentSection