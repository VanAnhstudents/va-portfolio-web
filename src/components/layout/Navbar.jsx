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
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Vanh Dev
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Controls and Resume button */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="primary"
              className="hidden sm:inline-flex"
              onClick={() =>
                window.open("/assets/documents/resume.pdf", "_blank")
              }
            >
              {t("navigation.resume")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
