import { useDispatch, useSelector } from "react-redux";
import { surpriseLogo } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userId } from "../../Redux/Actions/actions";

function Code({setCode}) {
  const user = useSelector((state) => state.userIdReducer.uid);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("name", user.fullname);
    formdata.append("phone", user.phone);
    formdata.append("password", user.password);
    formdata.append("code", user.code);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}users`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          setError(result.message);
        } else {
          dispatch(userId(result));
          setError("");
          navigate("/");
          setCode(false)
        }
      })
      .catch((error) => console.log("error", error));
  }

  function handleGlobalClick(e) {
    if (e.target === e.currentTarget) {
      setCode(false);
    }
  }

  return (
    <div         onClick={handleGlobalClick} className="fixed inset-0 z-[1000] flex justify-center items-center w-full h-full bg-black/50">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-md p-8">
            <a href="/">
              <img className="mx-auto h-10 w-auto" src={surpriseLogo} alt="" />
            </a>
            {error && (
              <div
                className="p-4 mt-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {error}
              </div>
            )}
            <h2 className="mt-6 text-center text-2xl font-semibold tracking-tight text-gray-700">
              Enter the code on your phone
            </h2>

            <form className="space-y-6 mt-4" action="#" method="POST">
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code
                </label>
                <div className="mt-1">
                  <input
                    id="number"
                    name="number"
                    type="number"
                    defaultValue={user.code}
                    autocomplete="number"
                    required
                    className="px-2 py-3 mt-1 appearance-none block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

    </div>
  );
}

export default Code;
