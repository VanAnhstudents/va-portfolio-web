// LanguageContext.jsx
import React, { createContext, useContext, useState } from "react";
import vi from "../locales/viContext.json";
import en from "../locales/enContext.json";

export const LanguageContext = createContext();

const translations = {
  en,
  vi,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];

    try {
      for (const k of keys) {
        result = result?.[k];
      }
      return result || key;
    } catch (error) {
      console.error(`Translation key error: ${key}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
