import { useTranslation } from "react-i18next";
import { styles } from "../../util/style";
import { useEffect, useState } from "react";

function FooterLink() {
  const { t } = useTranslation();
  const [categoryGender, setCategoryGender] = useState();
  const [loading, setLoading] = useState();

  function fetchGender() {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${import.meta.env.VITE_DEFAULT_HOST}category`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategoryGender(result)
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    fetchGender()
  }, [])

  return (
    <div className="border-t-[1.5px] py-2 border-gray-300">
      <div
        className={`${styles.container} flex justify-between items-start flex-wrap gap-3`}
      >
        <ul className="hidden lg:inline-block mx-auto ss:mx-0">
          <li className="font-semibold text-sm md:text-base mb-2">
            {t("socialmedia")}
          </li>
          <li className="flex gap-2 items-center flex-wrap">
            <a className="transition-all duration-300 hover:scale-110" href="#">
              <img
                className="w-5 lg:w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt=""
              />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
              <img
                className="w-5 lg:w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt=""
              />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
              <img
                className="w-5 lg:w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/YouTube_social_red_squircle_%282017%29.svg"
                alt=""
              />
            </a>
            <a className="transition-all duration-300 hover:scale-110" href="#">
              <img
                className="w-5 lg:w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Telegram_2019_Logo_%28old_gradient_version%29.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">
            {t("about")}
          </li>
          <li className="text-sm text-gray-500">
            <a
              className="transition-all duration-500 hover:underline"
              href="/about"
            >
              {t("aboutus")}
            </a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">
              {t("vakansiya")}
            </a>
          </li>
          <li className="text-sm text-gray-500">
            <a className="transition-all duration-500 hover:underline" href="#">
            998 99 999 99 99
            </a>
          </li>
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">
            Erkak
          </li>
          {
            categoryGender?.male.map(item => (
              <li key={item} className="text-sm text-gray-500">
            <a
              className="transition-all duration-500 hover:underline"
              href={`category/${item._id}`}
            >
              {item?.name.uz}
            </a>
          </li>
            ))
          }
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">
            Ayol
          </li>
          {
            categoryGender?.female.map(item => (
              <li key={item} className="text-sm text-gray-500">
            <a
              className="transition-all duration-500 hover:underline"
              href={`category/${item._id}`}
            >
              {item?.name.uz}
            </a>
          </li>
            ))
          }
        </ul>
        <ul className="w-[47%] sm:w-auto">
          <li className="font-semibold text-sm md:text-base mb-2">
            Children
          </li>
          {
            categoryGender?.kids.map(item => (
              <li key={item} className="text-sm text-gray-500">
            <a
              className="transition-all duration-500 hover:underline"
              href={`category/${item._id}`}
            >
              {item?.name.uz}
            </a>
          </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default FooterLink;
