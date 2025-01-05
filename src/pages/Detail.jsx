import { useEffect, useState } from "react";
import { detailColors, detailImages } from "../util/contants";
import { useDispatch, useSelector } from "react-redux";
import {
  addedMyCart,
  addedMyFavourites,
  changeHeartMyFavourites,
  deletedMyFavourites,
} from "../Redux/Actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import { CommentSection, RemeberProducts } from "../components";
import { toast } from "sonner";

function Detail() {
  const defaltimg =
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg";
  const [defaultColor, setDefaultColor] = useState(1);
  const [detail, setDetail] = useState({});
  const cartProducts = useSelector((state) => state.myCart);
  const params = useParams();
  const exists = cartProducts.some((item) => item._id === params.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.userIdReducer.uid);
  const likes = useSelector((state) => state.myFavourites);
  const someLike = likes.some((el) => el._id == detail._id);
  const [mainImage, setMainImage] = useState(defaltimg);

  function fetchProductDetail() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${import.meta.env.VITE_DEFAULT_HOST}product/${params.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDetail(result);
        setMainImage(`${import.meta.env.VITE_IMAGE}${result?.images?.[0]}`);
      })
      .catch((error) => console.log("error", error));
  }

  function handleSave(e) {
    e.stopPropagation();
    toast.success("Yoqtirgan Mahsulotlaringizga saqlandi");

    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var formdata = new FormData();
    formdata.append("productId", detail._id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}users/favorite`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message == "Product added to favorites") {
          dispatch(addedMyFavourites(detail));
          dispatch(changeHeartMyFavourites(detail));
        }
      })
      .catch((error) => console.log("error", error));
    dispatch(addedMyFavourites(detail));
    dispatch(changeHeartMyFavourites(detail));
  }

  function handleRemove(e) {
    e.stopPropagation();
    toast.error("Yoqtirgan Mahsulotlaringizdan o'chirildi");
    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var formdata = new FormData();
    formdata.append("productId", detail._id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}users/favorite`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message == "Product removed from favorites") {
          dispatch(deletedMyFavourites(detail._id));
          dispatch(changeHeartMyFavourites(detail));
        }
      })
      .catch((error) => console.log("error", error));
    dispatch(deletedMyFavourites(detail._id));
    dispatch(changeHeartMyFavourites(detail));
  }

  useEffect(() => {
    fetchProductDetail();
  }, []);

  function handleToCart() {
    if (!exists) {
      dispatch(addedMyCart(detail));
      toast.success("Mahsulot cartga qo'shildi");
    }    
      navigate("/cart");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

  function handleBuy(e) {
    e.preventDefault()
    if (token) {
      handleToCart()
    } else {
      navigate("/login");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className={`container px-4 mx-auto font-sans tracking-wide py-4`}>
        <div className="grid items-start grid-cols-1 lg:grid-cols-6">
          <div className="lg:col-span-3 text-center">
            <div>
              <img
                className="h-[240px] lg:h-[344px] w-full shadow-md border max-w-full rounded-lg object-cover"
                src={mainImage}
                alt="main image"
              />
            </div>

            <div
              className={`flex mt-3 justify-start w-full gap-1 sm:gap-2 overflow-x-hidden transition-all duration-1000 ${
                detail?.images?.length > 4 && "hover:overflow-x-scroll"
              } pb-3`}
            >
              {detail?.images &&
                detail?.images.map((item, index) => (
                  <div
                    key={index}
                    className={
                      (detail?.images?.length <= 2 && "w-[49%]") ||
                      (detail?.images?.length == 3 && "w-[32%]") ||
                      (detail?.images?.length > 3 && "w-[24%]")
                    }
                  >
                    <img
                      className={`${
                        `${import.meta.env.VITE_IMAGE}${item}` == mainImage
                          ? "border-2 border-red-600"
                          : "border-[1.6px]"
                      } hover:border-[1.6px] w-full object-cover hover:border-red-600 h-44 xs:h-52 md:h-56 rounded-lg cursor-pointer transition-all duration-300`}
                      src={`${import.meta.env.VITE_IMAGE}${item}`}
                      onClick={() => {
                        setMainImage(`${import.meta.env.VITE_IMAGE}${item}`);
                      }}
                      alt="detail image"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-start items-center">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 lg:mx-auto mt-2 lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-4 md:mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-lg xs:text-2xl lg:text-3xl leading-10 text-gray-900">
                      {detail?.name?.uz}
                    </h2>
                  </div>
                  <button className="group transition-all duration-500 p-0.5">
                    {!someLike ? (
                      <svg
                        viewBox="0 0 60 60"
                        fill="none"
                        onClick={handleSave}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 xs:w-10 sm:w-12"
                      >
                        <circle
                          className="fill-primary-50 transition-all duration-500 group-hover:fill-primary-100"
                          cx="30"
                          cy="30"
                          r="30"
                        />
                        <path
                          className="stroke-red-600 transition-all duration-500 group-hover:stroke-red-700"
                          d="M30 42.35l-5.25-4.78C18.4 31.36 15 27.28 15 23.5 15 19.36 18.36 16 22.5 16c2.84 0 5.49 1.24 7.01 3.3C30.51 17.24 33.16 16 36 16 40.14 16 43.5 19.36 43.5 23.5c0 3.78-3.4 7.86-9.75 14.07L30 42.35z"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 60 60"
                        fill="none"
                        onClick={handleRemove}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 xs:w-10 sm:w-12"
                      >
                        <circle
                          className="fill-primary-50 transition-all duration-500 group-hover:fill-primary-100"
                          cx="30"
                          cy="30"
                          r="30"
                        />
                        <path
                          className="fill-red-600 transition-all duration-500 group-hover:fill-red-700"
                          d="M30 42.35l-5.25-4.78C18.4 31.36 15 27.28 15 23.5 15 19.36 18.36 16 22.5 16c2.84 0 5.49 1.24 7.01 3.3C30.51 17.24 33.16 16 36 16 40.14 16 43.5 19.36 43.5 23.5c0 3.78-3.4 7.86-9.75 14.07L30 42.35z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="flex min-[400px]:flex-row min-[400px]:items-center mb-4 md:mb-4">
                  <div className="flex items-center">
                    <h5 className="font-manrope font-semibold text-base md:text-lg xl:text-2xl leading-9 text-gray-900 ">
                      $ {detail?.price}.00{" "}
                    </h5>
                    <span className="ml-3 font-semibold text-base md:text-lg line-through text-red-600">
                      $ 219.00
                    </span>
                  </div>
                  <svg
                    className="mx-5 max-[400px]:flex"
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
                      <g clipath="url(#clip0_12657_16865)">
                        <path
                          d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                          fill="white"
                        />
                        <g clipath="url(#clip1_12657_16865)">
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
                      {detail?.rating}
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
                          onClick={() => {
                            setDefaultColor(item.id);
                          }}
                          alt="Summer Travel Bag image"
                          className={`${item.class} ${
                            defaultColor == item.id && item.active
                          }`}
                        />
                        <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-primary-600 ">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                  <button
                    onClick={handleToCart}
                    className={`group py-3 px-5 rounded-full ${
                      !exists
                        ? "bg-red-600 hover:bg-red-700 active:bg-red-400 text-red-50"
                        : "bg-red-50 hover:bg-red-100 active:bg-red-300 text-red-600"
                    } font-semibold text-sm md:text-base lg:text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-primary-300`}
                  >
                    <svg
                      className={`${
                        !exists
                          ? "stroke-red-50 group-hover:stroke-red-50"
                          : "stroke-red-600 group-hover:stroke-red-600"
                      } transition-all duration-500`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    {!exists ? "Add to cart" : "Added to Cart"}
                  </button>
                  <button
                    onClick={handleBuy}
                    className="text-center w-full px-5 py-4 rounded-[100px] bg-primary-600 flex items-center justify-center font-semibold text-sm md:text-base lg:text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary-700 hover:shadow-primary-300"
                  >
                    Buy Now
                  </button>
                </div>
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
              {detail?.description?.uz}
            </p>
          </div>
        </div>

        <CommentSection reviews={detail.reviews}/>

        <RemeberProducts data={detail} />
      </div>
    </>
  );
}

export default Detail;
