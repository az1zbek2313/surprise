import { cardImage9 } from "../../assets";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  addedMyFavourites,
  changeHeartMyFavourites,
  deletedMyFavourites,
} from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";

function Card(data) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.myFavourites);
  const someLike = likes.some((el) => el.id == data.id);

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
    <>
      <Toaster
        toastOptions={{
          classNames: {
            error: "bg-red-400 text-white",
            success: "text-green-400",
          },
        }}
      />
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          navigate("/detail");
        }}
        className="flex flex-col gap-2 sm:gap-[10px] md:gap-[18px] cursor-pointer"
      >
        <div className="group relative bg-[rgb(121, 121, 121)]">
          {/* Like Save */}
          {!someLike ? (
            <span className="absolute cursor-pointer top-3 right-3 w-5 sm:[&>svg]:w-6 z-50">
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
            <span className="absolute cursor-pointer top-3 right-3 w-5 sm:[&>svg]:w-6 z-50">
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
          <div className="overflow-hidden rounded-md sm:rounded-[10px] border-gray-200 opacity-90 transition duration-500 ease-in-out group-hover:opacity-100">
            <img
              src={cardImage9}
              alt="card image"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-[8px]">
          <div className="flex justify-between items-start md:items-end flex-wrap">
            <h4 className="text-qoramtir-600 text-xl title md:text-2xl font-medium">
              Teddy bear
            </h4>
            <p className="text-qoramtir-600 text-xs lg:text-sm text">
              Unique Present Store
            </p>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <p className="flex flex-wrap items-center gap-[6px]">
              <span className="text-base md:text-xl text-qoramtir-qizil">
                $ 1800
              </span>
              <span className="text-sm md:text-base text-qoramtir-600 line-through opacity-80">
                $ 2200
              </span>
            </p>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[1, 2, 3, 4, 5].map((item) => (
                <svg
                  key={item}
                  className={`w-3 h-3 md:w-4 md:h-4 ${item == 5 || item == 4 ? "text-gray-300" : "text-yellow-300"}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
