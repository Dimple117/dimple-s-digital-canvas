import { motion } from "framer-motion";
import { Code2, Globe, Server, Box, Brain } from "lucide-react";

const categories = [
  {
    label: "Programming",
    icon: Code2,
    skills: ["Java", "Python"],
  },
  {
    label: "Web",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    label: "Backend & Frameworks",
    icon: Server,
    skills: ["Spring Boot", "Hibernate", "JDBC", "JPA"],
  },
  {
    label: "Tools",
    icon: Box,
    skills: ["Maven", "Docker", "DockerHub", "Spring Tools"],
  },
  {
    label: "Domain",
    icon: Brain,
    skills: ["Foundational ML"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Skills</p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Technical Stack</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
            className="group rounded-xl bg-surface p-6 card-shadow transition-all duration-200 hover:card-shadow-hover hover:-translate-y-0.5"
          >
            <cat.icon size={18} className="text-primary mb-3" />
            <h3 className="text-sm font-semibold mb-3">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
