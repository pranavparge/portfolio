import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Code2 } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 mt-4"
    >
      <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg max-w-[90vw] overflow-x-auto">
        <div className="flex items-center min-w-fit">
          {/* Frontend Developer Indicator */}
          <div className="flex items-center gap-1 sm:gap-2 pr-2 sm:pr-4 mr-2 sm:mr-4 border-r border-border">
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="text-xs text-primary font-medium hidden sm:inline whitespace-nowrap">
              Frontend Dev
            </span>
          </div>

          <ul className="flex items-center space-x-3 sm:space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 sm:px-3 py-2 text-xs sm:text-sm transition-all duration-200 hover:text-primary whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
