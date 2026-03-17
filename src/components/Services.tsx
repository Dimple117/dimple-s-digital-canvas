import { motion } from "framer-motion";
import { Globe, Brain, Container, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "WEB DEVELOPMENT", desc: "Full-stack web applications using modern frameworks like Spring Boot and React." },
  { icon: Brain, title: "MACHINE LEARNING SOLUTIONS", desc: "Data-driven solutions including NLP, speech recognition, and classification models." },
  { icon: Container, title: "DEVOPS ENGINEERING", desc: "Containerization with Docker, CI/CD pipelines, and deployment automation." },
];

const Services = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">— My Services ?</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            WHAT I'M<br />
            <span className="gradient-text">OFFERING</span>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Combining technical expertise with a passion for clean, maintainable solutions across multiple domains.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="group rounded-xl bg-surface p-8 card-shadow transition-all duration-200 hover:card-shadow-hover hover:-translate-y-1 border border-transparent hover:border-primary/20"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-200">
              <s.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-mono text-sm font-bold tracking-wide mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors cursor-pointer">
              READ MORE <ArrowRight size={12} />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
