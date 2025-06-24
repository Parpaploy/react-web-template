import { Outlet } from "react-router-dom";
import LanguagePopup from "./languge-popup";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();

  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  function getFlagClass(language: string) {
    switch (language) {
      case "en":
        return "fi fi-gb";
      case "th":
        return "fi fi-th";
      default:
        return "fi fi-gb";
    }
  }

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <>
      <div className="w-full min-h-[10svh] bg-slate-300 flex justify-between items-center relative p-5">
        <div></div>

        <button
          className={`!w-10 !h-10 ${getFlagClass(language)} fis rounded-full`}
          onClick={() => {
            setIsPopup(!isPopup);
          }}
        />
        {isPopup && <LanguagePopup setIsPopup={setIsPopup} />}
      </div>

      <Outlet />
    </>
  );
}
