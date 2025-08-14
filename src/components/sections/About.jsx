import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {t("about.title")}
              </h2>
              <p className="text-center text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                {t("about.subtitle")}
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.description")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.other_description")}
            </p>

            {/* Personal Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{t("about.fullname")}:</strong> {t("about.name")}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{t("about.location")}:</strong> {t("about.address")}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{t("about.email")}:</strong>{" "}
                  anhnguyengvan280105@gmail.com
                </span>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() =>
                  window.open("/assets/documents/resume.pdf", "_blank")
                }
              >
                {t("about.downloadResume")}
              </Button>
            </div>
          </div>

          {/* Right side - Avatar Image */}
          <div className="lg:order-last border">
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 w-[584px] max-w-full mx-auto h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/assets/images/avatar.jpg"
                  alt="Profile Avatar"
                  className="w-full h-full object-cover object-top border"
                  style={{
                    minWidth: "584px",
                    minHeight: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
