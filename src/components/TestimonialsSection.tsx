import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Senior Developer, BIGSCAL Technologies",
    text: "Faizan is an exceptionally talented React developer. His ability to translate complex designs into pixel-perfect, performant code is remarkable. He consistently delivers high-quality work ahead of schedule.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Project Manager, TeamKoder Infotech",
    text: "Working with Faizan on the SOC Dashboard was a great experience. He brought innovative solutions to complex UI challenges and his code quality was outstanding. A true team player with excellent communication skills.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Tech Lead, BIGSCAL Technologies",
    text: "Faizan's understanding of modern React patterns, state management, and component architecture is impressive for his experience level. He quickly became a key contributor to our frontend team.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionLabel label="Testimonials" title="What People" highlight="Say" />

        <div className="max-w-2xl mx-auto mt-12 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <Quote size={32} className="text-primary/30 mb-4" />

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg italic mb-6">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>

              <div>
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-dim">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => navigate(1)}
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
