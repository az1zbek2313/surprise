import { useState } from "react";
import { ProductCard } from "../components";
import {
  ProductCardCategoty,
  CategoryNav,
  CategoryDropdown,
} from "../util/contants";
import { styles } from "../util/style";

function Category() {
  const [checkNav, setCheckNav] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  const [checkDropdown, setCheckDropdown] = useState("Recommended");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="lg:flex lg:-mx-2">
          <div className="space-y-2 md:space-y-3 text-sm md:text-base lg:w-1/5 lg:px-2 lg:space-y-4">
            {CategoryNav.map((item) => (
              <a
                href={item.href}
                key={item.id}
                onClick={() => {
                  setCheckNav(item.id);
                }}
                className={`block font-medium ${
                  checkNav == item.id
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-500 dark:text-gray-300"
                } hover:underline`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
              <p className="text-gray-500 text-xs md:text-sm dark:text-gray-300">
                6 Items
              </p>
              <div className="flex items-center gap-1 md:gap-4">
                <p className="hidden md:inline-block text-gray-500 text-xs md:text-sm dark:text-gray-300">
                  Sort
                </p>

                <div className="relative">
                  <button
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                    data-dropdown-trigger="hover"
                    className="text-white w-44 mb-0 bg-red-600 dark:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm py-2 text-center justify-center inline-flex items-center  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
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
                      className="z-50 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-xs md:text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownHoverButton"
                      >
                        {CategoryDropdown.map((item) => (
                          <li key={item.id}>
                            <a
                              href={item.href}
                              onClick={() => {
                                setCheckDropdown(item.title);
                                setDropdown(false)
                              }}
                              className="block px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
            </div>

            <div
              className={`${styles.flexBetween} gap-6 lg:gap-4 pr-0 pl-0 ${styles.container}`}
            >
              {ProductCardCategoty.map((item) => (
                <ProductCard
                  width={"xl:w-[32%] lg:w-[48%]"}
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
