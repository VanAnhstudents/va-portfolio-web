import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
    >
      {language === "en" ? "VI" : "EN"}
    </button>
  );
};

export default LanguageToggle;
