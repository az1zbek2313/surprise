function MobileForm({setFemaleDropdown, setMaleDropdown, setKidsDropdown, KidsDropdown, FemaleDropdown, MaleDropdown, Category}) {
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
                        {Category.female &&
                          Category.female.map((item) => (
                            <div className="flex items-center">
                              <a
                                href={`/category/${item._id}`}
                                htmlFor="filter-color-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {item?.name.uz}
                              </a>
                            </div>
                          ))}
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
                        {Category.male &&
                          Category.male.map((item) => (
                            <div className="flex items-center">
                              <a
                                href={`/category/${item._id}`}
                                htmlFor="filter-color-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {item?.name.uz}
                              </a>
                            </div>
                          ))}
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
                        {Category.kids &&
                          Category.kids.map((item) => (
                            <div className="flex items-center">
                              <a
                                href={`/category/${item._id}`}
                                htmlFor="filter-color-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {item?.name.uz}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
  )
}

export default MobileForm