import { useNavigate } from "react-router-dom";
import "./style.css";
import { styles } from "../../util/style";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import {
  addedMyFavourites,
  changeHeartMyFavourites,
  deletedMyFavourites,
} from "../../Redux/Actions/actions";

function ProductCard(data) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.myFavourites);
  const someLike = likes.some((el) => el.id == data.id);
  const location = window.location.pathname;

  function handleSave(e) {
    e.stopPropagation();
    toast.success("Yoqtirgan Mahsulotlaringizga saqlandi");
    dispatch(addedMyFavourites(data));
    dispatch(changeHeartMyFavourites(data));
  }
  function handleRemove(e) {
    e.stopPropagation();
    toast.error("Yoqtirgan Mahsulotlaringizdan o'chirildi");
    dispatch(deletedMyFavourites(data.id));
    dispatch(changeHeartMyFavourites(data));
  }

  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        navigate("/detail");
      }}
      id="productCard"
      className={`card relative cursor-pointer shadow-lg rounded h-full  w-[49%] ss:w-[48%] mb-2 md:mx-0 mx-auto ${
        location == "/account/likes"
          ? "lg:w-[48%]"
          : location == "/likes"
          ? "w-[48%] lg:w-[32%]"
          : location == "/detail"
          ? "lg:w-[32%] flex-shrink-0 w-full xs:w-[47.5%]"
          : "lg:w-[32%]"
      } transition-all duration-500 hover:scale-[1.03]`}
    >
      <Toaster
        toastOptions={{
          classNames: {
            error: "bg-red-400 text-white",
            success: "text-green-400",
          },
        }}
      />
      <div className="relative flex h-[160px] sm:h-[240px] rounded w-full object-cover flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-center"></div>
        <div className="group relative m-0 flex h-72 w-full rounded shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
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
          <h2 className="font-bold title text-sm sm:text-base">{data.title}</h2>
          <p className="opacity-50 text font-semibold text-sm">{data.about}</p>
        </div>
        <div className={`${styles.flexBetween}`}>
          <b className="text-[20px] sm:text-[24px] font-semibold opacity-80">
            ${Math.trunc(data.price / 100) + "," + Math.trunc(data.price % 100)}
          </b>
          <a
            href="#"
            className={`${styles.button} block bg-red-600 w-full text-center sm:text-start sm:w-fit mt-2 sm:mt-0 hover:bg-red-500 text-sm sm:text-base`}
          >
            Add to Cart
          </a>
        </div>
      </div>

      {/* Like Save */}
      {!someLike ? (
        <span className="absolute top-3 right-3 w-5 sm:[&>svg]:w-6 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            fill="currentColor"
            onClick={handleSave}
            className="bi bi-suit-heart hover:text-red-500 transition-all duration-300"
            viewBox="0 0 16 16"
          >
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
          </svg>
        </span>
      ) : (
        <span className="absolute top-3 right-3 w-5 sm:[&>svg]:w-6 z-50">
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
    </div>
  );
}

export default ProductCard;
