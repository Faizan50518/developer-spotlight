import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-16 border-t border-border bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="FS Logo" width={28} height={28} loading="lazy" />
            <span className="text-lg font-bold text-gradient font-mono">&lt;FS /&gt;</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            React.js Developer focused on building beautiful, scalable web applications with modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4">Connect</h4>
          <div className="flex gap-3">
            {[
              { href: "https://github.com/Faizan50518", icon: Github },
              { href: "https://linkedin.com/in/faizan-siddique-794364331", icon: Linkedin },
              { href: "mailto:faizansiddique38@gmail.com", icon: Mail },
            ].map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass hover:glow-border hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-dim mt-4">faizansiddique38@gmail.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-dim">
          © 2026 Faizan Siddiki. All rights reserved.
        </p>
        <p className="text-xs text-dim flex items-center gap-1">
          Built with <Heart size={12} className="text-primary" /> using <span className="text-primary">React</span> & <span className="text-primary">TypeScript</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
