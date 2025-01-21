import React, { useRef, useState } from "react";

function Stations({ setBooleanStation, handleOrder, setStation, stations }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const refs = {
    Chilonzor: useRef(),
    Ozbekiston: useRef(),
    Yunusobod: useRef(),
    Qoyliq: useRef(),
  };

  function validate() {
    const ref = refs[city];
    if (ref && !ref.current.value) {
      setError(true);
      ref.current.focus();
      return false;
    }
    return true;
  }

  function orderFunc(e) {
    e.preventDefault();
    if (validate() && city) {
      const ref = refs[city];
      if (ref) {
        setStation(ref.current.value);
        setError(false);
        handleOrder("walker");
      }
    } else {
      alert("Bekatni tanlang!");
    }
  }

  function renderSelectOptions(cityKey) {
    return (
      <div className="col-span-2">
        <label
          htmlFor={`deliveryCity-${cityKey}`}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {cityKey}:
        </label>
        <select
          id={`deliveryCity-${cityKey}`}
          defaultValue=""
          ref={refs[cityKey]}
          className={`${error && "border-red-600"} bg-gray-50 border outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
        >
          <option value="">Yetkazib berish bekati:</option>
          {stations?.[cityKey]?.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-[999]"></div>

      <div
        id="crud-modal"
        tabIndex="-1"
        className="overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-[1000] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                Yangi buyurtma qo'shish
              </h3>
              <button
                type="button"
                onClick={() => setBooleanStation(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
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
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                {!city && (
                  <div className="col-span-2">
                    <label
                      htmlFor="deliveryCity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Yetkazib berish bekati:
                    </label>
                    <select
                      id="deliveryCity"
                      defaultValue=""
                      onChange={(e) => setCity(e.target.value)}
                      className={`${error && "border-red-600"} bg-gray-50 border outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                    >
                      <option value="">Yetkazib berish bekati:</option>
                      <option value="Chilonzor">Chilonzor</option>
                      <option value="Ozbekiston">O'zbekiston</option>
                      <option value="Qoyliq">Qo'yliq</option>
                      <option value="Yunusobod">Yunusobod</option>
                    </select>
                  </div>
                )}

                {city && renderSelectOptions(city)}
              </div>

              <div className="flex gap-4 items-center">
                <button
                  type="submit"
                  onClick={orderFunc}
                  className={`${!city ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-700 hover:bg-blue-800"} text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-5 py-2.5 text-center`}
                >
                  Saqlash
                </button>
                <button
                  type="button"
                  onClick={() => setBooleanStation(false)}
                  className="text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-2 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stations;
