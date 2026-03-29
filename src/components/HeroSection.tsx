import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Faizan</span>{" "}
            <span className="text-gradient glow-text">Siddiki</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3">
            React.js Developer · MERN Stack Developer
          </p>
          <p className="text-sm text-dim max-w-xl mx-auto mb-8">
            Building scalable, responsive web applications with clean code and intuitive interfaces.
          </p>

          {/* Resume button */}
          <a
            href="/Faizan_Siddiki_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 mb-8"
          >
            <Download size={18} />
            Download Resume
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/Faizan50518"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/faizan-siddique-794364331"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:faizansiddique38@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
