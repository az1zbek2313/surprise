import { useNavigate } from "react-router-dom";
import "./style.css";
import { toast } from "sonner";
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

        navigate("/detail/1");
      }}
      className={`max-w-sm bg-white border relative hover:scale-[1.02] transition-all duration-500 border-gray-200 rounded-lg shadow ${
        location.includes("category") || location.includes("account/likes")? 
        "w-[49%] flex-shrink-0 sm:w-[32%]"
        : "w-[49%] flex-shrink-0 sm:w-[33%] lg:w-[24%]"
      }`}
    >
      <a href="#">
        <img
          className="p-8 hover:scale-[1.03] transition-all duration-500 rounded-t-lg"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>
      <div className="ss:px-3 sm:px-5 px-2 ss:pb-3 sm:pb-5 pb-2">
        <a href="#">
          <h5 className="text-md sm:text-xl title font-semibold tracking-tight text-gray-900">
            {data.name?.uz ? data.name?.uz : data.title}
          </h5>
        </a>
        <a href="#">
          <p className="text-sm lg:text-md text text-gray-900">
            {data.description?.uz ? data.description?.uz : data.about}
          </p>
        </a>
        <div className="flex items-center gap-2 mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 hidden ss:block text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            5.0
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            ${Math.trunc(data.price / 100) + "," + Math.trunc(data.price % 100)}
          </span>
          <a
            href="#"
            className="text-white w-full mt-2 xl:mt-0 xl:w-auto bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3  md:px-5 py-2 md:py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
      
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
    </div>
  );
}

export default ProductCard;
