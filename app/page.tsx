"use client";

import { Mail, MapPin, Download, Briefcase, GraduationCap, ImageIcon } from "lucide-react";
import { EducationSection } from "./EducationSection";
import { useLanguage } from "./LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="grid gap-10 lg:grid-cols-[1fr_0.8fr] items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-base font-semibold text-primary">
            <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
            {t("hero.available")}
          </div>
          <div className="space-y-5">
            <p className="text-base uppercase tracking-widest text-gray-800 dark:text-gray-300 font-bold">{t("hero.role")}</p>
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl text-black dark:text-white">{t("hero.title")}</h2>
            <p className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed max-w-xl font-medium">
              {t("hero.description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-6">
            <a href="mailto:mathewzaudu@gmail.com" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-base font-bold transition-transform hover:scale-105 shadow-lg">
              <Mail className="mr-3 h-5 w-5" />
              {t("hero.email")}
            </a>
          </div>
        </div>
        <div className="p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md flex flex-col gap-6">
          <div className="flex items-center gap-4 text-black dark:text-white font-semibold text-lg">
            <MapPin className="h-6 w-6 text-primary" />
            <span>{t("hero.location")}</span>
          </div>
          <div className="flex items-center gap-4 text-black dark:text-white font-semibold text-lg">
            <Briefcase className="h-6 w-6 text-primary" />
            <span>{t("hero.roles")}</span>
          </div>
          <div className="flex items-center gap-4 text-black dark:text-white font-semibold text-lg">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span>{t("hero.degree")}</span>
          </div>
        </div>
      </section>

      
      {/* Education Section */}
      <EducationSection />


      {/* Experience Section */}
      <section id="experience" className="space-y-10 pt-10 border-t-2 border-gray-200 dark:border-gray-800">
        <h3 className="text-3xl font-bold text-black dark:text-white">{t("exp.title")}</h3>
        <div className="space-y-10">
          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-white dark:ring-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-black dark:text-white">{t("exp.1.title")}</h4>
              <span className="text-base text-gray-800 dark:text-gray-300 font-bold">{t("exp.1.date")}</span>
            </div>
            <p className="text-primary text-lg mb-5 font-bold">{t("exp.1.org")}</p>
            <ul className="list-disc list-outside ml-5 text-gray-900 dark:text-gray-200 space-y-3 text-base leading-relaxed font-medium">
              <li>{t("exp.1.b1")}</li>
              <li>{t("exp.1.b2")}</li>
              <li>{t("exp.1.b3")}</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-600 ring-4 ring-white dark:ring-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-black dark:text-white">{t("exp.2.title")}</h4>
              <span className="text-base text-gray-800 dark:text-gray-300 font-bold">{t("exp.2.date")}</span>
            </div>
            <p className="text-primary text-lg mb-5 font-bold">{t("exp.2.org")}</p>
            <ul className="list-disc list-outside ml-5 text-gray-900 dark:text-gray-200 space-y-3 text-base leading-relaxed font-medium">
              <li>{t("exp.2.b1")}</li>
              <li>{t("exp.2.b2")}</li>
              <li>{t("exp.2.b3")}</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-600 ring-4 ring-white dark:ring-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-black dark:text-white">{t("exp.3.title")}</h4>
              <span className="text-base text-gray-800 dark:text-gray-300 font-bold">{t("exp.3.date")}</span>
            </div>
            <p className="text-primary text-lg mb-5 font-bold">{t("exp.3.org")}</p>
            <ul className="list-disc list-outside ml-5 text-gray-900 dark:text-gray-200 space-y-3 text-base leading-relaxed font-medium">
              <li>{t("exp.3.b1")}</li>
              <li>{t("exp.3.b2")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-10 pt-10 border-t-2 border-gray-200 dark:border-gray-800">
        <h3 className="text-3xl font-bold text-black dark:text-white">{t("proj.title")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md flex flex-col justify-between">
            <h4 className="text-2xl font-bold mb-4">
              <a href="https://github.com/LahpaiZauDu/Indoor-Wifi-Survey-Tool" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex flex-wrap items-center gap-3">
                Indoor WiFi Survey Tool
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">{t("proj.1.badge")}</span>
              </a>
            </h4>
            <p className="text-base text-gray-900 dark:text-gray-200 mb-6 leading-relaxed font-medium">{t("proj.1.desc")}</p>
            <div className="flex gap-4">
              <a href="https://github.com/LahpaiZauDu/Indoor-Wifi-Survey-Tool" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-primary hover:underline">
                {t("proj.1.link")}
              </a>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md flex flex-col justify-between">
            <h4 className="text-2xl font-bold mb-4">
              <a href="https://github.com/LahpaiZauDu/ccna-lab-builder" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex flex-wrap items-center gap-3">
                CCNA v2.0 Lab Builder
                <span className="text-sm px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full border border-blue-500/20">Python</span>
                <span className="text-sm px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full border border-green-500/20">Ollama AI</span>
              </a>
            </h4>
            <p className="text-base text-gray-900 dark:text-gray-200 mb-6 leading-relaxed font-medium">{t("proj.2.desc")}</p>
            <div className="flex gap-4">
              <a href="https://github.com/LahpaiZauDu/ccna-lab-builder" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-primary hover:underline">
                {t("proj.1.link")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="space-y-10 pt-10 border-t-2 border-gray-200 dark:border-gray-800">
        <h3 className="text-3xl font-bold text-black dark:text-white">{t("vol.title")}</h3>
        <div className="space-y-10">
          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-white dark:ring-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-black dark:text-white">{t("vol.1.title")}</h4>
              <span className="text-base text-gray-800 dark:text-gray-300 font-bold">{t("vol.1.date")}</span>
            </div>
            <p className="text-primary text-lg mb-5 font-bold">{t("vol.1.org")}</p>
            <ul className="list-disc list-outside ml-5 text-gray-900 dark:text-gray-200 space-y-3 text-base leading-relaxed font-medium">
              <li>{t("vol.1.b1")}</li>
              <li>{t("vol.1.b2")}</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-600 ring-4 ring-white dark:ring-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-black dark:text-white">{t("vol.2.title")}</h4>
              <span className="text-base text-gray-800 dark:text-gray-300 font-bold">{t("vol.2.date")}</span>
            </div>
            <p className="text-primary text-lg mb-5 font-bold">{t("vol.2.org")}</p>
            <ul className="list-disc list-outside ml-5 text-gray-900 dark:text-gray-200 space-y-3 text-base leading-relaxed font-medium">
              <li>{t("vol.2.b1")}</li>
              <li>{t("vol.2.b2")}</li>
            </ul>
          </div>
          
          <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-600 ring-4 ring-white dark:ring-background"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-black dark:text-white">{t("vol.3.title")}</h4>
              <span className="text-base text-gray-800 dark:text-gray-300 font-bold">{t("vol.3.date")}</span>
            </div>
            <p className="text-primary text-lg mb-5 font-bold">{t("vol.3.org")}</p>
            <ul className="list-disc list-outside ml-5 text-gray-900 dark:text-gray-200 space-y-3 text-base leading-relaxed font-medium">
              <li>{t("vol.3.b1")}</li>
              <li>{t("vol.3.b2")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="space-y-10 pt-10 border-t-2 border-gray-200 dark:border-gray-800">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-black dark:text-white">{t("gallery.title")}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">{t("gallery.subtitle")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* CMU Graduation Photo */}
          <div className="w-full h-80 rounded-3xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative group shadow-md">
            <img 
              src="/cmu-graduation.jpg" 
              alt="CMU Graduation Photo" 
              className="w-full h-full object-cover object-center scale-125 origin-[50%_55%] group-hover:scale-[1.35] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-bold text-lg">CMU Graduation</span>
              <span className="text-white/80 text-sm font-medium mt-1">2023</span>
            </div>
          </div>

          {/* ACU Graduation Photo */}
          <div className="w-full h-80 rounded-3xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative group shadow-md">
            <img 
              src="/acu-graduation.jpg" 
              alt="ACU Graduation Photo" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-bold text-lg">ACU Graduation</span>
              <span className="text-white/80 text-sm font-medium mt-1">2017</span>
            </div>
          </div>

          {/* ALCC Graduation Photo */}
          <div className="w-full h-80 rounded-3xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative group shadow-md">
            <img 
              src="/alcc-graduation.jpg" 
              alt="ALCC Graduation Photo" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-bold text-lg">ALCC Graduation</span>
              <span className="text-white/80 text-sm font-medium mt-1">2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="space-y-10 pt-10 pb-20 border-t-2 border-gray-200 dark:border-gray-800">
        <h3 className="text-3xl font-bold text-black dark:text-white mb-10">{t("quotes.subtitle")}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm flex flex-col justify-between">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                {t(`quotes.${num}.text`)}
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-base font-bold text-black dark:text-white">{t(`quotes.${num}.author`)}</span>
                <span className="text-sm font-bold text-primary">{t(`quotes.${num}.role`)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
