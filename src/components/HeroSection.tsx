import { motion } from "motion/react";
import { ChevronDown, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { techStack } from "./TechIcons";

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/5 to-secondary/10 overflow-hidden pt-16 md:pt-0"
    >
      <div className="container px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-primary font-medium">Pranav Parge</span>.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A{" "}
            <span className="text-primary font-medium">Frontend Developer</span>{" "}
            crafting beautiful, interactive web and mobile experiences.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            5+ years experience in crafting pixel-perfect interfaces with
            <span className="text-primary font-medium"> React</span>.
          </motion.p>

          {/* Tech Stack Showcase */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="p-3 sm:p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                  style={{
                    transition:
                      "background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  }}
                  whileHover={{
                    backgroundColor: "var(--primary-foreground)",
                    borderColor: "var(--primary)",
                  }}
                >
                  <tech.icon className="tech-stack-icon w-6 h-6 sm:w-8 sm:h-8 text-foreground group-hover:text-primary" />
                </motion.div>

                {/* Tooltip */}
                <motion.span
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-card/90 backdrop-blur-sm px-2 py-1 rounded border border-border"
                  initial={{ y: -5 }}
                  whileHover={{ y: 0 }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center pt-4 sm:pt-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="gap-2 hover-lift w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Get In Touch</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 p-2 sm:p-3 rounded-full border border-border/50 hover:bg-muted/50 transition-all hover-lift glass"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
        </motion.div>
      </motion.button>
    </section>
  );
}
