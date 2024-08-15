import { styles } from "../../util/style";

function FooterLink() {
  return (
    <div className="border-t-[1.5px] py-2 border-gray-300">
      <div className={`${styles.container} px-8 xs:px-16 flex justify-between items-start flex-wrap gap-3`}>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-xs ss:text-sm md:text-base mb-2">About</li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/about">About us</a>
          </li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">Vakansiya</a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-xs ss:text-sm md:text-base mb-2">Category</li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/category">Shop</a>
          </li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/category">Featured</a>
          </li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/category">Popular</a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-xs ss:text-sm md:text-base mb-2">Users</li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">Contact us</a>
          </li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">Question-Answer</a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-xs ss:text-sm md:text-base mb-2">For Entrepreneurs</li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">Sell on Surprise</a>
          </li>
          <li className="text-xs md:text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">Entrance for Sellers </a>
          </li>
        </ul>
        <ul className="hidden lg:inline-block mx-auto ss:mx-0">
        <li className="font-semibold text-xs ss:text-sm md:text-base mb-2">For Entrepreneurs</li>
          <li className="flex gap-2 items-center flex-wrap">
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/9/96/YouTube_social_red_squircle_%282017%29.svg" alt="" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
                <img className="w-5 lg:w-6" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Telegram_2019_Logo_%28old_gradient_version%29.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLink;
