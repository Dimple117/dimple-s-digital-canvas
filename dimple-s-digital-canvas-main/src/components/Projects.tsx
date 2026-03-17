import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    num: "01",
    tag: "NLP / Python",
    title: "Smart Campus Navigation",
    desc: "Semantic intent-based NLP system for easy campus navigation with real-time location-based query awareness.",
    tech: ["Python", "NLP", "Intent Recognition"],
    github: "#",
  },
  {
    num: "02",
    tag: "PyTorch / ML",
    title: "Speech Emotion Recognition",
    desc: "ML model built with PyTorch that classifies human emotions from audio data using feature extraction techniques.",
    tech: ["PyTorch", "Python", "Audio Processing"],
    github: "#",
  },
  {
    num: "03",
    tag: "Python / Security",
    title: "Steganography Tool",
    desc: "Hides secret messages inside images using encoding/decoding algorithms with a clean interface.",
    tech: ["Python", "Image Processing", "Cryptography"],
    github: "#",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const Projects = () => (
  <section id="projects" className="relative py-28 px-6 overflow-hidden">
    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[hsl(var(--accent-pink))]/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative max-w-5xl mx-auto">
      <motion.div {...fade()} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Projects</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          A selection of projects showcasing my skills in ML, NLP, and security.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            {...fade(0.1 + i * 0.1)}
            className="group relative rounded-2xl bg-surface/80 backdrop-blur-sm border border-border/50 p-7 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 flex flex-col"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-[hsl(var(--accent-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative flex flex-col flex-1">
              {/* Number + tag row */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-bold text-border/60 group-hover:text-primary/20 transition-colors font-mono">{p.num}</span>
                <span className="font-mono text-[10px] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">{p.tag}</span>
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover:text-foreground transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/30">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 group/link"
              >
                <Sparkles size={12} className="text-primary" />
                View Code
                <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
