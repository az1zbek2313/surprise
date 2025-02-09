import { useRef } from "react";
import { surpriseLogo, signUp } from "../assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userId } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";

function SignUp() {
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
            navigate("/code");
          } else {
            setError(result.error)
          }
        })
        .catch((error) => console.log("error", error));
    }
  }

  return (
    <section className="flex flex-col bg-primary-50 pt-4 md:pt-0 md:flex-row w-full flex-wrap h-full min-h-screen pb-4 md:pb-0">
      <div className="bg-primary-800 w-full md:w-[50%] hidden md:flex justify-center items-center py-8 sm:py-0">
        <img
          src={signUp}
          alt="sign in"
          className="w-[80%] xs:w-[50%] md:w-[80%]"
        />
      </div>
      <div className="w-full bg-primary-50 md:w-[50%] flex justify-center items-center pt-2 md:pt-[5%]">
        <div className="w-full">
          <a
            href="/"
            className="flex items-center justify-center text-2xl font-semibold text-gray-900"
          >
            <img className="h-10 mr-2" src={surpriseLogo} alt="logo" />
          </a>
          {error != "" && (
            <div
              className="p-4 mt-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {error}
            </div>
          )}
          <div className=" md:space-y-6 md:p-12 mt-6 md:mt-0">
            <form
              className="space-y-4 md:space-y-6 w-[80%] xs:w-[68%] sm:w-[56%] md:w-full lg:w-[80%] mx-auto"
              action="#"
            >
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  ref={fullnameRef}
                  id="fullname"
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="John  Doe"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  ref={phoneNumberRef}
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="+998 00 000 00 00"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  ref={passwordRef}
                  id="password"
                  placeholder="••••••••"
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Repassword
                </label>
                <input
                  type="password"
                  name="password"
                  ref={repasswordRef}
                  id="password"
                  placeholder="••••••••"
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <button
                type="submit"
                onClick={handleClick}
                className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500">
                Do you have an account? &nbsp;
                <a
                  href="/login"
                  className="font-medium text-red-600 hover:underline"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
