import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

export default function Homepage() {
  const { t, i18n } = useTranslation("homepage");
  const currentLanguage = i18n.language;

  return (
    <div className="w-full max-w-[1920px] h-[90svh] mx-auto flex flex-col justify-start items-center">
      <h1 className="font-extrabold text-4xl">{t("header")}</h1>
      <h2 className="font-bold text-2xl">Homepage</h2>

      <p className="font-medium text-xl">Current Language: {currentLanguage}</p>
    </div>
  );
}
