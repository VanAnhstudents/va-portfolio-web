import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { experiences } from "../../data/experience";

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="experience"
      className="relative py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            {t("experience.subtitle")}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("experience.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "pr-0 md:pr-8" : "pl-0 md:pl-8"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-purple-500">
                    {/* Work mode badge */}
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        exp.workMode.en.includes("Cloud")
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {typeof exp.workMode === "object"
                        ? exp.workMode[language]
                        : exp.workMode}
                      {exp.timezone && ` (${exp.timezone})`}
                    </div>

                    {/* Job title and period */}
                    <div
                      className={`flex flex-col ${
                        index % 2 === 0 ? "items-end" : "items-start"
                      } mb-4`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {typeof exp.title === "object"
                          ? exp.title[language]
                          : exp.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {typeof exp.period === "object"
                          ? exp.period[language]
                          : exp.period}
                        {exp.location && (
                          <>
                            {" | "}
                            {typeof exp.location === "object"
                              ? exp.location[language]
                              : exp.location}
                          </>
                        )}
                      </p>
                    </div>

                    {/* Infrastructure */}
                    {exp.infrastructure && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {typeof exp.infrastructure === "object"
                          ? exp.infrastructure[language]
                          : exp.infrastructure}
                      </p>
                    )}

                    {/* Quote */}
                    {exp.quote && (
                      <blockquote className="text-blue-600 dark:text-purple-400 italic mb-4 text-sm border-l-2 border-blue-400 dark:border-purple-500 pl-4">
                        "
                        {typeof exp.quote === "object"
                          ? exp.quote[language]
                          : exp.quote}
                        "
                      </blockquote>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {typeof exp.description === "object"
                        ? exp.description[language]
                        : exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <ul
                        className={`space-y-2 mb-4 ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {typeof achievement === "object"
                              ? achievement[language]
                              : achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack */}
                    {exp.techStack && (
                      <div className="space-y-2 mt-4">
                        {Object.entries(exp.techStack).map(
                          ([category, techs]) => (
                            <div key={category}>
                              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                {category.toUpperCase()}
                              </h4>
                              <div
                                className={`flex flex-wrap gap-2 ${
                                  index % 2 === 0
                                    ? "justify-end"
                                    : "justify-start"
                                }`}
                              >
                                {techs.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
