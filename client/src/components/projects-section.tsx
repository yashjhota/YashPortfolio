import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCategory = "all" | "ai-ml" | "backend" | "fullstack" | "research";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "AI Sentiment Analysis Platform",
    description: "Real-time sentiment analysis using transformer models with FastAPI backend and interactive dashboard.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "ai-ml",
    technologies: ["Python", "FastAPI", "Transformers", "PyTorch"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Scalable E-commerce Backend",
    description: "Microservices architecture with Spring Boot, handling 10k+ concurrent users with Redis caching and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "backend",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Real-time Analytics Dashboard",
    description: "Full-stack application with React frontend, Python backend, and real-time data visualization using WebSockets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "fullstack",
    technologies: ["React", "Python", "FastAPI", "WebSockets"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "Generative AI Content Creator",
    description: "Advanced generative AI platform using transformer models for automated content creation and optimization.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "ai-ml",
    technologies: ["Python", "Transformers", "TensorFlow", "OpenAI API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "5",
    title: "ML Model Optimization Research",
    description: "Research on neural network compression techniques achieving 90% size reduction with minimal accuracy loss.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "research",
    technologies: ["Python", "PyTorch", "Jupyter", "Research"],
    paperUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "Cloud-Native API Gateway",
    description: "High-performance API gateway with rate limiting, authentication, and load balancing for microservices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "backend",
    technologies: ["Go", "Docker", "Kubernetes", "Redis"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const filterButtons = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "research", label: "Research" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my latest work showcasing expertise in backend development,
            AI/ML, and full-stack solutions.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((button) => (
            <Button
              key={button.id}
              variant={activeFilter === button.id ? "default" : "outline"}
              onClick={() => setActiveFilter(button.id as ProjectCategory)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === button.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              data-testid={`filter-${button.id}`}
            >
              {button.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <Card className="project-card bg-card rounded-xl shadow-lg overflow-hidden border border-border h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    data-testid={`project-image-${project.id}`}
                  />
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:transform hover:scale-105"
                        data-testid={`project-demo-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.paperUrl && (
                      <Button
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:transform hover:scale-105"
                        data-testid={`project-paper-${project.id}`}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Paper
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        className="flex-1 border border-border hover:bg-accent transition-all duration-300"
                        data-testid={`project-github-${project.id}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="bg-muted hover:bg-accent text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
            data-testid="load-more-projects"
          >
            Load More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
