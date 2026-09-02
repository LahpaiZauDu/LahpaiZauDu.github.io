"use client";

import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-1">Portfolio</p>
          <h1 className="text-base font-bold text-black dark:text-white">Lahpai Zau Du</h1>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8 text-base font-bold text-gray-700 dark:text-gray-300">
            <a href="#about" className="hover:text-primary dark:hover:text-primary transition-colors">{t("nav.about")}</a>
            <a href="#experience" className="hover:text-primary dark:hover:text-primary transition-colors">{t("nav.experience")}</a>
            <a href="#volunteer" className="hover:text-primary dark:hover:text-primary transition-colors">{t("nav.volunteer")}</a>
            <a href="#projects" className="hover:text-primary dark:hover:text-primary transition-colors">{t("nav.projects")}</a>
            <a href="#education" className="hover:text-primary dark:hover:text-primary transition-colors">{t("nav.education")}</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="px-4 py-2 text-sm font-bold border-2 border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
            >
              {language === "en" ? "DE" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
