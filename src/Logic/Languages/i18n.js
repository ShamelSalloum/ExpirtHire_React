import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: resources.en,
    de: resources.de,
  },
});

export default i18n;
      {/* <Box bgColor={"white"}>
        <LanguageSwitcher />
        <p>{t("greeting")}</p>
        <p>{t("welcome")}</p>
      </Box> */}