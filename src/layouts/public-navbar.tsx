import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getFlagClass } from "../global/functions/language-function";
import LanguageDropdown from "../global/components/languge-dropdown";

export default function PublicNavbar() {
  const { i18n } = useTranslation();
  const navigator = useNavigate();

  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto min-h-[10svh] bg-slate-300 flex justify-between items-center relative p-5">
        <div>
          <button
            className="cursor-pointer"
            onClick={() => {
              navigator("");
            }}
          >
            Home
          </button>
        </div>

        <div>
          <button
            className="cursor-pointer"
            onClick={() => {
              navigator("/private");
            }}
          >
            Private
          </button>

          <button
            className={`!w-10 !h-10 ${getFlagClass(
              language
            )} fis rounded-full cursor-pointer`}
            onClick={() => {
              setIsPopup(!isPopup);
            }}
          />
        </div>
        {isPopup && <LanguageDropdown setIsPopup={setIsPopup} />}
      </div>

      <Outlet />
    </>
  );
}
