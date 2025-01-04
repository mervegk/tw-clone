'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('tr')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (newLang: string) => {
    setLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }


  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}