import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";
import { ThemeToggle } from "./components/ThemeToggle";
import { MobileNavigationMenu } from "./components/MobileNavigationMenu";
import { Copyright } from "lucide-react";

export default function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <MobileNavigationMenu />

      <div className="relative z-10">
        <HeroSection />
        <div
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <AboutSection />
        </div>
        <div
          id="experience"
          className="min-h-screen flex items-center justify-center"
        >
          <ExperienceSection />
        </div>
        <div
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <SkillsSection />
        </div>
        <div
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <ProjectsSection />
        </div>
        <div
          id="achievements"
          className="min-h-screen flex items-center justify-center"
        >
          <AchievementsSection />
        </div>
        <div
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <ContactSection />
        </div>

        <footer className="border-t border-border py-6 sm:py-8 lg:py-12 bg-card/50 backdrop-blur-sm">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-1.5">
                  <Copyright className="h-4 w-4" aria-hidden />
                  <span>{currentYear} Pranav Parge. Built with</span>
                  <span className="text-primary font-medium">
                    {" "}
                    React, TypeScript, Tailwind CSS & Motion
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Portfolio • Software Engineer • Clean Code • Modern Web
                  Standards
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="whitespace-nowrap">
                    Available for opportunities
                  </span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
