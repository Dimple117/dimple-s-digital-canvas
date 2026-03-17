import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const socials = [
  { icon: Mail, label: "Email", value: "dimplecr07@gmail.com", href: "mailto:dimplecr07@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Dimple C R", href: "https://linkedin.com/in/dimple-c-r" },
  { icon: Github, label: "GitHub", value: "Dimple117", href: "https://github.com/Dimple117" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = "w-full rounded-xl bg-secondary/40 border border-border/50 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-200";

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div {...fade()} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))]" />
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Contact</p>
            <span className="w-8 h-[2px] bg-gradient-to-l from-primary to-[hsl(var(--accent-purple))]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            {...fade(0.1)}
            className="md:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-none`}
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--accent-purple))] px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              <Send size={15} />
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div {...fade(0.2)} className="md:col-span-2 space-y-5">
            <div className="rounded-2xl bg-surface/80 backdrop-blur-sm border border-border/50 p-7">
              <div className="flex items-center gap-2.5 mb-5">
                <Sparkles size={14} className="text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">Connect</span>
              </div>

              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/40 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-border/30 flex items-center gap-2.5 text-xs text-muted-foreground">
                <MapPin size={13} className="text-primary/60" />
                Karnataka, India
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
