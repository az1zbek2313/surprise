import React from "react";

function OrderModal({ setOrder, handleOrder, setBooleanStation }) {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed inset-0 z-[1000] flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            onClick={() => {
              setOrder(false);
            }}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              How would you like us to deliver your order?
            </h3>
            <button
              onClick={() => {
                setOrder(false);
                setBooleanStation(true);

              }}
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              <span>To Walk🚶🏻‍♂️‍➡️</span>
            </button>
            <button
              onClick={() => {
                handleOrder("car");
              }}
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 bg-yellow-500 hover:bg-yellow-400 ms-3 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-yellow-300"
            >
              <span>To Drive🚖</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
