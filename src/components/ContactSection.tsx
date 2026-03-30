import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionLabel from "./SectionLabel";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto">
          <SectionLabel label="Contact" title="Let's" highlight="Connect" />

          <motion.p
            className="text-muted-foreground mb-10 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm always open to new opportunities. Feel free to reach out!
          </motion.p>

          <div className="flex flex-col items-center gap-3 mb-10">
            {[
              { href: "mailto:faizansiddique38@gmail.com", icon: Mail, text: "faizansiddique38@gmail.com" },
              { href: "tel:+918200204894", icon: Phone, text: "+91 8200204894" },
              { icon: MapPin, text: "Surat, Gujarat, India" },
            ].map((item, i) => {
              const Wrapper = item.href ? motion.a : motion.span;
              return (
                <Wrapper
                  key={item.text}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 px-5 py-3 rounded-xl glass"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                >
                  <item.icon size={18} className="text-primary" />
                  {item.text}
                </Wrapper>
              );
            })}
          </div>

          <div className="flex justify-center gap-4">
            {[
              { href: "https://github.com/Faizan50518", icon: Github },
              { href: "https://linkedin.com/in/faizan-siddique-794364331", icon: Linkedin },
            ].map((social, i) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:glow-border hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
