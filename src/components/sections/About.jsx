import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 dark:bg-gray-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 dark:bg-gray-800 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            {t("about.subtitle")}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="lg:order-first">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/avatar.jpg"
                    alt="Profile Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 text-sm">
                  {t("about.status")}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.description")}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.other_description")}
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="text-gray-900 dark:text-white font-semibold">
                  {t("about.fullname")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("about.name")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="text-gray-900 dark:text-white font-semibold">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  nguyenvananh280105@gmail.com
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="text-gray-900 dark:text-white font-semibold">
                  {t("about.location")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("about.address")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="text-gray-900 dark:text-white font-semibold">
                  GitHub
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  github.com/VanAnhstudents
                </p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() =>
                  window.open("/assets/documents/resume.pdf", "_blank")
                }
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("about.downloadResume")}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
