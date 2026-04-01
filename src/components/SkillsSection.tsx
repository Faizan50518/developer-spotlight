import { motion } from "framer-motion";
import { Layout, Server, RefreshCw, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    title: "State Management",
    icon: RefreshCw,
    skills: ["Redux Toolkit", "RTK Query", "Redux", "Context API"],
  },
  {
    title: "Auth & Tools",
    icon: ShieldCheck,
    skills: ["JWT", "bcrypt.js", "Axios", "Postman", "Git", "GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <SectionLabel label="Skills" title="Tech" highlight="Stack" />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-500 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon size={18} className="text-primary" />
                <h4 className="font-mono text-primary text-xs uppercase tracking-[0.2em] relative">
                  {cat.title}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-primary/0"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  />
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + j * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
