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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x400?text=Project+Image";
                  }}
                />
              </div>

              {/* Project Content - with flex-grow to push buttons to bottom */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Name */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.name[language]}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="mt-auto mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {project.technologies[language][0]}
                  </h4>
                  <div className="space-y-1">
                    {project.technologies[language]
                      .slice(1)
                      .map((tech, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-xs font-medium">• {tech}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Fixed buttons at bottom */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 text-center py-2 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-xs font-medium text-gray-800 dark:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("project.viewCode")}
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-xs font-medium text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("project.liveDemo")}
                    </a>
                  </div>
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
