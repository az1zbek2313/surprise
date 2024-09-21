import ProductCard from "./ProductCard";
import { styles } from "../../util/style";
import { useEffect, useState } from "react";

function AllProducts() {
  const [productCardData, setProductCardData] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}product`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProductCardData(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="">
      <div
        className={`${styles.flexBetween} justify-start gap-0 sm:gap-4 lg:gap-0 ${styles.container}`}
      >
        {productCardData.slice(0, 3).map((item) => (
          <ProductCard
            heart={item.like}
            width={"lg:w-[32%]"}
            key={item.id} 
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
