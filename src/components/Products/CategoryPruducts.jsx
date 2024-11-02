import { styles } from "../../util/style";
import Card from "./Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Faqat navigatsiya uchun
import "./style.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryNames from "../CategoryNames";

function CategoryPruducts({data}) {
  const swiperRef = useRef(null);

  return (
    <div style={{background:data.bg}}>
        <CategoryNames name={data.categoryName} to={`category/${import.meta.env.VITE_CATEGORY_ID}`} />
      <div
        className={`w-full ${styles.container} flex items-center justify-between pb-[30px] gap-3`}
      >

        <div className="hidden md:inline-block">
          <h2 className="text-4xl font-medium text lg:font-normal lg:text-5xl text-qoramtir-50 max-w-[304px]">
            {data?.categoryName}
          </h2>
          <p className="text-xl lg:text-2xl text text-qoramtir-50 lg:mt-5 my-2 lg:mb-5">
            {data?.categoryText}
          </p>
          <a
            href={`/category/${import.meta.env.VITE_CATEGORY_ID}`}
            className="flex items-center transition-all duration-300 gap-1 lg:gap-3 hover:text-primary-600"
          >
            <span className="text-xs lg:text-sm pt-[4px]">Shop these unique gifts</span>{" "}
            <span className="text-base lg:text-xl">→</span>
          </a>
        </div>

        <div className="flex flex-col items-end w-full md:w-3/4">
          {/* Navigatsiya tugmalari */}
          <div className="flex gap-2 items-center justify-center mb-2 md:my-2">
            <div
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="rounded-full shadow-lg px-2 sm:px-3 sm:py-1 cursor-pointer transition-all duration-300 hover:bg-gray-200 bg-white"
            >
              <span className="w-2 h-2 text-lg">{`<`}</span>
            </div>
            <div
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="rounded-full shadow-lg px-2 sm:px-3 sm:py-1 cursor-pointer transition-all duration-300 hover:bg-gray-200 bg-white"
            >
              <span className="w-2 h-2 text-lg">{`>`}</span>
            </div>
          </div>

          <div className="w-full">
            <Swiper
              ref={swiperRef}
              centeredSlides={false}
              slidesPerView={window.screen.availWidth >= "640" ? 3 :2} 
              spaceBetween={8}
              modules={[]} 
              className="mySwiper"
              style={{
                backgroundColor: "transparent",
              }}
            >
              {data?.categoryCards.map((product, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    backgroundColor: "transparent",
                    border: "none", 
                    borderRadius: "0",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "400px", height: "auto", borderRadius: "0", overflow:"hidden" }}>
                    <Card product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPruducts;
