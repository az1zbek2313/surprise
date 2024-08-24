import { useState } from "react";
import cartCommit from "../assets/pngwing.com.png";

function MyCommit() {
  const [data, setData] = useState([]);

  return (
    <div
      className={`container min-h-[100vh] mx-auto md:px-0 border-r-[1.6px] border-l-[1.6px] lg:border-l-0`}
    >
      <div className="flex flex-wrap gap-1 xs:gap-0 justify-between items-center px-4 border-b-[1.6px] py-2">
        <h1 className="text-2xl mx-auto xs:mx-0 font-semibold text-primary-800">
          Mening sharhlarim
        </h1>
      </div>

      {data ? (
        <div className="flex flex-col gap-2 md:gap-4 justify-center items-center mt-[16vh]">
          <img src={cartCommit} alt="search box icon" className="w-40 h-40" />
          <h2 className="font-semibold text-xl">Sizda hali sharhlar yo'q</h2>
          <p className="opacity-55 font-medium text-sm md:text-base text-center">
          Sizning sharhingiz kimningdir to'g'ri <br /> qaror qabul qilishiga yordam beradi.
          </p>
        </div>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}

export default MyCommit;
