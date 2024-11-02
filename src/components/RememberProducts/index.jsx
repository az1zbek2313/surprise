import { trandingSurPrizes } from "../../util/contants";
import Card from "../../components/Products/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Faqat navigatsiya uchun
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function RemeberProducts({data}) {
    const swiperRef = useRef(null);

    console.log(12, data);
  return (
    <div className="mt-6">
          <div className="flex flex-col items-end w-full">
            {/* Navigatsiya tugmalari */}
            <div className="flex justify-between w-full items-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Similar Products
              </h3>
              <div className="flex gap-2 items-center mb-2 md:my-2">
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
            </div>

            <div className="w-full">
              <Swiper
                ref={swiperRef}
                centeredSlides={false}
                slidesPerView={
                  window.screen.availWidth >= "640"
                    ? 4
                    : window.screen.availWidth <= "480"
                    ? 2
                    : 3
                }
                spaceBetween={8}
                modules={[]}
                className="mySwiper"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                {trandingSurPrizes?.map((product, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: "0",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "400px",
                        height: "auto",
                        borderRadius: "0",
                        overflow: "hidden",
                      }}
                    >
                      <Card product={product} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
  )
}

export default RemeberProducts