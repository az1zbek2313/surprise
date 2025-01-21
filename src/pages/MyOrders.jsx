import { useEffect, useState } from "react";
import { OrdersDropdown } from "../util/contants";
import searchBox from "../assets/search-box.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { formatDate, formatNumberWithCommas } from "../util/functions";

function MyOrders() {
  const [dropdown, setDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arrPages, setArrPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Sahifa boshiga elementlar soni
  const message = useSelector((state) => state.userIdReducer.uid);

  const [checkDropdown, setCheckDropdown] = useState("Barcha buyurtmalar");
  const [data, setData] = useState([]);
  const { t } = useTranslation();

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
        setData(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Sahifa bo'yicha ma'lumotlarni olish
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  //Sahifani raqamlarini hisoblash
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const pagesArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
    setArrPages(pagesArray);
  }, [data, totalPages]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (totalPages === currentPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(81, arrPages);

  return (
    <div className={`container mx-auto md:px-0`}>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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

      {data.length == 0 ? (
        <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
            <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 w-fit h-fit">
              <img src={searchBox} alt="search box icon" className="w-8 h-8" />
            </div>
            <p className="opacity-55 font-medium text-sm md:text-base text-center">
              Hozirda buyurtmalar mavjud emas. Iltimos, <br /> hozir xarid
              qiling.
            </p>
            <a
              href="/"
              className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center"
            >
              Xarid qilish
            </a>
          </div>
        </div>
      ) : (
        <section class="bg-white pb-8 antialiased">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mx-auto max-w-5xl">
              <div class="flow-root ">
                <div class="divide-y divide-gray-200">
                  {currentItems?.map((item, index) => (
                    <div
                      key={index + 1}
                      class="flex flex-wrap items-center gap-y-4 py-6"
                    >
                      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt class="text-base font-medium text-gray-500">
                          Order ID:
                        </dt>
                        <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                          <a href="#" class="hover:underline">
                            #{item?._id.slice(0, 10).toUpperCase()}...
                          </a>
                        </dd>
                      </dl>

                      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt class="text-base font-medium text-gray-500">
                          Date:
                        </dt>
                        <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                          {formatDate(item?.createdAt)}
                        </dd>
                      </dl>

                      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt class="text-base font-medium text-gray-500">
                          Price:
                        </dt>
                        <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                          ${formatNumberWithCommas(item.price)}
                        </dd>
                      </dl>

                      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt class="text-base font-medium text-gray-500">
                          Status:
                        </dt>
                        <dd class="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                          <svg
                            class="me-1 h-3 w-3 text-orange-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"
                            />
                          </svg>
                          <span className="text-orange-400">
                            {item?.status}
                          </span>
                        </dd>
                      </dl>

                      <div class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                        <button
                          type="button"
                          class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
                        >
                          Cancel order
                        </button>
                        <a
                          href={`/orders/${item._id}`}
                          class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {
                totalPages > 1 &&
                <nav
                class="mt-6 flex items-center justify-center sm:mt-8"
                aria-label="Page navigation example"
              >
                <ul class="flex h-8 items-center -space-x-px text-sm">
                  <li onClick={handlePrevious}>
                    <a
                      href="#"
                      class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        class="h-4 w-4 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m15 19-7-7 7-7"
                        />
                      </svg>
                    </a>
                  </li>
                  {arrPages.map((pageNumber) => (
                    <li key={pageNumber}>
                      <button
                        onClick={() => handlePageChange(pageNumber)}
                        className={`flex h-8 items-center justify-center border px-3 ${
                          pageNumber === currentPage
                            ? "bg-blue-500 text-white"
                            : "bg-white text-gray-500"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                  <li onClick={handleNext}>
                    <a
                      href="#"
                      class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        class="h-4 w-4 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
              }
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default MyOrders;
