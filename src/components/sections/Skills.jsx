import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";

const Skills = () => {
  const { t, language } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getProjectsForSkill = (skillName) => {
    return projects.filter((project) =>
      project.technologies[language].some((tech) =>
        tech.toLowerCase().includes(skillName.toLowerCase())
      )
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            {t("skills.subtitle")}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("skills.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Skills Tags with Logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill.name)}
              className={`flex items-center space-x-2 rounded-lg px-4 py-2 border transition-colors ${
                selectedSkill === skill.name
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500"
              }`}
            >
              <img
                src={skill.srcLogo}
                alt={skill.name}
                className="w-5 h-5 object-contain"
              />
              <span className="text-gray-900 dark:text-white text-sm">
                {skill.name}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Panel */}
        {selectedSkill && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            {/* Panel Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <img
                    src={skills.find((s) => s.name === selectedSkill)?.srcLogo}
                    alt={selectedSkill}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedSkill}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Projects Count */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                {t("project.using")} {selectedSkill} (
                {getProjectsForSkill(selectedSkill).length}{" "}
                {t("project.projects")})
              </p>
            </div>

            {/* Projects List */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {getProjectsForSkill(selectedSkill).length > 0 ? (
                getProjectsForSkill(selectedSkill).map((project) => (
                  <div key={project.id} className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {project.name[language]}
                      </h4>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            className="text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies[language].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description[language]}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    {t("noProjectsForSkill")}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
