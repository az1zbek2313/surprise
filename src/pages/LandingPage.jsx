import { useEffect, useState } from "react";
import { HeroImage, CategoryPruducts, HeaderFilter, TrendingSurprize, StepCards } from "../components";
import { ProductCategoryData } from "../util/contants";
import { Toaster } from "sonner";


function LandingPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchProducts();
}, [])

const fetchProducts = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${import.meta.env.VITE_DEFAULT_HOST}sections`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setSections(result);
        })
        .catch(error => console.log('error', error));
}

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

      {/* Trending Surprizes */}
      <TrendingSurprize />

      {/* Categor Cards */}
      {sections && sections.map((items, index) => (
        index == 1 ?
       <div key={index}>
         <StepCards />
         <CategoryPruducts data={items} index={index+1}/>
       </div>
        : 
        <CategoryPruducts key={index} data={items} index={index+1}/>
      ))}
    </div>
  );
}

export default LandingPage;
