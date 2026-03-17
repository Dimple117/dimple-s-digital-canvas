import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    {/* Social bar */}
    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        {[
          { icon: Github, label: "GITHUB", href: "https://github.com/Dimple117" },
          { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com/in/dimple-c-r" },
          { icon: Mail, label: "EMAIL", href: "mailto:dimplecr07@gmail.com" },
        ].map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon size={14} />
            <span className="font-mono text-[10px] uppercase tracking-widest">{label}</span>
          </motion.a>
        ))}
      </div>
      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
        dimplecr07@gmail.com
      </p>
    </div>

    {/* Bottom */}
    <div className="border-t border-border px-6 py-4">
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dimple C R — Built with passion & clean code.
      </p>
    </div>
  </footer>
);

export default Footer;
