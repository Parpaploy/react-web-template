import { ChangeLanguage } from "../functions/language-function";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown({
  setIsPopup,
}: {
  setIsPopup: (isPopup: boolean) => void;
}) {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-[10svh] right-2.5 bg-black w-15 gap-5 flex flex-col justify-center items-center p-3">
      <button
        className={`!w-10 !h-10 fi fi fi-gb fis rounded-full ${
          i18n.language === "en"
            ? "opacity-75 cursor-default"
            : "opacity-100 cursor-pointer"
        }`}
        onClick={() => {
          ChangeLanguage(i18n, "en", setIsPopup);
        }}
      />
      <button
        className={`!w-10 !h-10 fi fi-th fis rounded-full ${
          i18n.language === "th"
            ? "opacity-75 cursor-default"
            : "opacity-100 cursor-pointer"
        }`}
        onClick={() => {
          ChangeLanguage(i18n, "th", setIsPopup);
        }}
      />
    </div>
  );
}
