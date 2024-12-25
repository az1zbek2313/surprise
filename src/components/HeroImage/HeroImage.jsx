import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import {carousel} from "../../assets"
import {styles} from "../../util/style"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

function HeroImage() {
  const swiperRef = useRef(null);
  const [banner, setBanner] = useState([]);
  const width = window.screen.availWidth;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}banner`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBanner(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div
      id="default-carousel"
      className={`mt-2 md:mt-3 max-w-[1280px] mx-auto relative w-full xl:px-6`}
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative object-cover overflow-hidden xl:rounded-[6px] md:my-4 h-[240px] sm:h-[280px] w-full md:h-[420px]">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={false}
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
          {width > 640
            ? banner.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className={`${styles.container} flex justify-center w-full h-full bg-category-10`}>
                    {/* <img
                      src={`${import.meta.env.VITE_IMAGE}${item?.img}`}
                      className={`absolute xs:scale-100 object-cover block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                      alt="..."
                    /> */}
                    <div className="pl-6 flex items-center h-full sm:pl-0 ">
                      <div className="sm:pl-12 flex flex-col items-start w-fit xs:gap-2 lg:gap-6">
                        <div className="flex flex-col items-start gap-1">
                          <p className="text-primary-1000 hidden sm:inline-block text-sm font-medium public-sans">
                            — THE BEST PLACE TO PLAY
                          </p>
                          <h1 className="font-medium text-[18px] xs:text-2xl sm:text-4xl public-sans md:text-5xl">
                            Xbox Consoles
                          </h1>
                        </div>
                        <span className="text-start text-[10px] xs:text-[12px] max-w-[240px] md:text-[18px] sm:max-w-[53%] public-sans text-qoramtir-gray">
                          Save up to 50% on select Xbox games. Get 3 months of
                          PC Game Pass for $2 USD.
                        </span>
                        <button className="rounded-[3px] px-4 lg:px-8 py-2 public-sans lg:py-3 text-xs sm:text-sm md:font-bold hover:bg-primary-500 transition-all duration-200 active:bg-primary-400 text-white bg-primary-600 inline-block">
                          Shop Now →
                        </button>
                      </div>
                      <div className="">
                        <img src={carousel} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : banner.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="relative flex justify-center w-full h-full bg-category-10">
                    {/* <img
                      src={item.image}
                      className={`absolute object-cover xs:scale-100 block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                      alt="..."
                    /> */}
                    <div className=" pl-6 flex items-center h-full">
                    <div className="flex flex-col items-start w-fit gap-2 lg:gap-6">
                      <h1 className="font-medium text-[20px] xs:text-3xl public-sans">
                        Xbox Consoles
                      </h1>
                      <span className="text-start text-[10px] xs:text-[12px] public-sans max-w-[200px] text-qoramtir-gray">
                        Save up to 50% on select Xbox games. Get 3 months of PC
                        Game Pass for $2 USD.
                      </span>
                      <button className="rounded-[3px] px-4 lg:px-8 py-2 lg:py-3 text-xs public-sans hover:bg-primary-500 transition-all duration-200 active:bg-primary-400 text-white bg-primary-600 inline-block">
                        Shop Now →
                      </button>
                    </div>
                    <div className="w-[200px] h-[200px]">
                        <img src={carousel} alt="" className="w-[200px] h-[200px]"/>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>

      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="hidden absolute top-0 start-6 z-30 items-center justify-center h-full px-0 md:px-4 cursor-pointer group focus:outline-none"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="hidden absolute top-0 end-6 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
