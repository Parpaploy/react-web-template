import { useTranslation } from "react-i18next";

export default function Homepage() {
  const { t, i18n } = useTranslation("homepage");
  const currentLanguage = i18n.language;

  return (
    <div>
      <h1>{t("header")}</h1>
      <p>Homepage</p>

      <p>Current Language: {currentLanguage}</p>
    </div>
  );
}
