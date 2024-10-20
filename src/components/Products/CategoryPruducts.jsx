import { styles } from "../../util/style";
import Card from "./Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Faqat navigatsiya uchun
import "./style.css";
import { useRef } from "react";
import { ProductCardData } from "../../util/contants";
import { Swiper, SwiperSlide } from "swiper/react";

function CategoryPruducts() {
  const swiperRef = useRef(null);

  return (
    <div className="bg-primary-50">
      <div
        className={`w-full ${styles.container} flex items-center justify-between pb-[30px] gap-[6px]`}
      >
        <div className="hidden md:inline-block">
          <h2 className="text-4xl font-medium lg:font-normal lg:text-5xl text-qoramtir-50 max-w-[304px]">
            Happy Birthday!
          </h2>
          <p className="text-xl lg:text-2xl text-qoramtir-50 lg:mt-[30px] my-2 lg:mb-5">
            Make the day bright
          </p>
          <a
            href="/category"
            className="flex items-center transition-all duration-300 gap-1 lg:gap-3 hover:text-primary-600"
          >
            <span className="text-xs lg:text-sm pt-[4px]">Shop these unique gifts</span>{" "}
            <span className="text-base lg:text-xl">→</span>
          </a>
        </div>

        <div className="flex flex-col items-end w-full md:w-3/4">
          {/* Navigatsiya tugmalari */}
          <div className="flex gap-2 items-center justify-center my-2">
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
              {ProductCardData.map((product, index) => (
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
