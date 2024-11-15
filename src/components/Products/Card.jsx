import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { cardImage9 } from "../../assets";
import "./style.css";
import {
  addedMyFavourites,
  changeHeartMyFavourites,
  deletedMyFavourites,
} from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";

function Card({product, height, width}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.myFavourites);
  const someLike = likes.some((el) => el.id == product.id);

  function handleSave(e) {
    e.stopPropagation();
    toast.success("Yoqtirgan Mahsulotlaringizga saqlandi");
    dispatch(addedMyFavourites(product));
    dispatch(changeHeartMyFavourites(product));
  }
  function handleRemove(e) {
    e.stopPropagation();
    toast.error("Yoqtirgan Mahsulotlaringizdan o'chirildi");
    dispatch(deletedMyFavourites(product.id));
    dispatch(changeHeartMyFavourites(product));
  }
  return (
    <>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          navigate("/detail");
        }}
        className={`flex flex-col gap-2 sm:gap-[10px] cursor-pointer ${width}`}
      >
        <div className="group relative bg-[rgb(121, 121, 121)]">
          {/* Like Save */}
          {!someLike ? (
            <span className="absolute cursor-pointer top-2 right-2 sm:top-3 sm:right-3 w-[18px] sm:[&>svg]:w-6 z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="red"
                fill="currentColor"
                onClick={handleSave}
                className="bi bi-suit-heart hover:text-red-500 transition-all duration-300"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </span>
          ) : (
            <span className="absolute cursor-pointer top-2 right-2 sm:top-3 sm:right-3 w-[18px] sm:[&>svg]:w-6 z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                onClick={handleRemove}
                className="bi bi-suit-heart-fill text-red-600 hover:text-red-500 transition-all duration-300"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
            </span>
          )}
          <div className={`overflow-hidden border shadow rounded-md sm:rounded-[10px] border-gray-200 opacity-90 transition duration-500 ease-in-out group-hover:opacity-100 ${height ? height : ""}`}>
            <img
              src={product?.image && cardImage9 || product?.images.length && `https://surprize.uz${product.images[0]}` }
              alt="card image"
                className={`animate-fade-in block w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110 ${height ? height : 'h-auto'}`}
              />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <h4 className="text-qoramtir-600 title text-base md:text-xl font-medium leading-6">
              {product.title || product.name.uz ? product.title || product.name.uz : "Product not found"}
            </h4>
            {/* <p className="text-qoramtir-600 text-xs lg:text-sm title">
              {product.about}
            </p> */}
          </div>
          <div className="flex justify-between flex-row items-center flex-wrap">
            <p className="flex flex-wrap items-center gap-[6px]">
              <span className="text-sm md:text-lg text-black">
                {product?.newprice ? product.newprice : product.price}$
              </span>
              <span className="text-xs hidden xs:inline-block text-qoramtir-qizil line-through opacity-80">
                {product?.price}$
              </span>
            </p>
            <div className="flex items-center rtl:space-x-reverse md:mr-2">
              <span className="text-sm opacity-70">{product.star || product.rating}</span>
                <span className="text-sm">⭐️</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
