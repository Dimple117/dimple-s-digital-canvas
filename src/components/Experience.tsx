import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Professional Journey</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        className="rounded-xl bg-surface p-6 card-shadow max-w-2xl"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Briefcase size={18} className="text-primary" />
          </div>
          <div>
            <span className="font-mono text-xs text-muted-foreground">Internship</span>
            <h3 className="text-base font-semibold mt-1">Machine Learning Intern</h3>
            <p className="text-sm text-primary mt-0.5">Prodigy Infotech</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Gaining hands-on experience in machine learning — from data preprocessing to model training
              and evaluation. Actively improving knowledge in Python, PyTorch, and real-world ML pipelines.
            </p>
            <span className="inline-block mt-4 font-mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary">
              Fresher — Eager to Grow
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
