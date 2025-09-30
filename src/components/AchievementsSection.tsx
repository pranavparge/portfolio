import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Award, Trophy, ExternalLink, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function AchievementsSection() {
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

  const achievements = [
    {
      type: "Publication",
      title:
        "1D Convolutional Neural Network for Stock Market Prediction using Tensorflow.js",
      organization:
        "IJISRT (International Journal of Innovative Science and Research Technology)",
      year: "2019",
      description:
        "Research paper on applying deep learning techniques to financial market prediction, demonstrating expertise in machine learning and data science.",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const certifications = [
    {
      title: "Meta Front-End Developer",
      organization: "Meta",
      icon: Award,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "Adobe Experience Manager",
      organization: "Adobe",
      icon: Award,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Udacity Python Foundation",
      organization: "Udacity",
      icon: Award,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Pluralsight Full Stack Developer",
      organization: "Pluralsight",
      icon: Award,
      color: "from-orange-500 to-red-500",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition for technical contributions, research publications, and
            continuous learning through industry-recognized certifications and
            academic achievements.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <motion.h3
            className="text-xl sm:text-2xl mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Research Publications
          </motion.h3>

          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {achievement.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    <h4 className="text-xl mb-2">{achievement.title}</h4>
                    <p className="text-primary font-medium mb-3">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                      onClick={() =>
                        window.open(
                          "https://ijisrt.com/wp-content/uploads/2019/06/IJISRT19JU92.pdf",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Publication</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            className="text-xl sm:text-2xl mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional Certifications
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}
                  >
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl">Commitment to Excellence</h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These achievements reflect my dedication to staying current with
              industry trends, contributing to the academic community, and
              continuously expanding my technical expertise through recognized
              learning platforms and certification programs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
