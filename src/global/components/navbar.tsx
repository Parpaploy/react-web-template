import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getFlagClass } from "../functions/language-function";
import LanguageDropdown from "./languge-dropdown";

export default function Navbar() {
  const { i18n } = useTranslation();

  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

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
        {isPopup && <LanguageDropdown setIsPopup={setIsPopup} />}
      </div>

      <Outlet />
    </>
  );
}
