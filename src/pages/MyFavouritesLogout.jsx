import { styles } from "../util/style";
import cartCommit from "../assets/pngwing.com.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Card from "../components/Products/Card";

function MyFavouritesLogout() {
  const data = useSelector((state) => state.myFavourites);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`container min-h-[100vh] mx-auto md:px-0 lg:border-x-[1.6px]`}
      >
        <h1 className="px-4 text-2xl font-semibold border-b-[1.6px] py-2">
          {t("myfavourites")}
        </h1>
        {data.length == 0 ? (
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center mt-[16vh]">
            <img src={cartCommit} alt="search box icon" className="w-40 h-40" />
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
        ) : (
          <div className="">
            <div
              className={`flex items-center flex-wrap justify-start gap-1 sm:gap-2 ${styles.container}`}
            >
              {data.map((item, index) => (
                <li
                key={index}
                className="w-[49%] xs:w-[32%] lg:w-[24%] my-2 list-none"
              >
                <Card product={item} height={"h-[190px] sm:h-[240px]"}/>
              </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyFavouritesLogout;
