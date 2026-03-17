import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Web Developer", "ML Enthusiast", "DevOps Learner"];

const marqueeItems = [
  "WEB DEVELOPMENT",
  "MACHINE LEARNING",
  "SPRING BOOT",
  "PYTHON",
  "DOCKER",
  "JAVA",
  "NLP",
  "DEVOPS",
  "PYTORCH",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <>
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[hsl(var(--accent-purple))]/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[hsl(var(--accent-pink))]/5 rounded-full blur-[80px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">
          {/* Left: Text content */}
          <div>
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-2xl">👋</span>
              <span className="text-muted-foreground text-sm">Hello! I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="gradient-text">Dimple</span>{" "}
              <span className="text-foreground">C R</span>
            </motion.h1>

            {/* Subtitle with typing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-4 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
              <span className="text-lg text-muted-foreground font-medium">
                {text}
                <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-6 text-sm text-muted-foreground max-w-md leading-relaxed"
            >
              I'm a <span className="text-foreground font-medium">Computer Science student</span>,
              aspiring engineer & human who loves building tech that reduces stress and helps society.
            </motion.p>

            {/* Bullet points */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="mt-6 space-y-2.5"
            >
              {[
                "Building systems that solve human problems",
                "Clean code & scalable architecture",
                "Always learning, always shipping",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))] px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                Let's Talk
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-hover hover:border-muted active:scale-[0.98]"
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-8 flex items-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/Dimple117", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/dimple-c-r", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dimplecr07@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden md:flex justify-center"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] rounded-full border border-border/30 absolute" />
              <div className="w-[400px] h-[400px] rounded-full border border-border/15 absolute" />
            </div>

            {/* Gradient glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-primary/20 via-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/10 rounded-full blur-[40px]" />

            {/* Profile image */}
            <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden ring-2 ring-border">
              <img
                src={profileImg}
                alt="Dimple C R"
                className="w-full h-full object-cover object-[center_8%] scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute bottom-8 right-8 lg:right-4 bg-surface/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 card-shadow"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-primary" />
                <span className="text-xs font-medium">CGPA 8.53</span>
              </div>
            </motion.div>

            {/* Floating dot accent */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-12 w-3 h-3 rounded-full bg-primary glow-primary"
            />
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-8 w-2 h-2 rounded-full bg-[hsl(var(--accent-purple))] glow-purple"
            />
          </motion.div>
        </div>
      </section>

      {/* Marquee skills ticker */}
      <div className="relative border-y border-border bg-surface/50 py-4 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 mx-6 whitespace-nowrap">
              <Sparkles size={12} className="text-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
