import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Sarvajanik University (SECT), Surat, Gujarat",
    period: "2023 – 2025",
    grade: "CGPA: 9.2",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "SMT. Z. S. Patel College, VNSGU, Surat",
    period: "2020 – 2023",
    grade: "CGPA: 7.2",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-widest">// EDUCATION</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Academic <span className="text-gradient">Background</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-500"
            >
              <GraduationCap size={24} className="text-primary mb-3" />
              <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground mb-3">{edu.school}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-dim">{edu.period}</span>
                <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
