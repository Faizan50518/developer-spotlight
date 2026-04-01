import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Code2, Briefcase, FolderGit2, GraduationCap, Mail, Download, Command } from "lucide-react";

const commands = [
  { icon: User, label: "About Me", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { icon: Code2, label: "Skills & Tech Stack", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { icon: Briefcase, label: "Work Experience", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
  { icon: FolderGit2, label: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { icon: GraduationCap, label: "Education", action: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }) },
  { icon: Mail, label: "Contact Me", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { icon: Download, label: "Download Resume", action: () => { const a = document.createElement("a"); a.href = "/Faizan_Siddiki_Resume.pdf"; a.download = ""; a.click(); } },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggle = useCallback(() => {
    setOpen((p) => !p);
    setQuery("");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[100]"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-[101]"
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
                <Search size={18} className="text-dim" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-foreground text-sm outline-none placeholder:text-dim"
                />
                <kbd className="hidden md:inline-flex text-[10px] text-dim border border-border rounded px-1.5 py-0.5 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="text-sm text-dim text-center py-6">No results found.</p>
                ) : (
                  filtered.map((cmd, i) => (
                    <motion.button
                      key={cmd.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => { cmd.action(); setOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      <cmd.icon size={16} />
                      {cmd.label}
                    </motion.button>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="px-5 py-3 border-t border-border/50 flex items-center gap-2">
                <Command size={12} className="text-dim" />
                <span className="text-[10px] text-dim font-mono">Navigate with ↑↓ · Press Enter to select</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
