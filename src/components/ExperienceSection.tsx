import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Building,
  Calendar,
  ArrowRight,
  Users,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export function ExperienceSection() {
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

  const experiences = [
    {
      company: "KPMG",
      role: "Consultant",
      period: "Dec 2023 - Aug 2024",
      description:
        "Advanced expertise for Maruti Suzuki and KPMG internal projects, leading digital transformation initiatives and enterprise solution architecture.",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      achievements: [
        "Enterprise Solution Architecture",
        "Managed Client Relations",
        "Digital Transformation Projects",
      ],
    },
    {
      company: "Accenture",
      role: "Custom Software Engineering Analyst",
      period: "Nov 2021 - Oct 2023",
      description:
        "Developmet for Emirates Telecom (du) and Philip Morris International, developing scalable custom software solutions in cross-functional teams.",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      achievements: [
        "Custom Software Development",
        "Cross-functional Team Collaboration",
        "Client Solution Delivery",
      ],
    },
    {
      company: "Infosys",
      role: "Systems Engineer",
      period: "Aug 2019 - Nov 2021",
      description:
        "Foundation years working with HSBC and UBS, building core technical skills in enterprise banking and financial technology solutions.",
      icon: Building,
      color: "from-green-500 to-green-600",
      achievements: [
        "Financial Technology Solutions",
        "Enterprise System Maintenance",
      ],
    },
  ];

  return (
    <section ref={ref} className="w-full py-8 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Professional Evolution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous growth through prestigious organizations,
            from foundational systems engineering to strategic consulting,
            building expertise across diverse industries and domains.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on larger screens */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden sm:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-8 sm:mb-16 last:mb-0"
              >
                {/* Timeline dot - Hidden on mobile, visible on larger screens */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background shadow-lg z-10 hidden sm:block`}
                />

                {/* Content - Full width on mobile, with margin on larger screens */}
                <div className="w-full sm:ml-20">
                  <motion.div
                    className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Mobile-first header layout */}
                    <div className="mb-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}
                        >
                          <exp.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl mb-1 leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium text-sm sm:text-base">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Period moved below on mobile for better layout */}
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        <span className="whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Better mobile layout for achievements */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-secondary text-secondary-foreground text-xs sm:text-sm rounded-full leading-tight"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 sm:gap-0">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary sm:mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl lg:text-2xl">
                Industry Impact
              </h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
              Throughout my career, I've had the privilege of working with
              industry leaders like{" "}
              <span className="text-foreground font-medium">HSBC</span>,{" "}
              <span className="text-foreground font-medium">UBS</span>,{" "}
              <span className="text-foreground font-medium">
                Emirates Integrated Telecommunications (du)
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                Philip Morris International
              </span>
              , and <span className="text-foreground font-medium"> Suzuki</span>
              , delivering solutions that drive digital transformation and
              business growth across banking, telecom, consumer goods, and
              automotive sectors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
