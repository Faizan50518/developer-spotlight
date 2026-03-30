import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
  title: string;
  highlight: string;
}

const SectionLabel = ({ label, title, highlight }: SectionLabelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-3 mb-4">
        <motion.span
          className="h-px bg-gradient-to-r from-primary to-accent w-0"
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <span className="font-mono text-primary text-xs uppercase tracking-[0.3em] relative">
          {label}
          <motion.span
            className="absolute -bottom-1.5 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary/0 w-0"
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </span>
        <motion.span
          className="h-px bg-gradient-to-l from-primary to-accent w-0"
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-foreground">
        {title} <span className="text-gradient">{highlight}</span>
      </h3>
    </motion.div>
  );
};

export default SectionLabel;
