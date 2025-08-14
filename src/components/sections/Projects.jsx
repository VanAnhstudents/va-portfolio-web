import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            {t("project.subtitle")}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("project.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="p-6">
                {/* Project Name */}
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                  {project.name[language]}
                </h3>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {t("project.tech")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies[language].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center py-2 px-4 bg-pink-600 hover:bg-pink-700 rounded-md text-sm font-medium text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("project.liveDemo")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
