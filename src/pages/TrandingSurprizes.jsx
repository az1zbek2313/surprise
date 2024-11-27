import { useEffect, useState } from "react";
import cartCommit from "../assets/pngwing.com.png";
import Card from "../components/Products/Card";
import { styles } from "../util/style";

function TrandingSurprizes() {
    const [tranding, setTranding] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        setLoader(true);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
            .then(response => response.json())
            .then(result => {
                const filtered = result.filter(item => (item.price >= 1000))
                if (filtered) {
                    setTranding(filtered)
                }
            })
            .catch(error => console.log('error', error))
            .finally(_ => {
              setLoader(false);
            });
    }

  return (
    <div>
      {
        tranding.length > 0 ? 
        <div className={`${styles.container} flex flex-col  gap-2`}>
          <div className="flex flex-col justify-center items-center mx-auto my-4">
            <h2 className="font-bold text-3xl">Tranding Surprizes</h2>
            </div>

            <div className="flex flex-wrap gap-1 lg:gap-2">
            {
                tranding.map((item, index) => (
                    <Card key={index} product={item} width="w-[32%] md:w-[24.5%] lg:w-[24%] my-1 " height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[18em]" />
                ))
            }
            </div>
        </div>
        : 
        <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
        <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
          <img src={cartCommit} alt="search box icon" className="w-40 h-40" />
          <h2 className="font-semibold text-xl">TrandingSurprize not found</h2>
          <p className="opacity-55 font-medium text-sm md:text-base text-center">
            Bizning mahsulotlardan ko'proq
            <br /> xarid qiling.
          </p>
          <a
            href="/"
            className="text-white w-44 md:w-64 mb-0 bg-red-600 hover:bg-red-700 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base py-2 md:py-3 text-center justify-center inline-flex items-center"
          >
            Xarid qilish
          </a>
        </div>
      </div>
      }
    </div>
  );
}

export default TrandingSurprizes;
