import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "Python", color: "text-yellow-500", icon: "🐍" },
  { name: "Java", color: "text-red-500", icon: "☕" },
  { name: "Spring", color: "text-green-500", icon: "🍃" },
  { name: "SQL", color: "text-blue-500", icon: "🗄️" },
  { name: "Docker", color: "text-blue-400", icon: "🐳" },
  { name: "AI/ML", color: "text-purple-500", icon: "🧠" },
];

const skills = [
  { name: "Backend Development", percentage: 95, color: "bg-primary" },
  { name: "AI/ML & Data Science", percentage: 88, color: "bg-purple-500" },
  { name: "Cloud & DevOps", percentage: 82, color: "bg-green-500" },
  { name: "System Architecture", percentage: 90, color: "bg-blue-500" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="about-title">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know more about my background, skills, and what drives my
            passion for technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6" data-testid="about-journey-title">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Backend Engineer with a deep passion for
                artificial intelligence and machine learning. My journey in
                technology began with curiosity about how complex systems work
                behind the scenes.
              </p>
              <p>
                With expertise in Python, Java, and Spring Boot, I've built
                scalable backend architectures that power modern applications.
                My fascination with AI/ML drives me to explore generative AI,
                deep learning, and their practical applications in solving
                real-world problems.
              </p>
              <p>
                I believe in clean code, efficient algorithms, and the power of
                continuous learning. When I'm not coding, you'll find me
                exploring the latest research papers or contributing to
                open-source projects.
              </p>
            </div>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6" data-testid="about-tech-title">
              Technologies & Skills
            </h3>

            {/* Tech Stack Icons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="tech-icon text-center"
                  data-testid={`tech-${tech.name.toLowerCase()}`}
                >
                  <div className={`text-4xl mb-2 ${tech.color}`}>
                    <span className="text-4xl">{tech.icon}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tech.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Skill Progress Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar bg-muted rounded-full h-2">
                    <motion.div
                      className={`${skill.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${skill.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      data-testid={`skill-progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
