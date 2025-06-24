import type { i18n as I18nType } from "i18next";

export const ChangeLanguage = (
  i18n: I18nType,
  language: string,
  setIsPopup: (isPopup: boolean) => void
) => {
  i18n.changeLanguage(language);
  setIsPopup(false);
};
