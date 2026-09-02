"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.volunteer": "Volunteer",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.available": "Available for opportunities",
    "hero.role": "Network Engineer · IT Support",
    "hero.title": "Building resilient systems & supporting communities.",
    "hero.description": "I am a highly motivated Network Engineering graduate with a strong background in IT support, systems administration, and web management. Passionate about solving complex problems and currently aiming for a Master's in Communications Engineering.",
    "hero.email": "Email Me",
    "hero.cv": "Download CV",
    "hero.location": "Thailand",
    "hero.roles": "Open to entry & mid-level roles",
    "hero.degree": "B.Eng in Info Systems & Network Engineering",
    "exp.title": "Work Experience",
    "exp.1.title": "Office Assistant",
    "exp.1.org": "Chiang Mai University International Student Office",
    "exp.1.date": "08/2022 - 05/2023",
    "exp.1.b1": "Entered data into spreadsheets and databases to maintain accurate student records.",
    "exp.1.b2": "Prepared meeting materials and took notes during staff meetings.",
    "exp.1.b3": "Led university tours for visitors and delivered critical documents.",
    "exp.2.title": "IT Support",
    "exp.2.org": "Kachin National Organization",
    "exp.2.date": "06/2021 - 05/2022",
    "exp.2.b1": "Installed and set up computer hardware, software, networks, printers, and systems.",
    "exp.2.b2": "Conducted routine checks on software licenses and antivirus systems.",
    "exp.2.b3": "Recorded and tracked computer issue status and assisted with access management.",
    "exp.3.title": "Webmaster",
    "exp.3.org": "The Kachin Relief Fund",
    "exp.3.date": "2020 - 2021",
    "exp.3.b1": "Implemented SEO best practices and tracked website performance metrics.",
    "exp.3.b2": "Updated website content and ensured security through plugin management and backups.",
    "vol.title": "Volunteer Experience",
    "vol.1.title": "Data Entry",
    "vol.1.org": "Community Managed Targeting (CMT)",
    "vol.1.date": "2025",
    "vol.1.b1": "Verified and cross-checked data entries against source documents to ensure accuracy.",
    "vol.1.b2": "Generated regular monthly reports and summaries from data to support decision-making.",
    "vol.2.title": "Translator",
    "vol.2.org": "Free Burma Rangers",
    "vol.2.date": "2018",
    "vol.2.b1": "Translated sensitive frontline news from Myanmar and Kachin languages into English.",
    "vol.2.b2": "Coordinated with team members to ensure consistency and quality.",
    "vol.3.title": "Community Volunteer",
    "vol.3.org": "Community Cleanup Initiatives",
    "vol.3.date": "2024 - 2025",
    "vol.3.b1": "Repaired local infrastructure and assisted elderly and disabled neighbors.",
    "vol.3.b2": "Led sanitation efforts including waste removal and clearing waterways.",
    "quotes.title": "Quotable",
    "quotes.subtitle": "What Others Are Saying",
    "quotes.1.text": "A hardworking, industrious student with a strong character. He is highly motivated and proves himself through exceptional academic performance. He will become a cherished member of any society.",
    "quotes.1.author": "Bishop John La Sam",
    "quotes.1.role": "Bishop of Myitkyina, Myanmar",
    "quotes.2.text": "A keen student who applied himself with great determination. His academic achievements demonstrate immense capability and persistence. Highly motivated and deeply committed to his community.",
    "quotes.2.author": "Maya Cranitch AM",
    "quotes.2.role": "Lecturer & Program Manager, ACU",
    "quotes.3.text": "A pleasant, practical professional ideally suited for a career in network engineering. He will make a highly effective contribution to his community in Myanmar.",
    "quotes.3.author": "Rosaleen Smyth",
    "quotes.3.role": "Honorary Fellow, ACU",
    "proj.title": "Projects",
    "proj.1.badge": "Senior Project",
    "proj.1.desc": "A comprehensive tool for conducting indoor WiFi surveys, analyzing signal strength, and visualizing coverage. Built for my Bachelor of Engineering senior project.",
    "proj.1.link": "View on GitHub →",
    "proj.2.desc": "A zero-hallucination, fully local AI-powered lab generator for Cisco Modeling Labs (CML). Automatically generates 26 unique hands-on labs covering all CCNA 200-301 exam objectives using local LLMs.",
    "edu.title": "Education",
    "edu.desc": "Click on a course to view the full curriculum.",
    "edu.curr": "Curriculum:",
    "edu.1.title": "Bachelor of Engineering",
    "edu.1.org": "Chiang Mai University",
    "edu.1.date": "2023",
    "edu.2.title": "Certificate in English and Computer Course",
    "edu.2.org": "Anglican Language & Computer Centre",
    "edu.2.date": "2015",
    "edu.3.title": "GED High School Equivalency",
    "edu.3.org": "Washington DC",
    "edu.3.date": "2019",
    "edu.4.title": "Diploma in Liberal Studies",
    "edu.4.org": "Australian Catholic University",
    "edu.4.date": "2017",
    "gallery.title": "My Journey",
    "gallery.subtitle": "Milestones & Achievements",
  },
  de: {
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.volunteer": "Ehrenamt",
    "nav.projects": "Projekte",
    "nav.education": "Ausbildung",
    "nav.contact": "Kontakt",
    "hero.available": "Verfügbar für neue Möglichkeiten",
    "hero.role": "Netzwerkingenieur · IT-Support",
    "hero.title": "Aufbau widerstandsfähiger Systeme & Unterstützung von Gemeinschaften.",
    "hero.description": "Ich bin ein hoch motivierter Absolvent der Netzwerktechnik mit starkem Hintergrund in IT-Support, Systemadministration und Webmanagement. Leidenschaftlich darin, komplexe Probleme zu lösen und strebe derzeit einen Master in Kommunikationstechnik an.",
    "hero.email": "Mich kontaktieren",
    "hero.cv": "Lebenslauf herunterladen",
    "hero.location": "Thailand",
    "hero.roles": "Offen für Einstiegs- und Junior-Rollen",
    "hero.degree": "B.Eng in Informationssystemen & Netzwerktechnik",
    "exp.title": "Berufserfahrung",
    "exp.1.title": "Büroassistent",
    "exp.1.org": "Chiang Mai University Büro für internationale Studierende",
    "exp.1.date": "08/2022 - 05/2023",
    "exp.1.b1": "Dateneingabe in Tabellenkalkulationen und Datenbanken zur Pflege korrekter Studierendenakten.",
    "exp.1.b2": "Besprechungsunterlagen vorbereitet und während der Mitarbeiterbesprechungen Protokoll geführt.",
    "exp.1.b3": "Universitätsführungen für Besucher geleitet und wichtige Dokumente ausgeliefert.",
    "exp.2.title": "IT-Support",
    "exp.2.org": "Kachin National Organization",
    "exp.2.date": "06/2021 - 05/2022",
    "exp.2.b1": "Computer-Hardware, Software, Netzwerke, Drucker und Systeme installiert und eingerichtet.",
    "exp.2.b2": "Routinemäßige Überprüfungen von Softwarelizenzen und Antivirensystemen durchgeführt.",
    "exp.2.b3": "Den Status von Computerproblemen erfasst und bei der Zugriffsverwaltung geholfen.",
    "exp.3.title": "Webmaster",
    "exp.3.org": "The Kachin Relief Fund",
    "exp.3.date": "2020 - 2021",
    "exp.3.b1": "SEO Best Practices implementiert und Leistungsmetriken der Website verfolgt.",
    "exp.3.b2": "Website-Inhalte aktualisiert und die Sicherheit durch Plugin-Management und Backups gewährleistet.",
    "vol.title": "Ehrenamtliche Erfahrung",
    "vol.1.title": "Dateneingabe",
    "vol.1.org": "Community Managed Targeting (CMT)",
    "vol.1.date": "2025",
    "vol.1.b1": "Dateneingaben gegen Quelldokumente überprüft und abgeglichen, um die Genauigkeit sicherzustellen.",
    "vol.1.b2": "Regelmäßige monatliche Berichte und Zusammenfassungen aus Daten generiert, um die Entscheidungsfindung zu unterstützen.",
    "vol.2.title": "Übersetzer",
    "vol.2.org": "Free Burma Rangers",
    "vol.2.date": "2018",
    "vol.2.b1": "Sensible Nachrichten von der Front aus Myanmar- und Kachin-Sprachen ins Englische übersetzt.",
    "vol.2.b2": "Mit Teammitgliedern koordiniert, um Konsistenz und Qualität sicherzustellen.",
    "vol.3.title": "Gemeinschafts-Freiwilliger",
    "vol.3.org": "Gemeinschaftliche Aufräuminitiativen",
    "vol.3.date": "2024 - 2025",
    "vol.3.b1": "Lokale Infrastruktur repariert und älteren sowie behinderten Nachbarn geholfen.",
    "vol.3.b2": "Sanitärmaßnahmen geleitet, einschließlich Müllbeseitigung und Säuberung von Wasserwegen.",
    "quotes.title": "Zitate",
    "quotes.subtitle": "Was andere sagen",
    "quotes.1.text": "Ein hart arbeitender, fleißiger Student mit starkem Charakter. Er ist hochmotiviert und beweist sich durch außergewöhnliche akademische Leistungen. Er wird ein geschätztes Mitglied jeder Gesellschaft werden.",
    "quotes.1.author": "Bishop John La Sam",
    "quotes.1.role": "Bischof von Myitkyina, Myanmar",
    "quotes.2.text": "Ein eifriger Student, der sich mit großer Entschlossenheit einsetzte. Seine akademischen Leistungen zeugen von immenser Fähigkeit und Beharrlichkeit. Hochmotiviert und seiner Gemeinde tief verbunden.",
    "quotes.2.author": "Maya Cranitch AM",
    "quotes.2.role": "Dozentin & Programm-Managerin, ACU",
    "quotes.3.text": "Ein angenehmer, praktischer Profi, der ideal für die Netzwerktechnik geeignet ist. Er wird einen sehr effektiven Beitrag für seine Gemeinde in Myanmar leisten.",
    "quotes.3.author": "Rosaleen Smyth",
    "quotes.3.role": "Ehrenmitglied, ACU",
    "proj.title": "Projekte",
    "proj.1.badge": "Abschlussprojekt",
    "proj.1.desc": "Ein umfassendes Tool zur Durchführung von Indoor-WLAN-Umfragen, Analyse der Signalstärke und Visualisierung der Abdeckung. Erstellt für mein Bachelor-Abschlussprojekt.",
    "proj.1.link": "Auf GitHub ansehen →",
    "proj.2.desc": "Ein halluzinationsfreier, vollständig lokaler KI-gesteuerter Lab-Generator für Cisco Modeling Labs (CML). Generiert automatisch 26 einzigartige praxisnahe Labs, die alle Prüfungsziele von CCNA 200-301 unter Verwendung lokaler LLMs abdecken.",
    "edu.title": "Ausbildung",
    "edu.desc": "Klicken Sie auf einen Kurs, um den vollständigen Lehrplan anzuzeigen.",
    "edu.curr": "Lehrplan:",
    "edu.1.title": "Bachelor of Engineering",
    "edu.1.org": "Chiang Mai University",
    "edu.1.date": "2023",
    "edu.2.title": "Zertifikat in Englisch und Computerkurs",
    "edu.2.org": "Anglican Language & Computer Centre",
    "edu.2.date": "2015",
    "edu.3.title": "GED High School Gleichwertigkeit",
    "edu.3.org": "Washington DC",
    "edu.3.date": "2019",
    "edu.4.title": "Diplom in Freien Studien",
    "edu.4.org": "Australian Catholic University",
    "edu.4.date": "2017",
    "gallery.title": "Meine Reise",
    "gallery.subtitle": "Meilensteine & Erfolge"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
