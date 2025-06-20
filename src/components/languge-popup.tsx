import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguagePopup() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div>
      <button
        className="!w-10 !h-10 fi fi fi-gb fis rounded-full"
        onClick={() => {
          setLanguage("en");
        }}
      />
      <button
        className="!w-10 !h-10 fi fi-th fis rounded-full"
        onClick={() => {
          setLanguage("th");
        }}
      />
    </div>
  );
}
