import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2 tracking-widest">// CONTACT</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h3>
          <p className="text-muted-foreground mb-10">
            I'm always open to new opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <a href="mailto:faizansiddique38@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} className="text-primary" />
              faizansiddique38@gmail.com
            </a>
            <a href="tel:+918200204894" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} className="text-primary" />
              +91 8200204894
            </a>
            <span className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              Surat, Gujarat, India
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Faizan50518"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-border hover:text-primary transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/faizan-siddique-794364331"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-border hover:text-primary transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
