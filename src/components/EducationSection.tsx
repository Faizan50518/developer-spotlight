import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionLabel from "./SectionLabel";

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
        <SectionLabel label="Education" title="Academic" highlight="Background" />

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-500 group"
              whileHover={{ y: -4 }}
            >
              <motion.div whileHover={{ rotate: 10 }} className="inline-block">
                <GraduationCap size={24} className="text-primary mb-3" />
              </motion.div>
              <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
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
