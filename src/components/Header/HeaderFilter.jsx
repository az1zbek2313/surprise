import { useState } from "react";
import { categoryHeader, categoryHeaderNames } from "../../util/contants";

function HeaderFilter() {
  const [dropdown, setDropdown] = useState(false);
  const [check, setCheck] = useState("");

  return (
    <>
      <div className=" w-full hidden sm:block">
        <ul
          onMouseLeave={() => {
            setDropdown(false);
          }}
          
          className=" w-fit bg-qoramtir-gray px-2 md:py-1 md:px-4 gap-2 rounded-full flex mx-auto"
        >
          {categoryHeaderNames.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                setDropdown(true);
                setCheck(item)
              }}
              onClick={() => {
                setDropdown(!dropdown);
                setCheck(item)
              }}
              className={`cursor-pointer transition-all duration-300 ${check == item ? "text-blue-600 bg-white" :"hover:text-blue-600 hover:bg-white"} rounded-full px-2 md:px-4 py-1 md:py-2 text-xs md:text-base`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* dropdown category */}
      {dropdown && (
        <div className="flex justify-center">
          <div
            onMouseEnter={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
              setCheck("")
            }}
            className="absolute z-50 border shadow-2xl bg-white flex justify-between items-start gap-2 py-2 px-3 md:gap-[52px] md:py-9 md:px-7"
          >
            {categoryHeader.map((item) => (
              <ul key={item?.id} className="">
                <li className="md:text-2xl md:mb-4">
                  <a href="#">{item.categoryName}</a>
                </li>
                {item.categoryProducts.map((el, index) => (
                  <li key={index} className="text-xs md:text-base leading-6">
                    <a
                      href="/category"
                      className="hover:text-primary-600 transition-all duration-300"
                    >
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderFilter;
