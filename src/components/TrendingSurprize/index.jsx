  import { useEffect, useState } from "react"
  import Card from "../Products/Card"
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
import { styles } from "../../util/style";


  function TrendingSurprize() {
      const [loader, setLoader] = useState(false);
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
      <div className={styles.container}>
          <div className="shadow-xl rounded-[10px] px-4 md:px-8 lg:px-12 py-4 md:py-6 border ">
              <h2 className="text-lg xs:text-xl md:text-3xl font-medium">Trending Surprizes</h2>
              <div className="flex flex-wrap gap-2 ss:gap-3 lg:gap-4">
             {
              loader ? 
              <h3>Loading...</h3> :

              // Desktop 
              window.screen.availWidth >= 768 ?
              <div className="flex flex-wrap gap-[2px] xs:gap-1 md:gap-1 lg:gap-2 xl:gap-3 w-full">
                {trandingSurPrizes?.map((product, index) => (
                     <Card key={index} product={product} width="w-[32%] md:w-[24.5%] lg:w-[24%] my-3 " height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[18em]" />
                  )).slice(0, 4).reverse()}
                {trandingSurPrizes?.map((product, index) => (
                     <Card key={index} product={product} width="w-[32%] md:w-[24.4%] lg:w-[24%] my-3" height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[18em]" />
                  )).slice(0, 4)} 
              </div> :
              // Mobile 
              <div className="flex flex-wrap gap-[2px] xs:gap-1 w-full">
                {trandingSurPrizes?.map((product, index) => (
                     <Card key={index} product={product} width="w-[32%] md:w-[24.5%] lg:w-[24%] my-3" height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[18em]" />
                  )).slice(2, 4)}
                {trandingSurPrizes?.map((product, index) => (
                     <Card key={index} product={product} width="w-[32%] md:w-[24.5%] lg:w-[24%] my-3" height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[18em]" />
                  )).slice(0, 4)} 
              </div>
             }


             {/* absolute More button */}
             <h5 className="w-full flex justify-end">
              <a href="/tranding" className="shadow rounded-full cursor-pointer transition-all duration-500 hover:bg-gray-100 active:bg-gray-200 px-4 xs:py-1 md:text-lg border">More</a>
             </h5>
              </div>
          </div>
          
      </div>
    )
  }

  export default TrendingSurprize