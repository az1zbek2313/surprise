import { surpriseLogo, signUp } from "../assets";

function SignUp() {

  return (
    <section className="flex flex-col md:flex-row w-full flex-wrap h-full min-h-screen pb-4 md:pb-0">
    <div className="bg-primary-700 w-full md:w-[50%] flex justify-center items-center py-8 sm:py-0">
      <img src={signUp} alt="sign in" className="w-[80%] xs:w-[50%] md:w-[80%]"/>
    </div>
    <div className="w-full md:w-[50%] flex justify-center items-center bg-white pt-2 md:pt-[5%]">
      <div className="w-full">
      <a
        href="/"
        className="flex items-center justify-center text-2xl font-semibold text-gray-900"
      >
        <img
          className="h-10 mr-2"
          src={surpriseLogo}
          alt="logo"
        />
      </a>
        <div className=" md:space-y-6 md:p-12 mt-6 md:mt-0">
          <form className="space-y-4 md:space-y-6 w-[80%] xs:w-[68%] sm:w-[56%] md:w-full lg:w-[80%] mx-auto" action="#">
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
                id="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="+998 88 969-23-13"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500">
            Do you have an account?{" "} &nbsp;
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
