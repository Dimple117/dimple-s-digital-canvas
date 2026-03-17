import { Github, Linkedin, Mail, Heart } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/Dimple117" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/dimple-c-r" },
  { icon: Mail, label: "Email", href: "mailto:dimplecr07@gmail.com" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-surface/30">
    <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold gradient-text">DCR</span>
        <span className="text-xs text-muted-foreground">·</span>
        <span className="text-xs text-muted-foreground">dimplecr07@gmail.com</span>
      </div>

      <div className="flex items-center gap-3">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-lg border border-border/50 bg-surface/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>

    <div className="border-t border-border/30 px-6 py-4">
      <p className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
        © {new Date().getFullYear()} Dimple C R — Built with <Heart size={10} className="text-[hsl(var(--accent-pink))]" /> & clean code
      </p>
    </div>
  </footer>
);

export default Footer;
