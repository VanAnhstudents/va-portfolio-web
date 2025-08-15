import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-gray-700 dark:text-gray-300"
      aria-label="Toggle language"
    >
      <span className="text-sm">{language === "vi" ? "🇻🇳" : "🇺🇸"}</span>
      <span className="text-xs font-medium">
        {language === "vi" ? "VI" : "EN"}
      </span>
    </button>
  );
};

export default LanguageToggle;
