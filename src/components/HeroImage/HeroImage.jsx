import { Autoplay, Pagination } from "swiper/modules";
import { heroImages } from "../../util/contants";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

function HeroImage() {
  const swiperRef = useRef(null);

  return (
    <div
      id="default-carousel"
      className={`mt-2 md:mt-3 max-w-[1280px] mx-auto relative w-full xl:px-6`}
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative overflow-hidden h-[200px] sm:h-[220px] w-full md:h-[280px]">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {heroImages.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                className={`absolute xs:scale-100 object-cover block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                alt="..."
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="hidden xs:flex absolute top-0 start-6 z-30 items-center justify-center h-full px-0 md:px-4 cursor-pointer group focus:outline-none"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <span className="inline-flex items-center justify-center w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/30 hover:bg-white/40 group-focus:outline-none">
          <svg
            className="w-2 h-2 md:w-4 md:h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="hidden xs:flex absolute top-0 end-6 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <span className="inline-flex items-center justify-center w-8 md:w-10 h-8 md:h-10  rounded-full bg-white/30 group-hover:bg-white/40 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-2 h-2 md:w-4 md:h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default HeroImage;
