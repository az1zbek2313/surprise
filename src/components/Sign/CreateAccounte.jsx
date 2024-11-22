import React, { useRef, useState } from "react";
import { userId } from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreateAccount({ setLoginModal, setCreateAccount, setCode }) {
  const fullnameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validate = (fullname, phoneNumber, password, repassword) => {
    if (!fullname.current.value) {
      fullname.current.focus();
      setError("Input fullname!");
      return false;
    }
    if (phoneNumber.current.value < 12) {
      phoneNumber.current.focus();
      setError("Input phoneNumber! (998889692313)");
      return false;
    }
    if (password.current.value < 4) {
      password.current.focus();
      setError("Input password!");
      return false;
    }
    if (repassword.current.value !== password.current.value) {
      repassword.current.focus();
      setError("Re-enter the password!");
      return false;
    }
    return true;
  };

  function handleClick(e) {
    e.preventDefault();
    const isValid = validate(
      fullnameRef,
      phoneNumberRef,
      passwordRef,
      repasswordRef
    );
    if (isValid) {
      setError("");
      var formdata = new FormData();
      formdata.append("name", fullnameRef.current.value);
      formdata.append("phone", phoneNumberRef.current.value);
      formdata.append("password", passwordRef.current.value);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(`${import.meta.env.VITE_DEFAULT_HOST}users`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            const user = {
              fullname:fullnameRef.current.value,
              phone:phoneNumberRef.current.value,
              password:passwordRef.current.value,
              code:result.code
            }

            dispatch(userId(user));
            setCreateAccount(false);
            setCode(true)
          } else {
            setError(result.error)
          }
        })
        .catch((error) => console.log("error", error));
    }
  }

  function handleGlobalClick(e) {
    if (e.target === e.currentTarget) {
      setCreateAccount(false);
    }
  }

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabindex="-1"
        onClick={handleGlobalClick}
        aria-hidden="true"
        class="fixed inset-0 z-[1000] flex justify-center items-center w-full h-full bg-black/50"
      >
        <div class="relative p-4 w-full md:w-[60%] lg:w-[40%] max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Sign up to our platform
              </h3>
              <button
                type="button"
                onClick={() => {
                  setCreateAccount(false);
                }}
                class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  class="w-3 h-3"
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
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* Error */}
            {error != "" && (
            <div
              className="p-4 mt-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {error}
            </div>
          )}
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5">
              <form class="space-y-4" action="#">
                <div>
                  <label
                    htmlFor="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    ref={fullnameRef}
                    name="name"
                    id="name"
                    class="bg-gray-50 appearance-none focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Firstname Lastname"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone
                  </label>
                  <input
                    type="number"
                    ref={phoneNumberRef}
                    name="phone"
                    id="phone"
                    class="bg-gray-50 appearance-none focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="+998 88 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    ref={passwordRef}
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="repassword"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    ref={repasswordRef}
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleClick}
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Create Account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Registered?{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setLoginModal(true);
                      setCreateAccount(false);
                    }}
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    to Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
