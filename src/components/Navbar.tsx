import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "My Projects", desc: "See all the projects I have done", href: "#projects" },
  { label: "About Me", desc: "Learn about myself & what I do", href: "#about" },
  { label: "Contact Me", desc: "dimplecr07@gmail.com", href: "#contact" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-background/80 backdrop-blur-md card-shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-foreground font-bold text-lg tracking-tight">
          it's <span className="gradient-text">me</span>
        </a>

        {/* Desktop - rich nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group text-left"
            >
              <span className="text-sm font-medium text-primary group-hover:text-foreground transition-colors duration-200 flex items-center gap-1">
                {l.label}
                <span className="text-[10px] text-muted-foreground">●</span>
              </span>
              <span className="text-[10px] text-muted-foreground group-hover:text-muted transition-colors">
                {l.desc}
              </span>
            </a>
          ))}
        </div>

        {/* Simple nav for medium screens */}
        <div className="hidden md:flex lg:hidden items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
