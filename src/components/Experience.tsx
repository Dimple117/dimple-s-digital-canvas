import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const Experience = () => (
  <section id="experience" className="relative py-28 px-6 overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[hsl(var(--accent-purple))]/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative max-w-5xl mx-auto">
      <motion.div {...fade()} className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Experience</p>
          <span className="w-8 h-[2px] bg-gradient-to-l from-primary to-[hsl(var(--accent-purple))]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Professional <span className="gradient-text">Journey</span>
        </h2>
      </motion.div>

      <motion.div {...fade(0.15)} className="max-w-2xl mx-auto">
        <div className="group relative rounded-2xl bg-surface/80 backdrop-blur-sm border border-border/50 p-8 md:p-10 transition-all duration-300 hover:border-primary/30">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-[hsl(var(--accent-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-[hsl(var(--accent-purple))]/15 flex items-center justify-center shrink-0 border border-primary/10">
                <Briefcase size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-bold">Machine Learning Intern</h3>
                    <p className="text-sm text-primary font-semibold mt-1">Prodigy Infotech</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                    <Sparkles size={10} />
                    Recent
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary/60" /> 2024</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-primary/60" /> Remote</span>
                </div>

                <p className="text-sm text-muted-foreground mt-5 leading-[1.8]">
                  Gaining hands-on experience in machine learning — from data preprocessing to model training
                  and evaluation. Actively improving knowledge in <span className="text-foreground font-medium">Python, PyTorch</span>, and real-world ML pipelines.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "PyTorch", "Data Preprocessing", "Model Training"].map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-secondary/60 text-muted-foreground border border-border/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border/30">
                  <span className="inline-flex items-center gap-2 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-muted-foreground">Fresher — Eager to Grow & Contribute</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
