import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import SectionLabel from "./SectionLabel";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel label="About Me" title="Crafting Digital" highlight="Experiences" />

          <motion.p
            className="text-muted-foreground leading-relaxed mb-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Results-driven React.js Developer with hands-on experience building scalable, responsive web applications using the MERN stack. Proficient in modern JavaScript (ES6+), component-based architecture, REST API integration, and performance optimization. Passionate about delivering clean, maintainable code and intuitive user interfaces.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-6 text-sm text-dim"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
            >
              <MapPin size={16} className="text-primary" /> Surat, Gujarat
            </motion.span>
            <motion.span
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={16} className="text-primary" /> +91 8200204894
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
