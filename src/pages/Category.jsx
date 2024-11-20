import { useEffect, useState } from "react";
import cartCommit from "../assets/pngwing.com.png";
import { styles } from "../util/style";
import Card from "../components/Products/Card";
import { useNavigate, useParams } from "react-router-dom";
import { CheckDropdown, DesktopForm, MobileForm } from "../components";

function Category() {
  const params = useParams();
  const [ProductCardCategory, setProductCardCategory] = useState({});
  const [Category, setCategory] = useState([]);
  const [loader, setLoader] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [checkDropdown, setCheckDropdown] = useState(false);
  const [FemaleDropdown, setFemaleDropdown] = useState(false);
  const [MaleDropdown, setMaleDropdown] = useState(false);
  const [KidsDropdown, setKidsDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    importCategoryAll();
    importCategoryOne();

    const handleGlobalClick = (event) => {
      const filterBar = event.target.closest("#filterBar");
      const filterButton = event.target.closest("#filterButton");
      if (!filterBar) {
        setDropdown(false);
      }
      if (filterButton) {
        setDropdown(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const importCategoryAll = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}category`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
      })
      .catch((error) => console.log("error", error));
  };

  const importCategoryOne = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${import.meta.env.VITE_DEFAULT_HOST}category/${params.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoader(true);
        if (result) {
          console.log(28, result);
          if (result.error == "Category not found") {
            navigate("/notfound");
          }
          setProductCardCategory(result);
        }
      })
      .catch((error) => console.log("error", error))
      .finally((_) => {
        setLoader(false);
      });
  };

  return (
    <div className={`bg-white ${styles.container} py-0`}>
      <div>
        {dropdown && (
          <div className="relative z-[1000]" role="dialog" aria-modal="true">
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-40 flex">
              <div
                id="filterBar"
                className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    onClick={() => {
                      setDropdown(false);
                    }}
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <MobileForm
                  setKidsDropdown={setKidsDropdown}
                  setMaleDropdown={setMaleDropdown}
                  setFemaleDropdown={setFemaleDropdown}
                  KidsDropdown={KidsDropdown}
                  FemaleDropdown={FemaleDropdown}
                  MaleDropdown={MaleDropdown}
                  Category={Category}
                />
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-4 pt-2">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              {" "}
              {ProductCardCategory?.name?.uz}
            </h1>

            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div
                  onClick={() => {
                    setCheckDropdown(!checkDropdown);
                  }}
                >
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Sort
                    <svg
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {checkDropdown && <CheckDropdown />}
              </div>

              <button
                type="button"
                className="-m-2 ml-5 p-2 lg:hidden text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                id="filterButton"
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <DesktopForm
                setKidsDropdown={setKidsDropdown}
                setMaleDropdown={setMaleDropdown}
                setFemaleDropdown={setFemaleDropdown}
                KidsDropdown={KidsDropdown}
                FemaleDropdown={FemaleDropdown}
                MaleDropdown={MaleDropdown}
                Category={Category}
              />

              <div className="lg:col-span-3">
                <div
                  className={`${styles.flexBetween} gap-1 xl:gap-4 pr-0 pl-0 ${styles.container}`}
                >
                  {ProductCardCategory &&
                    ProductCardCategory?.products?.map((item, index) => (
                      <li
                        key={index}
                        className="w-[49%] xs:w-[32%] list-none my-2 md:my-4"
                      >
                        <Card
                          product={item}
                          height={"h-[200px] sm:h-[240px]"}
                        />
                      </li>
                    ))}
                  {ProductCardCategory?.products?.length == 0 && (
                    <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex w-full justify-center items-center">
                      <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
                        <img
                          src={cartCommit}
                          alt="search box icon"
                          className="w-40 h-40"
                        />
                        <h2 className="font-semibold text-xl text-center">
                          Bu kategoriyada mahsulot <br /> mavjud emas
                        </h2>
                        <a
                          href="/"
                          className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center"
                        >
                          Xarid qilish
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Category;
