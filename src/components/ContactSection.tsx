import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/60"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            width="100%"
            height="500"
            className="w-full border-0"
            title="Tanveda Feedback Form"
            loading="lazy"
          >
            Loading…
          </iframe>
        </motion.div>
        <p className="text-center font-body text-xs text-muted-foreground mt-4">
          ⚠️ Google Form coming soon — replace the placeholder URL with your form link.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
