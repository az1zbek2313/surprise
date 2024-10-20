import ProductCard from "./ProductCard";
import { ProductCardData } from "../../util/contants";
import { styles } from "../../util/style";
import Card from "./Card";

function Products() {
  return (
    <div className="">
      <div className={`flex items-center overflow-x-auto justify-start gap-2 lg:gap-4 pb-3 ${styles.container}`}>
      {
      ProductCardData.map(item => (
        <Card heart={item.like} key={item.id} {...item}/>
      ))
      }
    </div>
    </div>
  );
}

export default Products;
