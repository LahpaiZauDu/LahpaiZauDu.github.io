"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const getEducationData = (t: (key: string) => string) => [
  {
    title: t("edu.1.title"),
    institution: t("edu.1.org"),
    date: t("edu.1.date"),
    courses: [
      "Fundamental English 1 & 2",
      "Critical Reading and Effective Writing",
      "English in Science and Technology Context",
      "Information Literacy and Information Presentation",
      "Reasoning",
      "Psychology and Daily Life",
      "Introduction to Entrepreneurship and Business",
      "Environmental Science in Today's World",
      "Modern Life and Animation",
      "Software for Everyday Life",
      "Learning through Activities 1, 2, and 4",
      "Calculus for Engineering 1 & 2",
      "Quantitative Analysis in Industrial Engineering",
      "Introduction to ISNE",
      "Programming for ISNE",
      "Physics for Engineering and Agro-Industry Students 1",
      "Fundamentals of Electronic Circuits",
      "Engineering Drawing",
      "Information Systems",
      "ISNE Laboratory 1 & 2",
      "Project Management for ISNE",
      "Information Technology Service Management",
      "Web Programming Language",
      "Data Centric Application Development",
      "Platform Programming",
      "Advanced ISNE Technology",
      "Wireless and Broadband Computer Networks",
      "Project Survey",
      "Project",
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Basic Computer Programming for ISNE",
      "Algorithms for ISNE",
      "Computer Architecture for ISNE",
      "Computer Networks & Laboratory",
      "Fundamentals of Database Systems & Laboratory",
      "Network Programming",
      "Computer Network Design and Management",
      "Network and Information Security",
      "Fundamentals of Data and Computer Communications for ISNE",
      "Operating Systems",
      "Selected Topics in Network Engineering 1",
      "Computer Network Traffic Analysis",
      "Introduction to Human-Computer Interaction",
      "Fundamentals of Multiprotocol Label Switching"
    ]
  },
  {
    title: t("edu.3.title"),
    institution: t("edu.3.org"),
    date: t("edu.3.date"),
    courses: [
      "Science",
      "Mathematical Reasoning",
      "Reasoning Through Language Arts",
      "Social Studies"
    ]
  },
  {
    title: t("edu.4.title"),
    institution: t("edu.4.org"),
    date: t("edu.4.date"),
    courses: [
      "English Language Communication Skills",
      "Foundations of Management",
      "Introduction to International Development Studies",
      "The Developing Young Person",
      "Global Health",
      "Global Change and Development",
      "Introduction to Human Rights"
    ]
  },
  {
    title: t("edu.2.title"),
    institution: t("edu.2.org"),
    date: t("edu.2.date"),
    courses: [
      "Vocabulary in Use",
      "Introduction to Academic Writing",
      "Grammar in Use",
      "Reading Skill",
      "Dictation",
      "Computer",
      "Introduction to Social Studies: Environmental Issues",
      "System of Democracy"
    ]
  }
];

export function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  
  const educationData = getEducationData(t);

  return (
    <section id="education" className="space-y-10 pt-10 border-t-2 border-gray-200 dark:border-gray-800">
      <h3 className="text-3xl font-bold text-black dark:text-white">{t("edu.title")}</h3>
      <p className="text-base font-medium text-gray-800 dark:text-gray-300 -mt-6 mb-6">{t("edu.desc")}</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md cursor-pointer transition-colors hover:border-gray-400 dark:hover:border-gray-600 flex flex-col"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <h4 className="text-xl font-bold text-black dark:text-white">{edu.title}</h4>
              <span className="shrink-0 text-sm font-bold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-700">
                {edu.date}
              </span>
            </div>
            
            <p className="text-lg font-bold text-primary">{edu.institution}</p>
            
            {expandedIndex === index && edu.courses && (
              <div className="mt-6 pt-6 border-t-2 border-gray-200 dark:border-gray-800">
                <h5 className="text-lg font-bold text-black dark:text-white mb-4">{t("edu.curr")}</h5>
                <div className="flex flex-wrap gap-2 max-h-72 overflow-y-auto pr-4">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 rounded-full border border-primary/20">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
