import { motion } from "framer-motion";
import { Code2, Globe, Server, Box, Brain } from "lucide-react";

const categories = [
  { label: "Programming", icon: Code2, skills: ["Java", "Python"], color: "primary" },
  { label: "Web", icon: Globe, skills: ["HTML", "CSS", "JavaScript"], color: "primary" },
  { label: "Backend & Frameworks", icon: Server, skills: ["Spring Boot", "Hibernate", "JDBC", "JPA"], color: "accent-purple" },
  { label: "Tools", icon: Box, skills: ["Maven", "Docker", "DockerHub", "Spring Tools"], color: "accent-purple" },
  { label: "Domain", icon: Brain, skills: ["Foundational ML"], color: "accent-pink" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const Skills = () => (
  <section id="skills" className="relative py-28 px-6 overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[hsl(var(--accent-purple))]/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative max-w-5xl mx-auto">
      <motion.div {...fade()}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Skills</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Technical <span className="gradient-text">Stack</span>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground max-w-lg">
          Tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            {...fade(0.1 + i * 0.08)}
            className="group relative rounded-2xl bg-surface/80 backdrop-blur-sm border border-border/50 p-7 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-[hsl(var(--accent-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-bold tracking-wide mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-secondary/80 text-muted-foreground border border-border/30 hover:text-foreground hover:border-primary/20 transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
