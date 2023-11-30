import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.json";
import LanguageDetector from "i18next-browser-languagedetector";
import frTranslation from "./translations/fr.json";

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .use(LanguageDetector)
  .init({
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: {
      en: enTranslation,
      fr: frTranslation,
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });

export default i18n;
