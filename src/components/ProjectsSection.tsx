import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ExternalLink, Github, Code2, Users, Layers, Code } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectsSection() {
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

  const projects = [
    {
      title: "UBS",
      description:
        "Modern, responsive dashboard built with React, TypeScript, and Recharts. Features real-time data visualization, dark/light theme toggle, and advanced filtering. Showcases component architecture and state management best practices.",
      image: "../../assets/UBS.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "Framer Motion",
      ],
      type: "Frontend Development - Web App",
      icon: Code2,
    },
    {
      title: "HSBC",
      description:
        "Pixel-perfect e-commerce frontend with Next.js and Stripe integration. Features include product search, cart management, checkout flow, and responsive design. Optimized for Core Web Vitals and SEO.",
      image: "../../assets/HSBC.png",
      technologies: [
        "Next.js",
        "React",
        "Stripe API",
        "Tailwind CSS",
        "Vercel",
      ],
      type: "Frontend Development - Web App",
      icon: Code2,
    },
    {
      title: "Philip Morris International",
      description:
        "Reusable React component library with Storybook documentation. Built with TypeScript for type safety and includes accessibility features, theme customization, and comprehensive testing suite.",
      image: "../../assets/pmi.png",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "CSS-in-JS"],
      type: "Frontend Development - Web App",
      icon: Code2,
    },
    {
      title: "Emirates International Telecommunications (du)",
      description:
        "Modern, responsive dashboard built with React, TypeScript, and Recharts. Features real-time data visualization, dark/light theme toggle, and advanced filtering. Showcases component architecture and state management best practices.",
      image: "../../assets/du.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "Framer Motion",
      ],
      type: "Frontend Development - Mobile App",
      icon: Code2,
    },
    {
      title: "KPMG",
      description:
        "Pixel-perfect e-commerce frontend with Next.js and Stripe integration. Features include product search, cart management, checkout flow, and responsive design. Optimized for Core Web Vitals and SEO.",
      image: "../../assets/KPMG.png",
      technologies: [
        "Next.js",
        "React",
        "Stripe API",
        "Tailwind CSS",
        "Vercel",
      ],
      type: "Frontend Development - Web App",
      icon: Code2,
    },
    {
      title: "Maruti Suzuki",
      description:
        "Reusable React component library with Storybook documentation. Built with TypeScript for type safety and includes accessibility features, theme customization, and comprehensive testing suite.",
      image: "../../assets/maruti-suzuki.png",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "CSS-in-JS"],
      type: "Frontend Development - Web App",
      icon: Code2,
    },
  ];

  return (
    <section ref={ref} className="w-full py-8 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            Showcasing modern frontend development skills through interactive
            web and mobile applications.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`space-y-4 sm:space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <project.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <motion.div
                  className="aspect-video rounded-xl overflow-hidden flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="object-contain max-w-full max-h-full"
                    style={{ backgroundColor: "white", padding: "8em" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button size="lg" className="flex items-center space-x-2 mx-auto">
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
