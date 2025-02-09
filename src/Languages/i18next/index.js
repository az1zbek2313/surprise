import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzbek from "../language/translationUz";
import english from "../language/translationEn";
import russian from "../language/translationRu";
const language = JSON.parse(localStorage.getItem("lang"));

const resources = {
  en: {
    translation: english,
  },
  uz: {
    translation: uzbek,
  },
  ru: {
    translation: russian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng:language ? language : "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
