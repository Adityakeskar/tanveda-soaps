import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      toast({ title: "Input too long", variant: "destructive" });
      return;
    }

    const subject = encodeURIComponent(`Feedback from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:tanvedasoaps@gmail.com?subject=${subject}&body=${body}`, "_self");

    toast({ title: "Opening your email app…" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
          >
            Feedback
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground mb-4"
          >
            We'd Love to Hear from You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg"
          >
            Share your thoughts, suggestions or just say hi!
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            maxLength={100}
            className="w-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            maxLength={255}
            className="w-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={4}
            maxLength={1000}
            className="w-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
          />
          <button
            type="submit"
            className="self-center flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Send <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
