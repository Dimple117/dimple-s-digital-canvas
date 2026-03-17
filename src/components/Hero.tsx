import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Web Developer", "ML Enthusiast", "DevOps Learner"];

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
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-20">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="shrink-0"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-1 ring-foreground/10 ring-offset-4 ring-offset-background">
            <img src={profileImg} alt="Dimple C R" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="text-center md:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Aspiring Engineer
          </p>
          <h1 className="text-4xl md:text-[3.5rem] font-semibold tracking-tight text-balance leading-tight">
            Dimple C R
          </h1>
          <div className="mt-3 h-7 text-lg text-muted-foreground font-medium">
            <span>{text}</span>
            <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 animate-pulse align-middle" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-lg leading-relaxed">
            Passionate about building systems that solve human problems. I combine web development,
            machine learning, and DevOps to create technology that makes life simpler and more efficient.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary/80 active:scale-[0.98]"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
