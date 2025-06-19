import { useTranslation } from "react-i18next";

export default function Template() {
  const { t, i18n } = useTranslation("template");
  const currentLanguage = i18n.language;

  return (
    <div>
      <h1>{t("header")}</h1>

      <p>Current Language: {currentLanguage}</p>
    </div>
  );
}
