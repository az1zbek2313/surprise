import { Products, ShopCategory, HeroImage, CategoryNames, CategoryPruducts } from "../components";

function LandingPage() {
  return (
    <div>
      <HeroImage />
      <CategoryNames name={"Shop by Category"} to={"category"} />
      <ShopCategory /> <br />
      <CategoryPruducts />
      <CategoryNames name={"All Products"} to={"category"} />
      <Products /><br />
      <CategoryNames name={"Featured Products"} to={"category"} />
      <Products /> <br />
      <CategoryNames name={"Popular Products"} to={"category"} />
      <Products /> <br />
    </div>
  );
}

export default LandingPage;
