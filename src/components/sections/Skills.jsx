import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { skills } from "../../data/skills";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {t("skills.title")}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {t("skills.subtitle")}
              </p>
            </div>
          </div>

          {/* Right side - Skills grid */}
          <div className="lg:order-last">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={skill.srcLogo}
                        alt={`${skill.name} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300 hidden">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
