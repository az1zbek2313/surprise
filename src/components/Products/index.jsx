import ProductCard from "./ProductCard";
import { ProductCardData } from "../../util/contants";
import { styles } from "../../util/style";

function Products() {
  return (
    <div className="">
      <div className={`${styles.flexBetween} justify-start gap-0 sm:gap-4 lg:gap-0 ${styles.container}`}>
      {
      ProductCardData.map(item => (
        <ProductCard heart={item.like} width={"lg:w-[32%]"} key={item.id} {...item}/>
      ))
      }
    </div>
    </div>
  );
}

export default Products;
