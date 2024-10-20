import { Products, ShopCategory, HeroImage, CategoryNames, CategoryPruducts } from "../components";
import { ProductCategoryData } from "../util/contants";

function LandingPage() {
  return (
    <div>
      <HeroImage />
      {
        ProductCategoryData.map((items) => (
          <CategoryPruducts key={items.id} data={items}/>
        ))
      }      
    </div>
  );
}

export default LandingPage;
