import { useState } from "react";
import geo from "../assets/geo.svg";

function Location() {
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div
      className={`container min-h-[100vh] mx-auto md:px-0 lg:border-r-[1.6px]`}
    >
      <div className="flex flex-wrap gap-1 xs:gap-0 justify-between items-center px-4 border-b-[1.6px] py-2">
        <h1 className="text-2xl mx-auto xs:mx-0 font-semibold text-primary-800">
          Manzillar
        </h1>
        <div className="relative mx-auto xs:mx-0">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            onClick={() => {
              setDropdown(!dropdown);
            }}
            data-dropdown-trigger="hover"
            className="text-white  w-44 mb-0 bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm py-2 text-center justify-center inline-flex items-center"
            type="button"
          >
            <span className="scale-150 mr-1 pb-0.5">+</span> &nbsp;
            <p>Manzil qo'shish</p>
          </button>
        </div>
      </div>

      {data ? (
        <div className="flex flex-col gap-2 md:gap-4 justify-center items-center mt-[16vh]">
          <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 w-fit h-fit">
            <img src={geo} alt="search box icon" className="w-8 h-8" />
          </div>
          <h2 className="font-semibold text-xl">Hali manzillar mavjud emas</h2>
          <p className="opacity-55 font-medium text-sm md:text-base text-center">
            Hozirda manzillar mavjud emas. Iltimos, <br /> hozir manzil
            qo'shing.
          </p>
          <a
            href="/"
            className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center"
          >
            <span className="scale-150 mr-1 pb-0.5">+</span> &nbsp;
            <p>Manzil qo'shish</p>
          </a>
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}

export default Location;
