import { useTranslation } from "react-i18next";
import { styles } from "../../util/style";

function FooterLink() {
  const {t} = useTranslation();

  return (
    <div className="border-t-[1.5px] py-2 border-gray-300">
      <div className={`${styles.container} px-8 xs:px-16 flex justify-between items-start flex-wrap gap-3`}>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">{t("about")}</li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/about">{t("aboutus")}</a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">{t("vakansiya")}</a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">{t("category")}</li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/category">{t("shop")}</a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/category">{t("featured")}</a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="/category">{t("popular")}</a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">{t("users")}</li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">{t("contactus")}</a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">{t("question")}</a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">{t("entrepreneurs")}</li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">{t("sell")}</a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">{t("sellers")}</a>
          </li>
        </ul>
        <ul className="hidden lg:inline-block mx-auto ss:mx-0">
        <li className="font-semibold text-sm md:text-base mb-2">{t("socialmedia")}</li>
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
