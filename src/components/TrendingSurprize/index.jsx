  import { useEffect, useState } from "react"
  import Card from "../Products/Card"
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation"; // Faqat navigatsiya uchun
  import { useRef } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";


  function TrendingSurprize() {
      const [loader, setLoader] = useState(false);
      const swiperRef = useRef(null);
      const [trandingSurPrizes, setTranding] = useState([]);

      useEffect(() => {
          var requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
            
            fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
              .then(response => response.json())
              .then(result => {
                  setTranding(result)
              })
              .catch(error => console.log('error', error))
              .finally(_ => {
                setLoader(false);
              });
      }, [])
    return (
      trandingSurPrizes.length > 0 && 
      <div className="max-w-[1280px] mx-auto xl:px-6">
          <div className="shadow-xl rounded-[10px] px-4 md:px-8 lg:px-12 py-4 md:py-6 border ">
              <h2 className="text-lg xs:text-xl md:text-3xl font-medium">Trending Surprizes</h2>
              <div className="flex flex-wrap gap-2 ss:gap-3 lg:gap-4">
             {
              loader ? 
              <h3>Loading...</h3> :
              <div className="relative flex flex-col items-end w-full">
              {/* Navigatsiya tugmalari */}
              <div className="flex absolute z-50 top-[40%] justify-between w-full items-center">
                <div className="w-full justify-between flex gap-2 items-center mb-2 md:my-2">
                  <div
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="rounded-full shadow-lg px-2 sm:px-3 sm:py-1 cursor-pointer transition-all duration-300 hover:bg-gray-200 bg-white"
                  >
                    <span className="w-2 h-2 text-lg">{`<`}</span>
                  </div>
                  <div
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className=" rounded-full shadow-lg px-2 sm:px-3 sm:py-1 cursor-pointer transition-all duration-300 hover:bg-gray-200 bg-white"
                  >
                    <span className="w-2 h-2 text-lg">{`>`}</span>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 mt-4">
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
                          borderRadius: "0",
                          overflow: "hidden",
                        }}
                      >
                        <Card product={product} height="h-[9em] ss:h-[10em] md:h-[12em] lg:h-[16em]" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
             }
              </div>
          </div>
          
      </div>
    )
  }

  export default TrendingSurprize