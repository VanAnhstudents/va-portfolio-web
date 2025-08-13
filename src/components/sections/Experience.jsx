import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { experiences } from "../../data/experience";

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("experience.title")}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-px w-0.5 bg-blue-500 h-full"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors">
                    {/* Phase badge */}
                    {exp.phase_1 || exp.phase_0 || exp.other_phase ? (
                      <div
                        className={`inline-block px-3 py-1 bg-purple-600 rounded-full text-sm font-medium text-white mb-4 ${
                          index % 2 === 0 ? "ml-auto block" : ""
                        }`}
                      >
                        {String(experiences.length - index).padStart(2, "0")}:{" "}
                        {exp.phase_1
                          ? exp.phase_1[language]
                          : exp.phase_0
                          ? exp.phase_0[language]
                          : exp.other_phase[language]}
                      </div>
                    ) : null}

                    {/* Job title */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {typeof exp.title === "object"
                        ? exp.title[language]
                        : exp.title}
                    </h3>

                    {/* Period and location */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {typeof exp.period === "object"
                        ? exp.period[language]
                        : exp.period}{" "}
                      |{" "}
                      {typeof exp.location === "object"
                        ? exp.location[language]
                        : exp.location}
                    </p>

                    {/* Quote */}
                    {exp.quote_0 || exp.quote_1 || exp.other_quote ? (
                      <p className="text-purple-600 dark:text-purple-300 italic mb-4 text-sm">
                        "
                        {exp.quote_0
                          ? exp.quote_0[language]
                          : exp.quote_1
                          ? exp.quote_1[language]
                          : exp.other_quote[language]}
                        "
                      </p>
                    ) : null}

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {typeof exp.description === "object"
                        ? exp.description[language]
                        : exp.description}
                    </p>

                    {/* Skills tags */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "justify-end" : ""
                      }`}
                    >
                      {experiences.length - index === 1 && (
                        <>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            HTML
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            CSS
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            JavaScript
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            React
                          </span>
                        </>
                      )}
                      {experiences.length - index === 2 && (
                        <>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            NodeJS
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            GraphQL
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            Prisma
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            Redis
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            Docker
                          </span>
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
                            Microservices
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
