import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionLabel from "./SectionLabel";

const experiences = [
  {
    title: "React.js Developer",
    company: "BIGSCAL TECHNOLOGIES Pvt. Ltd., Surat",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Develop scalable, high-performance web applications using React.js, JavaScript (ES6+), and TypeScript.",
      "Architect reusable UI component libraries, reducing development time across multiple projects.",
      "Integrate REST APIs with frontend for real-time dynamic data rendering and seamless UX.",
      "Collaborate with cross-functional teams (backend, design, QA) to ship production-ready features.",
    ],
  },
  {
    title: "React Developer (Trainee)",
    company: "BIGSCAL TECHNOLOGIES Pvt. Ltd., Surat",
    period: "Jun 2025 – Nov 2025",
    points: [
      "Implemented React components, hooks, and routing architecture.",
      "Built responsive layouts using Tailwind CSS and Bootstrap following mobile-first design principles.",
      "Debugged and resolved UI issues, contributing to measurable improvements in load performance.",
      "Practiced clean code standards and version control workflows using Git and GitHub.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "TeamKoder Infotech, Surat",
    period: "Jan 2025 – May 2025",
    points: [
      "Built a Security Operations Center (SOC) Dashboard using React.js.",
      "Implemented role-based access control (RBAC) dashboards for Admin and Employee user types.",
      "Integrated real-time backend APIs to display live system activity and security event data.",
      "Built interactive data visualizations using Chart.js and Material UI.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <SectionLabel label="Experience" title="Work" highlight="History" />

        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            >
              {/* Dot */}
              <motion.div
                className="absolute left-2.5 md:left-4.5 top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.2, type: "spring" }}
                whileHover={{ scale: 1.5 }}
              />

              <motion.div
                className="glass rounded-xl p-6 hover:glow-border transition-all duration-500"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Briefcase size={14} className="text-primary" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <motion.li
                      key={j}
                      className="text-sm text-muted-foreground flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                    >
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
