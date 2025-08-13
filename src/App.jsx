import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="overflow-hidden">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Testimonials />
              <Contact />
              <Toaster
                position="top-center"
                toastOptions={{
                  className: "dark:bg-gray-800 dark:text-white",
                  success: {
                    className: "bg-green-500 text-white dark:bg-green-600",
                  },
                  error: {
                    className: "bg-red-500 text-white dark:bg-red-600",
                  },
                }}
              />
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
