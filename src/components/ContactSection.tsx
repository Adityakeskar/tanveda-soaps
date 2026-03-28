import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);

    // For now, simulate send — real email will use Lovable Cloud
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
          >
            Reach Out
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground"
          >
            We'd Love to Hear from You
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-10"
        >
          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-6 justify-center">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-display text-base font-semibold text-foreground">Email</p>
                <p className="font-body text-sm text-muted-foreground">tanvedasoaps@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-display text-base font-semibold text-foreground">Location</p>
                <p className="font-body text-sm text-muted-foreground">Handmade in India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 card-organic flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="font-body text-sm font-medium text-foreground mb-1 block">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-sm font-medium text-foreground mb-1 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                maxLength={255}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-body text-sm font-medium text-foreground mb-1 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                rows={4}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us what you're looking for…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-body font-medium px-8 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
