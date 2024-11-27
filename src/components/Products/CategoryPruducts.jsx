import { styles } from "../../util/style";
import Card from "./Card";
import "./style.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Faqat navigatsiya uchun
import "./style.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryNames from "../CategoryNames";
import { Scrollbar } from "swiper/modules";

function CategoryPruducts({data, index}) {
  const swiperRef = useRef(null);

  return (
    <div style={index ==1 ? {background:"rgb(244, 254, 255)"} : index == 2 ? {background:"rgb(255, 241, 241)"} : {background:"rgb(236, 255, 205)"}}>
        <CategoryNames name={data?.name?.uz} to={`/section/${data._id}`} />
      <div
        className={`w-full ${styles.container} flex items-center justify-between py-[30px] gap-3`}
      >

        <div className="hidden md:inline-block md:w-[24%]">
          <h2 className="text-3xl font-medium text lg:font-medium lg:text-4xl text-qoramtir-50 max-w-[304px]">
            {data?.name?.uz}
          </h2>
          <p className="text-lg lg:text-xl text text-qoramtir-50 my-2 lg:my-4">
            {data?.description?.uz}
          </p>
          <a
            href={`/section/${data._id}`}
            className="flex items-center transition-all duration-300 gap-1 lg:gap-3 hover:text-primary-600"
          >
            <span className="text-xs lg:text-sm pt-[4px]">Shop these unique gifts</span>{" "}
            <span className="text-base lg:text-xl">→</span>
          </a>
        </div>

         <div className="flex flex-col items-end w-full md:w-[76%] overflow-x-auto scrollbar-custom">
  <Swiper
    ref={swiperRef}
    centeredSlides={false}
    slidesPerView={window.screen.availWidth >= 1024 ? 3.5 : window.screen.availWidth >= 480 ? 2.8 : 2.5}
    spaceBetween={8}
    modules={[Scrollbar]}
    scrollbar={{
      hide: true, 
    }}
    className="mySwiper"
    style={{
      backgroundColor: "transparent",
      // overflowX: "auto",
    }}
  >
    {data?.products && data?.products.map((product, index) => (
      <SwiperSlide
        key={index}
        style={{
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "0",
          overflow: "hidden",
        }}
      >
        <div className="pb-4" style={{ width: "400px", height: "auto", borderRadius: "0", overflow: "hidden" }}>
          <Card height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[16em]" product={product} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      </div>
    </div>
  );
}

export default CategoryPruducts;
