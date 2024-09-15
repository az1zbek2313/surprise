import { useNavigate } from "react-router-dom";
import { surpriseLogo, signIn } from "../assets";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { userId } from "../Redux/Actions/actions";

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  const validate = (phoneNumber, password) => {
    if (!phoneNumber?.current?.value) {
      phoneNumber.current.focus();
      setError("Telefon raqamingizni kiriting! (+998 00 000 00 00)");
      return false;
    }
    if (password?.current?.value.length < 4) {
      password.current.focus();
      setError("Parolni kiriting!");
      return false;
    }
    return true;
  };

  function handleLogin(e) {
    e.preventDefault();
    const isValid = validate(phoneNumberRef, passwordRef);
    if (isValid) {
      let formdata = new FormData();
      formdata.append("number", `${phoneNumberRef.current.value}`);
      formdata.append("password", `${passwordRef.current.value}`);

      let requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(`${import.meta.env.VITE_DEFAULT_HOST}users/login`, requestOptions)
        .then((response) => response.text())
        .then((res) => {
          const result = JSON.parse(res);
          if (result.message) {
            setError(result.message)
          } else {
            dispatch(userId(result))
            setError("");
            phoneNumberRef.current.value = "";
            passwordRef.current.value = "";
            navigate("/")
          }
        })
        .catch((err) => console.log("error", err));
    }
  }

  return (
    <section className="flex flex-col pt-4 md:pt-0 bg-primary-50  md:flex-row w-full flex-wrap h-full min-h-screen pb-4 md:pb-0">
      <div className="hidden bg-primary-800 w-full md:w-[50%] md:flex justify-center items-center py-8 sm:py-0">
        <img
          src={signIn}
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
                  className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                  id="password"
                  placeholder="••••••••"
                  ref={passwordRef}
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center flex-wrap justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      ref={rememberRef}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  className="font-medium text-red-600 hover:underline cursor-pointer"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({
                        top: 40,
                        behavior: "smooth",
                      });
                    }, 0);

                    navigate("/signup");
                  }}
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
