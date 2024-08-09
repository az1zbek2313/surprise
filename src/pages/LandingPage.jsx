import { Products, ShopCategory, Footer, CategoryNames } from "../components";

function LandingPage() {
  return (
    <div>
      <Products /> <br />
      <CategoryNames name={"Shop by Category"} to={"#"} />
      <ShopCategory /> <br />
      <CategoryNames name={"Featured Products"} to={"#"} />
      <Products /> <br />
      <CategoryNames name={"Popular Products"} to={"#"} />
      <Products /> <br />
      <Footer />
    </div>
  );
}

export default LandingPage;
