import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <img src={logo} alt="FS Logo" width={80} height={80} className="mx-auto drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-[0.3em] uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Faizan</span>{" "}
            <span className="text-gradient glow-text">Siddiki</span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            React.js Developer · MERN Stack Developer
          </motion.p>
          <motion.p
            className="text-sm text-dim max-w-xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building scalable, responsive web applications with clean code and intuitive interfaces.
          </motion.p>

          {/* Resume button */}
          <motion.a
            href="/Faizan_Siddiki_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 mb-8 relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
            <Download size={18} className="relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { href: "https://github.com/Faizan50518", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/faizan-siddique-794364331", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:faizansiddique38@gmail.com", icon: Mail, label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono text-dim tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
