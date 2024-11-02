import { ProductCard } from "../components";
import cartCommit from "../assets/pngwing.com.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Card from "../components/Products/Card";

function MyFavourites() {
  const data = useSelector((state) => state.myFavourites);
  const { t } = useTranslation();

  console.log(10, data);

  return (
    <>
      <div
        className={`container mx-auto md:px-0`}
      >
        <h1 className="px-4 text-2xl font-semibold border-b-[1.6px] py-2">
          {t("myfavourites")}
        </h1>
        {data.length == 0 ? (
          <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
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
                  <Card product={item} height={"h-[200px] sm:h-[240px]"}/>
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
