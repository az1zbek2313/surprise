import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotalPrice, formatNumberWithCommas } from "../../util/functions";

function OrderCard({ idOne, setTotalPrice, index, orderProducts }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = () => {
    setLoader(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const filtered = result.find((item) => item._id === idOne);
        if (filtered) {
          setProduct(filtered);
        }
        setTotalPrice(calculateTotalPrice(orderProducts, result))
      })
      .catch((error) => console.log("error", error))
      .finally((_) => {
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(36, product);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
        <div className="img-box max-lg:w-full">
          <img
            src={
              product?.images && product.images.length > 0
                ? `${import.meta.env.VITE_IMAGE}${product.images[0]}`
                : "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" // Bu yerga zaxira tasvir yo'lini kiriting
            }
            alt="Premium Watch image"
            className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-row items-center w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="flex items-center">
              <div className="">
                <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                  {product?.name?.uz}
                </h2>
                <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                  {product?.description?.uz}
                </p>
                <div className="flex items-center ">
                  <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                    Rating:{" "}
                    <span className="text-gray-500"> {product?.rating}⭐</span>
                  </p>
                  <p className="font-medium text-base leading-7 text-black ">
                    Qty: <span className="text-gray-500">{product?.count}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                <div className="flex gap-3 lg:block">
                  <p className="font-medium text-sm leading-7 text-black">
                    price
                  </p>
                  <p className="lg:mt-4 font-medium text-sm leading-7 text-primary-600">
                    ${formatNumberWithCommas(product?.price)}
                  </p>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                <div className="flex gap-3 lg:block">
                  <p className="font-medium text-sm leading-7 text-black">
                    Gender
                  </p>
                  <p className="font-medium text-sm min-w-16 text-center leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-primary-50 text-primary-600">
                    {product?.gender?.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                <div className="flex gap-3 flex-col">
                  <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                    Expected Delivery Time
                  </p>
                  <a
                    href={`/detail/${product._id}`}
                    className="w-full inline-flex justify-center rounded-lg  border border-primary-600 bg-white px-3 py-2 text-sm font-medium hover:bg-primary-100 text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-200 lg:w-auto active:bg-primary-300"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(OrderCard);
