import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Brain, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    id: "1",
    title: "Senior Backend Engineer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: "Lead backend development for microservices architecture serving 1M+ users. Implemented ML pipelines and optimized system performance by 40%.",
    technologies: ["Python", "FastAPI", "AWS"],
  },
  {
    id: "2",
    title: "ML Engineer",
    company: "AI Innovations Lab",
    period: "2022 - 2023",
    description: "Developed and deployed ML models for computer vision and NLP applications. Built scalable training pipelines and model serving infrastructure.",
    technologies: ["PyTorch", "TensorFlow", "Docker"],
  },
  {
    id: "3",
    title: "Software Developer",
    company: "StartupXYZ",
    period: "2021 - 2022",
    description: "Full-stack development with focus on backend APIs and database optimization. Contributed to product growth from MVP to 10k+ active users.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
  },
];

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Server className="text-primary" />,
    skills: [
      { name: "Python/FastAPI", level: 95 },
      { name: "Java/Spring Boot", level: 90 },
      { name: "Database Design", level: 92 },
      { name: "API Architecture", level: 94 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="text-purple-500" />,
    skills: [
      { name: "Deep Learning", level: 88 },
      { name: "NLP/Transformers", level: 85 },
      { name: "Computer Vision", level: 78 },
      { name: "GenAI/LLMs", level: 87 },
    ],
  },
];

const achievements = [
  "Optimized ML model inference by 60% using advanced compression techniques",
  "Built scalable backend systems handling 1M+ requests per day",
  "Published research on neural network optimization techniques",
  "Led team of 5 developers in successful project delivery",
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="experience-title">
            Experience & Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey, key milestones, and the experiences that
            shaped my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8" data-testid="experience-timeline-title">
              Professional Experience
            </h3>
            <div className="relative border-l-2 border-border pl-8 space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="timeline-item relative"
                  data-testid={`experience-${experience.id}`}
                >
                  <Card className="bg-card border border-border shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold">{experience.title}</h4>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-3">{experience.company}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8" data-testid="core-competencies-title">
              Core Competencies
            </h3>

            {/* Skills Categories */}
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.2 }}
                >
                  <Card className="bg-card border border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        {category.title}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{skill.name}</span>
                              <span className="text-muted-foreground">
                                {skill.level >= 90 ? "Expert" : 
                                 skill.level >= 80 ? "Advanced" : "Intermediate"}
                              </span>
                            </div>
                            <div className="bg-muted rounded-full h-2">
                              <motion.div
                                className="bg-primary h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={
                                  isInView ? { width: `${skill.level}%` } : { width: 0 }
                                }
                                transition={{
                                  duration: 1,
                                  delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                                }}
                                data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Card className="bg-card border border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <Trophy className="text-yellow-500 mr-3" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      {achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          className="flex items-start"
                          data-testid={`achievement-${index}`}
                        >
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
