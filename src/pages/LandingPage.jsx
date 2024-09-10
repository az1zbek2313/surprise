import { Products, ShopCategory, HeroImage, CategoryNames } from "../components";
import { styles } from "../util/style";

function LandingPage() {
  return (
    <div>
      <HeroImage />
      <CategoryNames name={"Shop by Category"} to={"category"} />
      <ShopCategory /> <br />
      <div className={`${styles.container} ${styles.flexBetween} md:pt-4 md:pb-2 pb-1 pt-2`}>
        <h2 className={`${styles.headingName}`}>All Products</h2>
      </div>
      <Products /><br />
      <CategoryNames name={"Featured Products"} to={"category"} />
      <Products /> <br />
      <CategoryNames name={"Popular Products"} to={"category"} />
      <Products /> <br />
    </div>
  );
}

export default LandingPage;
