import { motion } from "framer-motion";
import { Globe, Brain, Container, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Full-stack web applications using modern frameworks like Spring Boot and React.", num: "01" },
  { icon: Brain, title: "Machine Learning", desc: "Data-driven solutions including NLP, speech recognition, and classification models.", num: "02" },
  { icon: Container, title: "DevOps Engineering", desc: "Containerization with Docker, CI/CD pipelines, and deployment automation.", num: "03" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const Services = () => (
  <section id="services" className="relative py-28 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

    <div className="relative max-w-5xl mx-auto">
      <motion.div {...fade()} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Services</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I'm<br />
            <span className="gradient-text">Offering</span>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Combining technical expertise with a passion for clean, maintainable solutions across multiple domains.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...fade(0.1 + i * 0.1)}
            className="group relative rounded-2xl bg-surface/80 backdrop-blur-sm border border-border/50 p-8 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-[hsl(var(--accent-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                  <s.icon size={22} className="text-primary" />
                </div>
                <span className="text-2xl font-bold text-border/40 font-mono group-hover:text-primary/20 transition-colors">{s.num}</span>
              </div>

              <h3 className="text-base font-bold tracking-wide mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors cursor-pointer">
                Learn More <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
