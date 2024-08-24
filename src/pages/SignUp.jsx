import { surpriseLogo } from "../assets";

function SignUp() {

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
        <a
          href="/"
          className="flex md:mt-2 items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="h-10 mr-2"
            src={surpriseLogo}
            alt="logo"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Registratsiya
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
            <div>
                <label
                  for="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  name="fulname"
                  id="fulname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Firstname Lastname"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
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
                  for="repassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Repassword
                </label>
                <input
                  type="password"
                  name="repassword"
                  id="repassword"
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
                Allready have this account {" "}
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
