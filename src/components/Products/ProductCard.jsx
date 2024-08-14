import { useNavigate } from "react-router-dom";
import { styles } from "../../util/style";

function ProductCard({ image, title, about, price, width }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/detail");
      }}
      id="productCard"
      className={`card cursor-pointer shadow-lg rounded  md:w-[48%] md:mx-0 mx-auto ${width} transition-all duration-700 hover:scale-[1.02]`}
    >
      <img
        src={image}
        height={220}
        alt="Card image"
        className="sm:h-[240px] rounded w-full object-cover transition-all duration-700 hover:translate-y-1"
      />
      <div className="flex flex-col gap-2 sm:p-4 p-3 w-full">
        <div className="mb-2 md:mb-4 leading-6">
          <h2 className="font-bold text-sm sm:text-[15px]">{title}</h2>
          <p className="opacity-50 font-semibold text-[12px] sm:text-sm">
            {about}
          </p>
        </div>
        <div className={`${styles.flexBetween}`}>
          <b className="text-[12px] sm:text-sm">
            ${Math.trunc(price / 100) + "," + Math.trunc(price % 100)}
          </b>
          <a href="#" className={`${styles.button} text-[12px] sm:text-sm`}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
