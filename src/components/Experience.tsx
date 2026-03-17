import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="gradient-text">EXPERIENCE</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <div className="rounded-xl bg-surface p-8 card-shadow border border-border hover:border-primary/20 transition-all duration-200">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Briefcase size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold">Machine Learning Intern</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  Job Duration · Recent
                </span>
              </div>
              <p className="text-sm text-primary font-medium mt-1">Prodigy Infotech</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Gaining hands-on experience in machine learning — from data preprocessing to model training
                and evaluation. Actively improving knowledge in Python, PyTorch, and real-world ML pipelines.
              </p>
              <span className="inline-block mt-5 font-mono text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-[hsl(var(--accent-purple))]/10 text-primary border border-primary/20">
                ✨ Fresher — Eager to Grow
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
