import { motion } from "framer-motion";
import { GraduationCap, User, Sparkles } from "lucide-react";

const education = [
  { year: "2021–Present", title: "B.E. Computer Science", place: "ATME College of Engineering", detail: "CGPA 8.53/10.0 (5th Semester)" },
  { year: "2019–2021", title: "Pre-University (PU)", place: "Marimallappa PU College", detail: "Science Stream" },
  { year: "2019", title: "High School", place: "Marimallappa High School", detail: "Completed Secondary Education" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const About = () => (
  <section id="about" className="relative py-28 px-6 overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div {...fade()}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">About Me</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Who <span className="gradient-text">I Am</span>
        </h2>
      </motion.div>

      {/* Bio card */}
      <motion.div
        {...fade(0.15)}
        className="mt-10 rounded-2xl bg-surface/80 backdrop-blur-sm border border-border p-8 md:p-10 card-shadow"
      >
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <User size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Dimple C R</h3>
            <p className="text-xs text-muted-foreground font-mono">Computer Science Student</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-[1.8] max-w-2xl">
          I'm a Computer Science student driven by curiosity and a desire to create meaningful technology.
          My goal is to become an engineer who builds <span className="text-foreground font-medium">impactful solutions</span> — tools that reduce human stress and
          solve real-world problems. I believe the best software comes from <span className="text-foreground font-medium">understanding people first</span>, then
          writing code.
        </p>
      </motion.div>

      {/* Education timeline */}
      <motion.div {...fade(0.2)} className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles size={14} className="text-primary" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Education Journey</p>
        </div>
      </motion.div>

      <div className="relative pl-8 border-l-2 border-border/50">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            {...fade(0.25 + i * 0.1)}
            className="relative mb-10 last:mb-0 group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[calc(1rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-background ring-2 ring-primary group-hover:ring-[hsl(var(--accent-purple))] transition-colors duration-300" />

            <div className="rounded-xl bg-surface/60 border border-border/50 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-surface">
              <span className="font-mono text-[11px] text-primary tabular-nums font-medium">{edu.year}</span>
              <h3 className="text-base font-bold mt-1.5 flex items-center gap-2">
                <GraduationCap size={15} className="text-primary" />
                {edu.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{edu.place}</p>
              <p className="text-xs text-muted-foreground/70 mt-1 font-mono">{edu.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
