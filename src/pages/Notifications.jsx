import { useState } from "react";
import cartCommit from "../assets/pngwing.com.png";
import { useTranslation } from "react-i18next";

function Notifications() {
    const [data, setData] = useState([]);
    const { t } = useTranslation();

    return (
      <div
        className={`container min-h-[100vh] mx-auto md:px-0 lg:border-r-[1.6px]`}
      >
        <div className="flex flex-wrap gap-1 xs:gap-0 justify-between items-center px-4 border-b-[1.6px] py-2">
          <h1 className="text-2xl mx-auto xs:mx-0 font-semibold">
            {t("notifications")}
          </h1>
        </div>
  
        {data ? (
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center mt-[16vh]">
            <img src={cartCommit} alt="search box icon" className="w-40 h-40" />
            <h2 className="font-semibold text-xl text-center">Sizda hali bildirishnomalar <br /> mavjud emas</h2>
            <a href="/" className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center">Xarid qilish</a>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    );
}

export default Notifications