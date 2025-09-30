import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-8 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Educational Journey
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My academic journey spans from foundational computer engineering
                principles to advanced software engineering practices, building
                a strong theoretical foundation alongside practical industry
                experience.
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">
                    Master's in Software Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    University of Limerick (2024-2025) - Software Design,
                    Software Architecture, Concurrency & Parallelism, Data
                    Mining, Big Data Analysis & Visualizations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">
                    Bachelor's in Computer Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    Savitribai Phule Pune University (2016-2019) - Object
                    Oriented Programming, Data Structure and Algorithms,
                    Database, Operating Systems, Machine Learning, Artificial
                    Intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Based in Ireland</h3>
                  <p className="text-muted-foreground">
                    Contributing to Ireland's vibrant technology ecosystem with
                    advanced software engineering expertise, open to relocation
                    opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/5] relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="../../assets/ul.jpg"
                alt="University of Limerick"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-2xl mb-1">2025</p>
              <p className="text-sm text-muted-foreground">
                University of Limerick
              </p>
              <p className="text-sm text-muted-foreground">Master's Graduate</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
