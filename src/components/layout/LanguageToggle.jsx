import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors font-medium text-sm focus:outline-none"
    >
      {language === "en" ? "VI" : "EN"}
    </button>
  );
};

export default LanguageToggle;
