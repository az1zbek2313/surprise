import cartCommit from "../assets/pngwing.com.png";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Card from "../components/Products/Card";
import { useEffect } from "react";
import { getMyFavourites } from "../Redux/Actions/actions";

function MyFavourites() {
  const data = useSelector((state) => state.myFavourites);
  const token = useSelector((state) => state.userIdReducer.uid.token);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}users/favorite`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (data) {
          if (result) {
            const filterProducts = (data.length > result.length) ? 
            data.filter(
              (el) => !result.some((res) => res._id === el._id)
            ):
            result.filter(
              (el) => !data.some((res) => res._id === el._id)
            )
            console.log("Original data:", data);
            console.log("Existing favorites:", result);
            console.log("Filtered products:", filterProducts);
            filterProducts.forEach((el) => {
              var myHeaders = new Headers();
              myHeaders.append("token", token);

              var formdata = new FormData();
              formdata.append("productId", el._id);

              var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow",
              };

              fetch(
                `${import.meta.env.VITE_DEFAULT_HOST}users/favorite`,
                requestOptions
              )
                .then((response) => response.json())
                .then((result) => console.log(result.message))
                .catch((error) => console.log("error", error));
                return
            });
          } else {
            data.forEach((el) => {
              var myHeaders = new Headers();
              myHeaders.append("token", token);

              var formdata = new FormData();
              formdata.append("productId", el._id);

              var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow",
              };

              fetch(
                `${import.meta.env.VITE_DEFAULT_HOST}users/favorite`,
                requestOptions
              )
                .then((response) => response.json())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));
                return
            });
          }
        } else {
          dispatch(getMyFavourites(result));
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className={`container mx-auto md:px-0`}>
        <h1 className="px-4 text-2xl font-semibold border-b-[1.6px] py-2">
          {t("myfavourites")}
        </h1>
        {data.length == 0 ? (
          <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
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
        ) : (
          <div className="">
            <div
              className={`flex justify-start items-center flex-wrap px-4 gap-1 xl:gap-4  my-4`}
            >
              {data.map((item) => (
                <li
                  key={item.id}
                  className="w-[49%] xs:w-[32%] my-1 md:my-2 list-none"
                >
                  <Card product={item} height={"h-[200px] sm:h-[240px]"} />
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyFavourites;
