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
      className={`card cursor-pointer shadow-lg rounded  md:w-[48%] md:mx-0 mx-auto ${width} transition-all duration-500 hover:scale-[1.03]`}
    >
      <div className="relative flex h-[240px] rounded w-full object-cover flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-center dark:bg-black"></div>
        <div className="group relative m-0 flex h-72 w-full rounded shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
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
