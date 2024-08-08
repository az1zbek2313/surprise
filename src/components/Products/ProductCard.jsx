import { styles } from "../../util/style";

function ProductCard({image, title, about, price}) {

  return (
    <div id="productCard" className="card shadow-lg rounded lg:w-[32%] md:w-[48%] w-[100%] md:mx-0 mx-auto">
      <img src={image} height={220} alt="Card image" className="sm:h-[240px] rounded w-full object-cover"/>
      <div className="flex flex-col gap-2 sm:p-4 p-3 w-full">
      <div className="mb-2 md:mb-4 leading-6">
      <h2 className="font-bold text-md">{title}</h2>
      <p className="opacity-50 font-semibold text-sm">{about}</p>
      </div>
      <div className={`${styles.flexBetween}`}>
      <b>${Math.trunc(price / 100) + ',' + Math.trunc(price % 100)}</b>
      <a href="#" className={`${styles.button}`}>Add to Cart</a>
      </div>
      </div>
    </div>
  )
}

export default ProductCard