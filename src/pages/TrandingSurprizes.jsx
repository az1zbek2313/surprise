import { useEffect, useState } from "react";
import cartCommit from "../assets/pngwing.com.png";
import Card from "../components/Products/Card";
import { styles } from "../util/style";

function TrandingSurprizes() {
  const [tranding, setTranding] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoader(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const filtered = result.filter((item) => item.price >= 1000);
        if (filtered) {
          setTranding(filtered);
        }
      })
      .catch((error) => console.log("error", error))
      .finally((_) => {
        setLoader(false);
      });
  };

  return (
    <div>
      {!loader ? (
        tranding.length > 0 ? (
          <div className={`${styles.container} flex flex-col  gap-2`}>
            <div className="flex flex-col justify-center items-center mx-auto my-4">
              <h2 className="font-bold text-3xl">Tranding Surprizes</h2>
            </div>

            <div className="flex flex-wrap gap-1 lg:gap-2">
              {tranding.map((item, index) => (
                <Card
                  key={index}
                  product={item}
                  width="w-[32%] md:w-[24.5%] lg:w-[24%] my-1 "
                  height="h-[7em] ss:h-[10em] sm:h-[12em] lg:h-[18em]"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="min-h-[50vh] sm:h-[60vh] lg:min-h-[70vh] flex justify-center items-center">
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
              <img
                src={cartCommit}
                alt="search box icon"
                className="w-40 h-40"
              />
              <h2 className="font-semibold text-xl">
                TrandingSurprize not found
              </h2>
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
        )
      ) : (
        <div className={`${styles.container} flex flex-col  gap-2`}>
          <div className="flex flex-col justify-center items-center mx-auto my-4">
            <h2 className="font-bold text-3xl">Tranding Surprizes</h2>
          </div>

          <div className="flex justify-center my-4">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 md:w-12 h-8 md:h-12 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrandingSurprizes;
