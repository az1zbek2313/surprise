import { useTranslation } from "react-i18next";
import { flagLanguage } from "../../util/contants";
import { styles } from "../../util/style";
import { useState } from "react";

function HeaderTop() {
  const languageDefault = JSON.parse(localStorage.getItem("lang"));
  const [language, setLanguage] = useState(false);
  const [flagLang, setflagLang] = useState(
    languageDefault ? languageDefault : "uz"
  );
  const [city, setCity] = useState("Tashkent"); // Default shahar
  const { t, i18n } = useTranslation();
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };

  function handleLanguage(id) {
    changeLang(id);
    localStorage.setItem("lang", JSON.stringify(id));
    setLanguage(false);
    setflagLang(id);
  }

  // Geolocation API orqali joylashuvni aniqlash
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Google Maps API yoki boshqa xizmat orqali shaharni aniqlash
          const url = `https://www.google.com/maps/@${latitude},${longitude},11z?entry=ttu`;
          window.open(url, "_blank");
        },
        (error) => {
          console.error("Joylashuvni aniqlash xatosi:", error);
          alert(t("location_error")); // Foydalanuvchiga xabar berish
        }
      );
    } else {
      alert(t("location_not_supported")); // Geolocation qo'llab-quvvatlanmasa
    }
  };

  return (
    <div className="hidden lg:block bg-[#f0f2f5]">
      <div
        className={`${styles.container} py-[2px] flex items-center justify-between my-0 md:!my-0`}
      >
        <div className="">
          <a
            onClick={handleLocation}
            className="flex items-center gap-2 w-fit cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <p>
              <span className="font-light text-sm opacity-80">{t("city")}:</span>
              &nbsp;
              <span className="underline text-sm">{city}</span>
            </p>
          </a>
        </div>
        <div className="relative right-4 md:right-6">
          <div
            onClick={() => {
              setLanguage(!language);
            }}
          >
            {flagLanguage.map((item) => {
              if (item.id === flagLang) {
                return (
                  <div
                    className="flex items-center w-20 gap-2 cursor-pointer"
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="w-4" />
                    <p className="text-sm">{item.title}</p>
                  </div>
                );
              }
            })}
          </div>

          {/* dropdown language */}
          {language && (
            <ul className="absolute z-[1000] top-6 left-0 list-none">
              {flagLanguage.map((item) => {
                if (item.id !== flagLang) {
                  return (
                    <li
                      key={item.id}
                      onClick={() => {
                        handleLanguage(item.id);
                      }}
                      className="flex items-center gap-2 cursor-pointer w-[104px] bg-gray-100 p-1 hover:bg-gray-200 transition-all duration-200"
                    >
                      <img src={item.image} alt="" className="w-4" />
                      <p className="text-sm">{item.title}</p>
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
