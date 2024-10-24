import { HeroImage, CategoryPruducts, HeaderFilter } from "../components";
import { ProductCategoryData } from "../util/contants";
import { Toaster } from "sonner";

function LandingPage() {
  return (
    <div>
      {/* Toaster */}
      <Toaster
        toastOptions={{
          classNames: {
            error: "bg-red-400 text-white",
            success: "text-green-400",
          },
        }}
      />

      {/* Header filter category */}
      <HeaderFilter />

      {/* Hero Images Carousel */}
      <HeroImage />

      {/* Categor Cards */}
      {ProductCategoryData.map((items) => (
        <CategoryPruducts key={items.id} data={items} />
      ))}
    </div>
  );
}

export default LandingPage;
