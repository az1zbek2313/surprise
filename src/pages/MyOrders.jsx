import { useState } from "react";
import { OrdersDropdown } from "../util/contants";
import searchBox from "../assets/search-box.svg";
import { useTranslation } from "react-i18next";

function MyOrders() {
  const [dropdown, setDropdown] = useState(false);
  const [checkDropdown, setCheckDropdown] = useState("Barcha buyurtmalar");
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  return (
    <div
      className={`container mx-auto md:px-0`}
    >
      <div className="flex flex-wrap gap-1 xs:gap-0 justify-between items-center px-4 border-b-[1.6px] py-2">
        <h1 className="text-2xl mx-auto xs:mx-0 font-semibold">
        {t("allorders")}
        </h1>
        <div className="relative mx-auto xs:mx-0">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            onClick={() => {
              setDropdown(!dropdown);
            }}
            data-dropdown-trigger="hover"
            className="text-white w-44 mb-0 bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm py-2 text-center justify-center inline-flex items-center"
            type="button"
          >
            {checkDropdown}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          {dropdown && (
            <div
              id="dropdownHover"
              className="z-50 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
            >
              <ul
                className="py-2 text-xs md:text-sm text-gray-700"
                aria-labelledby="dropdownHoverButton"
              >
                {OrdersDropdown.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setCheckDropdown(item.title);
                        setDropdown(false);
                      }}
                      className="block px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {data ? (
        <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
        <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
          <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 w-fit h-fit">
            <img src={searchBox} alt="search box icon" className="w-8 h-8" />
          </div>
          <p className="opacity-55 font-medium text-sm md:text-base text-center">Hozirda buyurtmalar mavjud emas. Iltimos, <br /> hozir xarid qiling.</p>
          <a href="/" className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center">Xarid qilish</a>
        </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}

export default MyOrders;
