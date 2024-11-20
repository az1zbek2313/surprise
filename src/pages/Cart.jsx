import { useDispatch, useSelector } from "react-redux";
import { RemeberProducts } from "../components";
import { toast } from "sonner";
import cartCommit from "../assets/pngwing.com.png";
import { decrement, deletedMyCart, incerement, inputAmount } from "../Redux/Actions/actions";
import { useRef } from "react";

function Cart() {
  const dispatch = useDispatch();
  const inputNumberRef = useRef()
  const cartProducts = useSelector(state => state.myCart);

  console.log(10, cartProducts);

  function handleClick(id) {
    toast.error("Mahsulot o'chirildi");
    dispatch(deletedMyCart(id))
  }

  function HandleIncrement(data) {
    dispatch(incerement(data))
  }

  function HandleDecrement(data) {
    dispatch(decrement(data))
  }

  function HandleInputAmount(data, inputNumber) {
    dispatch(inputAmount(data, inputNumber))
  }

  const handleKeyDown = (event, inputRef) => {
    if (event.key === "Enter") {
      inputRef.current.blur(); 
    }
  };

  const generalPrice = () => {
    return cartProducts.reduce((accumulator, item) => {
      return accumulator + item.price * item.count;
    }, 0);
  };
  

  return (
    <section className="bg-white pb-8 antialiased container mx-auto">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h1 className="text-3xl font-semibold text-center  border-b-[1px] border-gray-500/65 py-2 pb-4">
          Shopping Cart <span className="text-red-600">({cartProducts.length})</span>
        </h1>

        <div className="mt-6 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6 flex flex-wrap justify-between">
              {cartProducts.length > 0 ? cartProducts.map((item) => (
                <div
                  key={item._id}
                  className="rounded-lg mt-0 cursor-pointer border w-full xs:w-[48%] md:w-full border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href={`/detail/${item._id}`} className="shrink-0 md:order-1">
                      <img
                        className="w-full rounded-lg h-[10rem] md:h-28 md:w-28"
                        src={`${import.meta.env.VITE_IMAGE}${item.images[0]}`}
                        alt="image"    
                      />
                    </a>

                    <label htmlFor="counter-input" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="sm:flex items-center flex-wrap justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          onClick={() => {HandleDecrement(item)}}
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          ref={inputNumberRef}
                          onChange={() => {HandleInputAmount(item, inputNumberRef.current.value)}}
                          onKeyDown={(e) => handleKeyDown(e, inputNumberRef)} 
                          id="counter-input"
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                          placeholder=""
                          value={item.count ? item.count : ""}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => {HandleIncrement(item)}}
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-start sm:text-end md:order-4 md:w-32">
                        <p className="my-4 sm:my-0 text-2xl sm:text-xl mr-4 md:mr-0 opacity-80 font-bold text-gray-900 ">
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "usd",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href={`/detail/${item._id}`}
                        className="text-base font-medium flex cursor-pointer flex-col text-gray-900 hover:underline "
                      >
                        <span className="font-bold">{item.name.uz}</span>
                        <span>{item.description.uz}</span>
                      </a>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => {handleClick(item._id)}}
                          className="inline-flex items-center text-sm font-medium border border-red-600 px-2 py-[2px] rounded-md text-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 transition-all duration-300"
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )) :
              <div className="w-full h-full lg:mt-4 flex justify-center items-center">
              <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
                <img
                  src={cartCommit}
                  alt="search box icon"
                  className="w-40 h-40"
                />
                <h2 className="font-semibold text-xl">
                  Sizda hali saralanganlar yo'q
                </h2>
                <a
                  href="/"
                  className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center"
                >
                  Mahsulotingizni tanlang
                </a>
              </div>
            </div>
              }
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                    {generalPrice().toLocaleString("en-US", {
                            style: "currency",
                            currency: "usd",
                          })}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Tax</dt>
                    <dd className="text-base font-medium text-gray-900">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    $8,191.00
                  </dd>
                </dl>
              </div>

              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Proceed to Checkout
              </a>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500"> or </span>
                <a
                  href="/"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

       <RemeberProducts />
      </div>
    </section>
  );
}

export default Cart;
