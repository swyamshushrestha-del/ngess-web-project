import { useLanguage } from "./languageContext";
import { en } from "../translations/en";
import { np } from "../translations/np";

export const useTranslation = () => {
  const { lang } = useLanguage();
  return lang === "np" ? np : en;
};
