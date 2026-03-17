import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "NLP / Python",
    title: "Smart Campus Navigation",
    desc: "Semantic intent-based NLP system for easy campus navigation with real-time location-based query awareness.",
    github: "#",
  },
  {
    tag: "PyTorch / ML",
    title: "Speech Emotion Recognition",
    desc: "ML model built with PyTorch that classifies human emotions from audio data using feature extraction techniques.",
    github: "#",
  },
  {
    tag: "Python / Security",
    title: "Steganography Tool",
    desc: "Hides secret messages inside images using encoding/decoding algorithms with a clean interface.",
    github: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Featured Work</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
            className="group rounded-xl bg-surface p-6 card-shadow transition-all duration-200 hover:card-shadow-hover hover:-translate-y-0.5"
          >
            <span className="font-mono text-xs text-primary mb-2 block">{p.tag}</span>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <a
              href={p.github}
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              View Code <ArrowUpRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
