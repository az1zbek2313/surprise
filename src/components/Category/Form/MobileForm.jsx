function MobileForm({setFemaleDropdown, setMaleDropdown, setKidsDropdown, KidsDropdown, FemaleDropdown, MaleDropdown}) {
  return (
    <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Color</span>
                        <span className="ml-6 flex items-center">
                          {!FemaleDropdown ? (
                            <svg
                              onClick={() => {
                                setFemaleDropdown(!FemaleDropdown);
                              }}
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setFemaleDropdown(!FemaleDropdown);
                              }}
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    </h3>
                    {FemaleDropdown && (
                      <div className="pt-6" id="filter-section-mobile-0">
                        <div className="space-y-6">
                          <div className="flex items-center">
                            <input
                              id="filter-mobile-color-0"
                              name="color[]"
                              value="white"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-mobile-color-0"
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              White
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-mobile-color-1"
                              name="color[]"
                              value="beige"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-mobile-color-1"
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              Beige
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category
                        </span>
                        <span className="ml-6 flex items-center">
                          {!MaleDropdown ? (
                            <svg
                              onClick={() => {
                                setMaleDropdown(!MaleDropdown);
                              }}
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setMaleDropdown(!MaleDropdown);
                              }}
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    </h3>
                    {MaleDropdown && (
                      <div className="pt-6" id="filter-section-mobile-1">
                        <div className="space-y-6">
                          <div className="flex items-center">
                            <input
                              id="filter-mobile-category-0"
                              name="category[]"
                              value="new-arrivals"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-mobile-category-0"
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              Smart watch
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-mobile-category-1"
                              name="category[]"
                              value="sale"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-mobile-category-1"
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              Sale
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Size</span>
                        <span className="ml-6 flex items-center">
                          {!KidsDropdown ? (
                            <svg
                              onClick={() => {
                                setKidsDropdown(!KidsDropdown);
                              }}
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setKidsDropdown(!KidsDropdown);
                              }}
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    </h3>
                    {KidsDropdown && (
                      <div className="pt-6" id="filter-section-mobile-2">
                        <div className="space-y-6">
                          <div className="flex items-center">
                            <input
                              id="filter-mobile-size-0"
                              name="size[]"
                              value="2l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-mobile-size-0"
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              2L
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="filter-mobile-size-1"
                              name="size[]"
                              value="6l"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="filter-mobile-size-1"
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              6L
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
  )
}

export default MobileForm