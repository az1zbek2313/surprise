import { useEffect, useRef, useState } from "react";
import { styles } from "../util/style";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import { user } from "../assets";

function MyData() {
  const [formDisabled, setFormDisabled] = useState(true);
  const navigate = useNavigate();
  const allData = useSelector((state) => state.userIdReducer.uid);
  const [myData, setMyData] = useState({
    name: "Firstname Lastname",
    phone: "000000000000",
    password: "0000",
    location: "My location",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (allData?.data?._id) {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `${import.meta.env.VITE_DEFAULT_HOST}users/${allData.data._id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setMyData(result);
          if (result.error == "User not found") {
            navigate("/login")
          }
        })
        .catch((error) => console.log("error", error));
    }
  }, [allData?.data?._id, formDisabled]);

  // PUT USER DATA
  function handleSave(e) {
    e.preventDefault();

    setLoading(true);
    debounce(async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("token", allData.token);

        var formdata = new FormData();
        formdata.append("name", myData?.name);
        formdata.append("phone", myData?.phone);
        formdata.append("password", myData?.password);

        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        let response = await fetch(
          `${import.meta.env.VITE_DEFAULT_HOST}users/${allData.data?._id}`,
          requestOptions
        );
        let result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setFormDisabled(true); // Disable the form
        setLoading(false);
      }
    }, 300)();
  }

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto lg:px-0 lg:border-x-[1.6px] lg:border-l-0 mb-4 lg:mb-0">
      <div className="flex flex-wrap gap-2 justify-center ss:justify-between items-center px-4 border-b-[1.6px] py-2">
        <h1 className="text-2xl font-semibold">{t("myinformations")}</h1>
        <div className="flex gap-4 items-center justify-end">
          <button
            type="submit"
            onClick={() => {
              window.scrollTo({
                top: 60,
                behavior: "smooth",
              });
              setFormDisabled(false);
            }}
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base p-2 sm:p-3 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-pencil-square w-5 sm:w-6"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
        </div>
      </div>
     <div className="flex gap-4 justify-center ss:justify-start items-center flex-wrap">
      <div className="flex justify-center items-center pl-4 pt-6">
        <img src={user} alt="" className=" rounded-full w-28 h-28"/>
      </div>
      <div className="flex flex-col items-center ss:items-start">
        <h2 className="text-2xl font-semibold">Azizbek Xoldarov</h2>
        <span className="opacity-70"> Birthday 18.09.2004</span>
      </div>
     <div className={`${styles.flexBetween} w-full gap-6 px-4 lg:gap-4 mt-8 min-h-auto`}>
        <form className="w-full flex flex-col gap-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                id="floating_full_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                disabled={formDisabled}
                value={myData?.name}
                required
              />
              <label
                htmlFor="floating_full_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Fullname
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_full_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                disabled={formDisabled}
                defaultValue={myData?.location}
                required
              />
              <label
                htmlFor="floating_full_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Location
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-1  lg:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleInputChange}
                type="number"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                disabled={formDisabled}
                value={myData?.phone}
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleInputChange}
                type="password"
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                disabled={formDisabled}
                value={myData?.password.slice(0, 4)}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
          </div>

          {!formDisabled && (
            <div className="flex gap-4 items-center justify-end">
              <button
                type="submit"
                disabled={loading}
                onClick={handleSave}
                className={`text-white ${
                  !loading
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-600 cursor-not-allowed"
                } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-5 py-2.5 text-center`}
              >
                {loading ? "Saqlanmoqda..." : "Saqlash"}
              </button>
              {!loading && (
                <button
                  type="submit"
                  onClick={() => {
                    setFormDisabled(true);
                  }}
                  className="text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-5 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
              )}
            </div>
          )}
        </form>
      </div>
     </div>
    </div>
  );
}

export default MyData;
