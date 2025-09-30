import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export function ContactSection() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "pranavparge@gmail.com",
      href: "mailto:pranavparge@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+353 (89) 493 1355",
      href: "tel:+353894931355",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pranavparge",
      href: "https://linkedin.com/in/pranavparge",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pranavparge",
      href: "https://github.com/pranavparge",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Limerick, Ireland",
      href: null,
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-secondary/10"
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Open to exciting opportunities in software development, consulting,
            and technology innovation. Let's connect and explore how we can
            create impactful solutions together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl mb-6">Get In Touch</h3>
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-foreground hover:text-primary transition-colors"
                        target={
                          method.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          method.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{method.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h4 className="text-xl mb-4">What I'm Looking For</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Full-time software engineering positions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Internship and graduate programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Collaborative project opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Mentorship and networking</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
