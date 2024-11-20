import { useEffect, useRef, useState } from "react";

function SearchModal({ setHandleFocus }) {
  const [list, setList] = useState(false);
  const searchInput = useRef();
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // Fetch product list
    fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProductList(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const search = () => {
    const searchTerm = searchInput.current.value.toUpperCase();
    if (searchTerm) {
      const filtered = productList.filter((item) =>
        item.name.uz.toUpperCase().includes(searchTerm)
      );
      setFilteredProductList(filtered);
    } else {
      setFilteredProductList([])
    }
  }

  function handleGlobalClick(e) {
    if (e.target === e.currentTarget) {
      setHandleFocus(false);
    }
  }


  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="crypto-modal"
        onClick={handleGlobalClick}
        tabindex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed mx-auto top-0 z-[10000] justify-center items-center w-full bg-black/40 md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <form id="searchForm" className="flex  relative top-16 md:top-12 w-[90%] xs:w-[80%] md:w-[50%] items-center mx-auto">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              onChange={search}
              ref={searchInput}
              onFocus={() => setList(true)}
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            onClick={() => {
              setHandleFocus(false);
            }}
            type="submit"
            className="p-3 ms-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <div id="listProducts" className="py-4 relative w-[90%] xs:w-[80%] md:w-[50%] mx-auto top-16 md:top-12">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              {list && (
                <>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Search Products
                  </h3>
                  <button
                    onClick={() => {
                      setList(false);
                    }}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
                    data-modal-toggle="crypto-modal"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </>
              )}
            </div>
            {/* <!-- Modal body --> */}
            {list && (
              <div className="p-4 md:p-5">
                <ul className="my-4 space-y-3">
                  {filteredProductList && filteredProductList?.map((items, index) => (
                    <li key={index}>
                      <a
                        href={`/detail/${items?._id}`}
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow"
                      >
                        <img
                          src={`${import.meta.env.VITE_IMAGE}${items?.images[0]}`}
                          alt="product image"
                          className="h-6"
                        />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          {items?.name?.uz}
                        </span>
                        <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
                          {items?.rating}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
