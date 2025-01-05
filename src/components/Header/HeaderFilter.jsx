import { useEffect, useState } from "react";
import { OrdersDropdown, Gender, categoryCard } from "../../util/contants";
import { styles } from "../../util/style";
import { discount } from "../../assets";
import "../HeroImage/style.css";
import { useNavigate } from "react-router-dom";

function HeaderFilter({setLoginModal, token}) {
  const [dropdown, setDropdown] = useState(false);
  const [checkDropdown, setCheckDropdown] = useState("All Category");
  const [gender, setGender] = useState("");
  const [categoryGender, setCategoryGender] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function fetchGender(gender) {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}category`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (gender === "male") {
          setCategoryGender(result.male);
        }
        if (gender === "female") {
          setCategoryGender(result.female);
        }
        if (gender === "kids") {
          setCategoryGender(result.kids);
        }
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }

  function handleToOrder() {
    if (token) {
      navigate("/account/orders");
    } else {
      setLoginModal(true)
    }
  }

  return (
    <div className="">
      <div className={`${styles.container} flex justify-between items-center`}>
        <div className="flex items-center gap-2 md:gap-6">
          <div className="relative mx-auto xs:mx-0">
            <button
              id="dropdownHoverButton"
              onClick={() => {
                setDropdown(!dropdown);
                setCategoryGender([]);
                setGender("");
              }}
              data-dropdown-trigger="hover"
              className="text-white py-2 md:p-[14px] px-4 md:px-8 mb-0 bg-red-600 focus:outline-none font-medium rounded-lg text-xs md:text-sm text-center justify-center inline-flex items-center"
              type="button"
            >
              {checkDropdown}
              {dropdown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 ms-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 ms-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              )}
            </button>

            {/* <!-- Dropdown menu --> */}
            {dropdown && (
              <>
                <div
                  id="dropdownHover"
                  className="z-50 absolute mt-2 w-24 md:w-[200px] bg-white divide-y divide-gray-100 rounded-[3px] shadow"
                >
                  <ul
                    className="py-2 text-xs md:text-sm text-gray-700"
                    aria-labelledby="dropdownHoverButton"
                  >
                    {Gender.map((item) => (
                      <li
                        onClick={() => {
                          setGender(item.gender);
                          fetchGender(item.gender);
                        }}
                        key={item.id}
                      >
                        <a
                          href={item.href}
                          className={`block px-2 py-1 md:px-4 md:py-2 ${
                            gender === item.gender &&
                            "bg-gray-100 font-semibold"
                          } hover:bg-gray-100 hover:font-semibold public-sans`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {loading
            ? gender !== "" && (
                <div
                  id="dropdownHover"
                  className="z-50 top-36 md:top-40 lg:top-40 absolute flex mt-2 left-auto right-auto ml-24 md:ml-52 gap-5 bg-white divide-y p-5 divide-gray-100 rounded-lg shadow"
                >
                  <div
                    role="status"
                    className=" animate-pulse w-40 xs:w-64 md:w-96"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="h-4 xs:h-6 md:h-8 bg-gray-200 rounded-md  w-full"></div>
                      <div className="h-4 xs:h-6 md:h-8 bg-gray-200 rounded-md  w-full"></div>
                      <div className="h-4 xs:h-6 md:h-8 bg-gray-200 rounded-md  w-full"></div>
                      <div className="h-4 xs:h-6 md:h-8 bg-gray-200 rounded-md  w-full"></div>
                      <div className="h-4 xs:h-6 md:h-8 bg-gray-200 rounded-md  w-full"></div>
                      <div className="h-4 xs:h-6 md:h-8 bg-gray-200 rounded-md  w-full"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )
            : categoryGender.length > 0 && (
                <div
                  id="dropdownHover"
                  className="z-50 top-36 md:top-40 lg:top-40 absolute flex mt-2 left-auto right-auto ml-24 md:ml-52 gap-5 bg-white divide-y p-5 divide-gray-100 rounded-lg shadow"
                >
                  <ul
                    className="text-xs md:text-sm text-gray-700 max-w-52"
                    aria-labelledby="dropdownHoverButton"
                  >
                    {categoryGender.map((item) => (
                      <li key={item._id}>
                        <a
                          href={`category/${item._id}`}
                          className={`block px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 hover:text-black public-sans`}
                        >
                          {item.name.uz}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="hidden xs:block max-w-[300px] border-none">
                    <h2 className="mb-1 sm:mb-3 font-semibold public-sans w-full">
                      {gender.charAt().toUpperCase() + gender.slice(1)}
                    </h2>
                    <ul className="flex gap-2 sm:gap-4 flex-col items-start w-full">
                      {categoryCard &&
                        categoryCard.map((item) => (
                          <li
                            key={item.id}
                            className="rounded-[3px] border p-2 sm:p-3 flex flex-col sm:flex-row w-40 sm:w-auto gap-3 items-center"
                          >
                            <img
                              src={item.image}
                              alt="icon"
                              className="w-16 sm:w-20 h-16 sm:h-20"
                            />
                            <div className="flex flex-col gap-1 sm:gap-2">
                              <p className=" text-xs sm:text-sm public-sans">
                                {item.title}
                              </p>
                              <span className="font-semibold text-xs sm:text-sm text-primary-10 public-sans">
                                $ {item.price}
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="hidden xl:flex bg-yellow-100 p-8 flex-col gap-6 rounded-[6px]">
                    <div className="flex flex-col items-center gap-3">
                      <img src={discount} alt="Discount icon" />
                      <h2 className="public-sans font-semibold text-[28px]">
                        21% Discount
                      </h2>
                      <p className="public-sans text-center max-w-[248px] text-qoramtir-gray">
                        Escape the noise, It’s time to hear the magic with
                        Xiaomi Earbuds.
                      </p>
                      <div className="flex gap-2 items-center lg:mt-2">
                        <span className="text-sm public-sans">
                          Starting price:
                        </span>
                        <button className="bg-white px-3 py-[6px] rounded-[3px] font-semibold public-sans">
                          $99 USD
                        </button>
                      </div>
                    </div>
                    <button className="rounded-[3px] px-4 lg:px-8 py-2 public-sans lg:py-3 text-xs sm:text-sm md:font-bold hover:bg-primary-500 transition-all duration-200 active:bg-primary-400 text-white bg-primary-600 inline-block">
                      Shop Now →
                    </button>
                  </div>
                </div>
              )}

          <li className="list-none hidden  md:inline-block">
            <a
              onClick={handleToOrder}
              className={`flex items-center p-1 cursor-pointer text-gray-900 rounded-lg hover:underline`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-geo-alt w-5 h-5 text-qoramtir-gray1"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <span className="ms-2 public-sans text-qoramtir-gray1">
                Track Order
              </span>
            </a>
          </li>
          <li className="list-none hidden  md:inline-block">
            <a
              href="/support"
              className={`flex items-center p-1 text-gray-900 rounded-lg hover:underline group`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 text-qoramtir-gray1"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
              </svg>
              <span className="ms-2 public-sans text-qoramtir-gray1">
                Customer Support
              </span>
            </a>
          </li>
          {/* <li className="list-none hidden  md:inline-block">
            <a
              href="#"
              className={`flex items-center p-1 text-gray-900 rounded-lg hover:underline group`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-qoramtir-gray1"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <span className="ms-2 public-sans text-qoramtir-gray1">
                Need Help
              </span>
            </a>
          </li> */}
        </div>

        <li className="list-none hidden md:inline-block">
          <a
            href="#"
            className={`flex items-center p-1 gap-2 text-gray-900 rounded-lg hover:underline group`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-telephone-inbound w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <span className="ms-2 public-sans text-[18px]">
              +1-202-555-0104
            </span>
          </a>
        </li>
      </div>
    </div>
  );
}

export default HeaderFilter;
