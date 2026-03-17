import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight mb-12">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground card-shadow outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground card-shadow outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <textarea
              placeholder="Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground card-shadow outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              <Send size={14} /> Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Feel free to reach out for collaborations, opportunities, or just to say hello.
              </p>
            </div>
            <a
              href="mailto:dimplecr07@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} className="text-primary" /> dimplecr07@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/dimple-c-r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={16} className="text-primary" /> Dimple C R
            </a>
            <a
              href="https://github.com/Dimple117"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} className="text-primary" /> Dimple117
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
