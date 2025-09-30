import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Code, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";

export function SkillsSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Vue.js",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Server-side languages and frameworks",
      technologies: [
        "Node.js",
        "Express.js",
        "Java",
        "Spring Boot",
        "Hibernate",
        "Python",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      technologies: ["React Native"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud platforms and development tools",
      technologies: ["Google Cloud", "AWS"],
    },
    {
      icon: Database,
      title: "Databases",
      description: "Relational and NoSQL databases",
      technologies: ["MySQL", "MongoDB"],
    },
    {
      icon: Globe,
      title: "Tools & Platforms",
      description: "Development and collaboration tools",
      technologies: ["Jira", "Confluence", "Git", "Linux"],
    },
  ];

  return (
    <section ref={ref} className="w-full py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            A comprehensive skillset built through 5+ years of professional work
            experience, covering the full spectrum of modern software
            engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow hover-lift"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 sm:gap-0">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary sm:mr-3" />
              <h3 className="text-lg sm:text-xl lg:text-2xl">
                Always Learning
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring
              Django, Flask, and advanced cloud services to stay at the
              forefront of software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
