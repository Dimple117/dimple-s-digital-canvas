import { motion } from "framer-motion";
import { Globe, Brain, Container } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Full-stack web applications using modern frameworks like Spring Boot and React." },
  { icon: Brain, title: "Machine Learning", desc: "Data-driven solutions including NLP, speech recognition, and classification models." },
  { icon: Container, title: "DevOps Engineering", desc: "Containerization with Docker, CI/CD pipelines, and deployment automation." },
];

const Services = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Services</p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">What I Offer</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
            className="rounded-xl bg-surface p-6 card-shadow transition-all duration-200 hover:card-shadow-hover hover:-translate-y-0.5"
          >
            <s.icon size={20} className="text-primary mb-4" />
            <h3 className="text-base font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
