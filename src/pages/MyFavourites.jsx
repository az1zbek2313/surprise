import { useState } from "react";
import { ProductCard } from "../components";
import { styles } from "../util/style";
import cartCommit from "../assets/pngwing.com.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function MyFavourites() {
  const data = useSelector((state) => state.myFavourites);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`container min-h-[100vh] mx-auto md:px-0 lg:border-r-[1.6px]`}
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
            <div className={`${styles.flexBetween} gap-6 px-4 lg:gap-4  my-4`}>
              {data.map((item) => (
                <ProductCard width={"lg:w-[48%]"} key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyFavourites;
