import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="w-full min-h-[10svh] bg-slate-300 flex justify-between items-center">
        <button onClick={() => i18n.changeLanguage("en")}>
          Switch to English
        </button>
        <button onClick={() => i18n.changeLanguage("th")}>
          Switch to Thai
        </button>
      </div>

      <Outlet />
    </>
  );
}
