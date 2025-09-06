import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Eye, FileText, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import resumePdf from "@assets/YASH_JAIN_RESUME_1757158197983.pdf";

const resumeHighlights = [
  {
    icon: <FileText className="text-primary" />,
    title: "Professional Summary",
    description: "Dynamic Computer Science graduate with expertise in Software Development, ML, DL, and GenAI"
  },
  {
    icon: <Calendar className="text-green-500" />,
    title: "Current Education",
    description: "Bachelor of Technology in Computer Science at Jain University (2022-Present)"
  },
  {
    icon: <MapPin className="text-blue-500" />,
    title: "Location",
    description: "Bangalore, Karnataka, India"
  }
];

const keySkills = [
  "Python", "Java", "C++", "SQL", "Machine Learning", "Deep Learning", 
  "GenAI", "Data Engineering", "Cloud Technologies", "FastAPI"
];

const recentExperience = [
  {
    title: "Data Analyst Intern",
    company: "UptoSkills",
    period: "Jan 2025 – April 2025",
    achievements: ["Enhanced reporting efficiency by 25%", "Built interactive dashboards"]
  },
  {
    title: "SQL Intern", 
    company: "HubbleMind Pvt Ltd",
    period: "Oct 2024 – Nov 2024",
    achievements: ["Reduced SQL execution time by 20%", "Increased data processing efficiency by 15%"]
  }
];

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Yash_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="resume-title">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Download my complete resume or view it online to learn more about my
            qualifications, experience, and achievements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card border border-border shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2" data-testid="resume-document-title">
                    Yash Jain Resume
                  </h3>
                  <p className="text-muted-foreground">
                    Computer Science Graduate | Backend Engineer | AI/ML Enthusiast
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>7339615381</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>jhotayash@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Bangalore, Karnataka</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleView}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:transform hover:scale-105"
                    data-testid="resume-view-button"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Resume
                  </Button>
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="flex-1 border border-border hover:bg-accent transition-all duration-300 hover:transform hover:scale-105"
                    data-testid="resume-download-button"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6" data-testid="resume-highlights-title">
                Resume Highlights
              </h3>
              <div className="space-y-6">
                {resumeHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex space-x-4"
                    data-testid={`resume-highlight-${index}`}
                  >
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="font-semibold mb-4">Key Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {keySkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    data-testid={`resume-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Recent Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h4 className="font-semibold mb-4">Recent Experience</h4>
              <div className="space-y-4">
                {recentExperience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                    data-testid={`resume-experience-${index}`}
                  >
                    <h5 className="font-medium">{exp.title}</h5>
                    <p className="text-primary text-sm">{exp.company}</p>
                    <p className="text-muted-foreground text-xs mb-2">{exp.period}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}