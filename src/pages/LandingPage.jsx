import { Products, ShopCategory, Footer, CategoryNames } from "../components";

function LandingPage() {
  return (
    <div>
      <Products /> <br />
      <CategoryNames name={"Shop by Category"} to={"category"} />
      <ShopCategory /> <br />
      <CategoryNames name={"Featured Products"} to={"category"} />
      <Products /> <br />
      <CategoryNames name={"Popular Products"} to={"category"} />
      <Products /> <br />
      <Footer />
    </div>
  );
}

export default LandingPage;
