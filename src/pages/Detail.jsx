import { useState } from "react";
import {
  detailColors,
  detailImages,
  PopularCardData,
} from "../util/contants";
import ProductCard from "../components/Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incerement, inputAmount } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";

function Detail() {
  const defaltimg =
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg";
  const [defaultColor, setDefaultColor] = useState(1);
  const [mainImage, setMainImage] = useState(defaltimg);
  const counter = useSelector(state => state.countChange);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.userIdReducer.uid);

  function handleBuy() {
    if (token) {
      
    } else {
      navigate("/login")
    }
  }

  return (
    <>
      <div className={`container px-4 mx-auto font-sans tracking-wide py-4`}>
        <div className="grid items-start grid-cols-1 lg:grid-cols-6">
          <div className="lg:col-span-3 text-center">
            <div>
              <img
                className="h-[240px] lg:h-[384px] w-full max-w-full rounded-lg object-cover"
                src={mainImage}
                alt="main image"
              />
            </div>

            <div className="flex mt-3 justify-between w-full gap-1 sm:gap-2 overflow-x-scroll pb-3">
              {detailImages.map((item) => (
                <div key={item.id} className="min-w-[24%] xs:min-w-[24.4%] sm:min-w-[24%]">
                  <img
                    className={`${
                      item.image == mainImage
                        ? "border-[1.6px] border-gray-500"
                        : ""
                    } hover:border-[1.6px] hover:border-gray-500  rounded-lg cursor-pointer transition-all duration-300`}
                    src={item.image}
                    onClick={() => {
                      setMainImage(item.image);
                    }}
                    alt="detail image"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-center items-center">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                      Yellow Summer Travel Bag
                    </h2>
                  </div>
                  <button className="group transition-all duration-500 p-0.5">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-primary-50 transition-all duration-500 group-hover:fill-primary-100"
                        cx="30"
                        cy="30"
                        r="30"
                        fill=""
                      />
                      <path
                        className="stroke-primary-600 transition-all duration-500 group-hover:stroke-primary-700"
                        d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                        stroke=""
                        stroke-width="1.6"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <div className="flex items-center">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                      $ 199.00{" "}
                    </h5>
                    <span className="ml-3 font-semibold text-lg text-primary-600">
                      30% off
                    </span>
                  </div>
                  <svg
                    className="mx-5 max-[400px]:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="36"
                    viewBox="0 0 2 36"
                    fill="none"
                  >
                    <path d="M1 0V36" stroke="#E5E7EB" />
                  </svg>
                  <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_12657_16865)">
                        <path
                          d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                          fill="white"
                        />
                        <g clip-path="url(#clip1_12657_16865)">
                          <path
                            d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_12657_16865">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_12657_16865">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-base font-medium text-white">
                      4.8
                    </span>
                  </button>
                </div>
                <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
                <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                  {detailColors.map((item) => (
                    <div key={item.id} className="color-box group">
                      <div>
                        <img
                          src={item.image}
                          onClick={() => {setDefaultColor(item.id)}}
                          alt="Summer Travel Bag image"
                          className={`${item.class} ${defaultColor == item.id && item.active}`}
                        />
                        <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-primary-600 ">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                  <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                    <button onClick={() => {dispatch(incerement())}} className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                      <svg
                        className="stroke-black group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      onChange={(e) => {
                        dispatch(inputAmount(e.target.value))
                      }}
                      className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-primary-600 outline-0 hover:placeholder:text-primary-600"
                      placeholder={counter}
                    />
                    <button onClick={() => {dispatch(decrement())}} className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                      <svg
                        className="stroke-black group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="#9CA3AF"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="group py-3 px-5 rounded-full bg-primary-50 text-primary-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-primary-300 hover:bg-primary-100">
                    <svg
                      className="stroke-primary-600 transition-all duration-500 group-hover:stroke-primary-600"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke=""
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
                <button onClick={handleBuy} className="text-center w-full px-5 py-4 rounded-[100px] bg-primary-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary-700 hover:shadow-primary-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 max-w-2xl">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">
            Product Features
          </h3>

          <ul className="grid sm:grid-cols-2 gap-3 mt-4">
            <li className="flex items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              UV Protection
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Stylish Design
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Lightweight Frame
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Scratch-Resistant Lenses
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Polarized Lenses
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              Comfortable Fit
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Product Description
            </h3>
            <p className="text-sm text-gray-600 mt-2 xs:mt-4 ">
              Step up your style game with our premium white lens sunglasses.
              Crafted for both fashion and function, these sunglasses offer UV
              protection, a stylish design, and a lightweight frame. The
              scratch-resistant and polarized lenses ensure durability and
              clarity, while the comfortable fit makes them ideal for all-day
              wear. Elevate your look with these must-have accessories for any
              occasion.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">
            Similar Products
          </h3>

          <div
            className={`flex gap-2 xs:gap-5 md:gap-6 container w-full mx-auto mt-4 overflow-x-scroll overflow-y-hidden pb-4`}
          >
            {PopularCardData.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
