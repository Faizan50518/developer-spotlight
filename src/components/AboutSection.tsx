import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-widest">// ABOUT ME</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Results-driven React.js Developer with hands-on experience building scalable, responsive web applications using the MERN stack. Proficient in modern JavaScript (ES6+), component-based architecture, REST API integration, and performance optimization. Passionate about delivering clean, maintainable code and intuitive user interfaces.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-dim">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Surat, Gujarat
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-primary" /> +91 8200204894
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
