import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const InitI18n = (i18nList: I18n[]) => {
  const resource: Record<string, Record<string, object>> = {};
  for (const i in i18nList) {
    if (i18nList[i].namespace !== "") {
      for (const key in i18nList[i].locate) {
        // eslint-disable-next-line
        if (!resource.hasOwnProperty(key)) {
          resource[key] = {};
        }
        resource[key] = {
          ...resource[key],
          [i18nList[i].namespace]: i18nList[i].locate[key],
        };
      }
    }
  }

  // console.log("Init I18N");

  i18next.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: resource,
  });
};
