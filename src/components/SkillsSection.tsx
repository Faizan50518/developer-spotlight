import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "RTK Query", "Redux", "Context API"],
  },
  {
    title: "Auth & Tools",
    skills: ["JWT", "bcrypt.js", "Axios", "Postman", "Git", "GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-widest">// SKILLS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-500"
            >
              <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-4">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
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
