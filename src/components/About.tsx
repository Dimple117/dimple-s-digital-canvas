import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { year: "2021–Present", title: "B.E. Computer Science", place: "ATME College of Engineering", detail: "CGPA 8.53/10.0 (5th Semester)" },
  { year: "2019–2021", title: "Pre-University (PU)", place: "Marimallappa PU College", detail: "Science Stream" },
  { year: "2019", title: "High School", place: "Marimallappa High School", detail: "Completed Secondary Education" },
];

const ease = [0.2, 0, 0, 1] as const;
const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.4, ease: ease as unknown as [number, number, number, number] },
};

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div {...fade}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">About</p>
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Who I Am</h2>
      </motion.div>

      <motion.p {...fade} className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-16">
        I'm a Computer Science student driven by curiosity and a desire to create meaningful technology.
        My goal is to become an engineer who builds impactful solutions — tools that reduce human stress and
        solve real-world problems. I believe the best software comes from understanding people first, then
        writing code.
      </motion.p>

      {/* Timeline */}
      <motion.div {...fade}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Education</p>
      </motion.div>

      <div className="relative pl-8 border-l border-border">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
            className="relative mb-10 last:mb-0"
          >
            {/* Node */}
            <div className="absolute -left-[calc(1rem+4.5px)] top-1 w-2 h-2 rounded-full bg-background ring-2 ring-primary" />
            <span className="font-mono text-xs text-muted-foreground tabular-nums">{edu.year}</span>
            <h3 className="text-base font-semibold mt-1 flex items-center gap-2">
              <GraduationCap size={14} className="text-primary" />
              {edu.title}
            </h3>
            <p className="text-sm text-muted-foreground">{edu.place}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{edu.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
