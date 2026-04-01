import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "News Monkey",
    description: "A fully responsive news application consuming live data from an external News API with multi-category navigation, dynamic routing, lazy loading and pagination.",
    tech: ["React.js", "JavaScript", "Bootstrap", "REST API", "React Router"],
    github: "https://github.com/Faizan50518",
  },
  {
    title: "SOC Dashboard",
    description: "Security Operations Center Dashboard with role-based access control, real-time API integration, and interactive data visualizations for cybersecurity operations.",
    tech: ["React.js", "Chart.js", "Material UI", "REST APIs", "RBAC"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <SectionLabel label="Projects" title="Featured" highlight="Work" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 group transition-all duration-500 flex flex-col"
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dim hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-1 rounded"
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
