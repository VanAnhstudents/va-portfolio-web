import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";
import useScrollSpy from "../../hooks/useScrollSpy";

const Navbar = () => {
  const { t } = useLanguage();
  const activeSection = useScrollSpy([
    "hero",
    "about",
    "skills",
    "experience",
    "contact",
  ]);

  const navItems = [
    { id: "hero", label: t("navigation.home") },
    { id: "about", label: t("navigation.about") },
    { id: "skills", label: t("navigation.skills") },
    { id: "experience", label: t("navigation.experience") },
    { id: "projects", label: t("navigation.projects") },
    { id: "contact", label: t("navigation.contact") },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-blue-50/10 dark:from-blue-900/10 dark:via-transparent dark:to-blue-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo with gradient border */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur-sm opacity-20"></div>
            <h1 className="relative text-2xl font-bold text-gray-900 dark:text-white px-3 py-1 rounded-lg bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-100/50 dark:border-blue-800/50">
              Vanh Dev
            </h1>
          </div>

          {/* Navigation Items with enhanced styling */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 bg-gray-50/50 dark:bg-gray-800/50 rounded-full px-4 py-2 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:scale-105"
                  }`}
                >
                  {/* Active indicator dot */}
                  {activeSection === item.id && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Controls and Resume button with enhanced styling */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800/50 rounded-full px-4 py-2 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              <LanguageToggle />
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <ThemeToggle />
            </div>

            <Button
              variant="primary"
              className="hidden sm:inline-flex relative overflow-hidden group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border border-blue-400/50 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open("/assets/documents/resume.pdf", "_blank")
              }
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              {/* Download icon */}
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {t("navigation.resume")}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
