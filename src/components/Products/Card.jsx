import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { cardImage9 } from "../../assets";
import "./style.css";
import React from "react";
import {
  addedMyCart,
  addedMyFavourites,
  changeHeartMyFavourites,
  deletedMyFavourites,
  productId,
} from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DetailModal from "../DetailModal";

function Card({ product, height, width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useSelector((state) => state.productIdReducer);
  const cartProducts = useSelector((state) => state.myCart);
  const token = useSelector((state) => state.userIdReducer.uid);
  const exists = cartProducts.some((item) => item._id === product._id);
  const likes = useSelector((state) => state.myFavourites);
  const someLike = likes.some((el) => el._id == product._id);
  const [hover, setHover] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const showDetailModal = params.id === product._id && isDetailModalOpen;


  function handleSave(e) {
    e.stopPropagation();
    toast.success("Yoqtirgan Mahsulotlaringizga saqlandi");

    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var formdata = new FormData();
    formdata.append("productId", product._id);

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
          dispatch(addedMyFavourites(product));
          dispatch(changeHeartMyFavourites(product));
        }
      })
      .catch((error) => console.log("error", error));
    dispatch(addedMyFavourites(product));
    dispatch(changeHeartMyFavourites(product));
  }
  function handleRemove(e) {
    e.stopPropagation();
    toast.error("Yoqtirgan Mahsulotlaringizdan o'chirildi");
    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var formdata = new FormData();
    formdata.append("productId", product._id);

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
          dispatch(deletedMyFavourites(product._id));
          dispatch(changeHeartMyFavourites(product));
        }
      })
      .catch((error) => console.log("error", error));
    dispatch(deletedMyFavourites(product._id));
    dispatch(changeHeartMyFavourites(product));
  }
  function handleToCart(e) {
    e.stopPropagation()
    if (product.error !== "Failed to get product") {
      dispatch(addedMyCart(product));

      if (!exists) {
        toast.success("Mahsulot cartga qo'shildi");
      }
      
      navigate("/cart");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
    }
  }
  return (
    <>
      {/* DETAIL MODAL  */}
      {showDetailModal && <DetailModal setIsDetailModalOpen={setIsDetailModalOpen}/>}

      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={`flex flex-col gap-2 sm:gap-[10px] ${width}`}
      >
        <div
          onClick={() => {
            navigate(`/detail/${product?._id}`);
          }}
          className="group relative bg-[rgb(121, 121, 121)]"
        >
          {/* Like Save */}
          {!someLike ? (
            <span className="absolute lg:hidden cursor-pointer top-2 right-2 sm:top-3 sm:right-4 w-5 sm:[&>svg]:w-6 z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="red"
                fill="currentColor"
                onClick={handleSave}
                className="bi bi-suit-heart hover:text-red-500 transition-all duration-300"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </span>
          ) : (
            <span className="absolute lg:hidden cursor-pointer top-2 right-2 sm:top-3 sm:right-4 w-5 sm:[&>svg]:w-6 z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                onClick={handleRemove}
                className="bi bi-suit-heart-fill text-red-600 hover:text-red-500 transition-all duration-300"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
            </span>
          )}
          <div
            className={`overflow-hidden relative border shadow rounded-md sm:rounded-[10px] border-gray-200 opacity-90 transition duration-500 ease-in-out group-hover:opacity-100 ${
              height ? height : ""
            }`}
          >
            <img
              src={
                (product?.image && cardImage9) ||
                (product?.images.length &&
                  `https://surprize.uz${product.images[0]}`)
              }
              alt="card image"
              className={`animate-fade-in block w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110 ${
                height ? height : "h-auto"
              }`}
            />
          </div>
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className="absolute cursor-pointer top-0 flex items-center justify-center rounded-md sm:rounded-[10px] w-full transition-all duration-200 hover:bg-black/20 h-full z-[10]"
          >
            {hover && (
              <div className="flex justify-between items-center gap-1 lg:gap-3">
                {/* Like Icon */}
                <button className=" group transition-all duration-500 p-0.5">
                  {!someLike ? (
                    <svg
                      viewBox="0 0 60 60"
                      fill="none"
                      onClick={handleSave}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 md:w-8 lg:w-12"
                    >
                      <circle
                        className="fill-primary-50 bg-primarfill-primary-50 transition-all duration-500 group-hover:fill-primary-50"
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
                      className="w-6 md:w-8 lg:w-12"
                    >
                      <circle
                        className="fill-primary-50 transition-all duration-500 group-hover:fill-primary-50"
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

                {/* Cart Icon  */}
                <button
                  onClick={handleToCart}
                  className="group hover:bg-red-500 hover:text-white transition-all duration-500 p-[6px] lg:p-3 bg-primary-50 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-cart2 w-3 md:w-4 lg:w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                </button>

                {/* Eye Icon  */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(productId(product?._id));
                    setIsDetailModalOpen(true);
                  }}
                  className="group hover:bg-red-500 hover:text-white  transition-all duration-500 p-[6px] lg:p-3 bg-primary-50 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-eye w-3 md:w-4 lg:w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <h4 className="text-qoramtir-600 title text-base md:text-xl font-medium leading-6">
              {product.title || product.name.uz
                ? product.title || product.name.uz
                : "Product not found"}
            </h4>
            {/* <p className="text-qoramtir-600 text-xs lg:text-sm title">
              {product.about}
            </p> */}
          </div>
          <div className="flex justify-between flex-row items-center flex-wrap">
            <p className="flex flex-wrap items-center gap-[6px]">
              <span className="text-sm md:text-lg text-black">
                {product?.newprice ? product.newprice : product.price}$
              </span>
              <span className="text-xs hidden xs:inline-block text-qoramtir-qizil line-through opacity-80">
                {product?.price}$
              </span>
            </p>
            <div className="flex items-center rtl:space-x-reverse md:mr-2">
              <span className="text-sm opacity-70">
                {product.star || product.rating}
              </span>
              <span className="text-sm">⭐️</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Card);
