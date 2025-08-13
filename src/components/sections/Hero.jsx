import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                {t("hero.greeting")}
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  {t("hero.name")}
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                {t("hero.description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                {t("hero.viewProjects")}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                {t("hero.contactMe")}
              </Button>
            </div>
          </div>

          {/* Right side - Video/Image placeholder */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gray-400 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                {/* Play button overlay */}
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
