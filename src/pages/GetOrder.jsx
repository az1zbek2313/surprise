import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderCard } from "../components";
import { formatNumberWithCommas } from "../util/functions";

function GetOrder() {
  const params = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const message = useSelector((state) => state.userIdReducer.uid);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    // Sana qismlarini olamiz
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Oy 0-indekslangan
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Formatni yig'amiz
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  function fetchData() {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("token", message.token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}users/orders`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result.find((order) => order._id === params.id);
        setOrder(data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(55, totalPrice);

  return (
    <section className="py-4 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Payment Successful
        </h2>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Thanks for making a purchase you can check our order summary frm below
        </p>
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div className="data">
              <p className="font-semibold text-base leading-7 text-black">
                Order Id:{" "}
                <span className="text-primary-600 font-medium">
                  #{params.id.toUpperCase()}
                </span>
              </p>
              <p className="font-semibold text-base leading-7 text-black mt-4">
                Order Payment :{" "}
                <span className="text-gray-400 font-medium">
                  {formatDate(order.createdAt)}
                </span>
              </p>
            </div>
            <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-primary-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary-700 hover:shadow-indigo-400">
              Track Your Order
            </button>
          </div>
          <div className="w-full px-3 min-[400px]:px-6">
            {order.products &&
              order?.products.map((item, index, orderProducts) => (
                <OrderCard key={item} idOne={item} index={index+1} orderProducts={orderProducts} setTotalPrice={setTotalPrice}/>
              ))}
          </div>
          <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
            <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
              <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                <svg
                  className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
                Cancel Order
              </button>
              <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                Paid using Credit Card{" "}
                <span className="text-gray-500">ending with 8822</span>
              </p>
            </div>
            <p className="font-semibold text-lg text-black py-6">
              Total Price: <span className="text-primary-600"> ${formatNumberWithCommas(totalPrice)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetOrder;
