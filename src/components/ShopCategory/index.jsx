import { useNavigate } from "react-router-dom";
import { CategoryCardData } from "../../util/contants";
import { styles } from "../../util/style";

function ShopCategory() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={`${styles.flexBetween} ${styles.container} w-full mx-auto gap-6 md:gap-0`}
      >
        {CategoryCardData.map((item) => (
          <div
            onClick={() => {
              navigate("/detail");
            }}
            key={item.id}
            className={`relative flex transition-all duration-700 hover:scale-[1.02] cursor-pointer ${
              item.id % 2 == 0 ? "mx-auto" : "mx-auto sm:mx-0"
            } md:inline-block md:w-[24%]`}
          >
            <img
              src={item.image}
              alt="card image"
              className="rounded-md object-cover shadow-md w-[100%]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-40 rounded-md"></div>
            {/* absalute title */}
            <span className="absolute bottom-3 text-white lg:text-[16px] text-sm font-semibold left-4">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
