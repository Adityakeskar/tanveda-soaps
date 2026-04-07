import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(142 20% 18%), hsl(150 18% 22%), hsl(140 22% 16%))' }}>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
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
          className="text-body-lg mb-8"
        >
          Share your thoughts, suggestions or just say hi!
        </motion.p>

        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLScOO-lU33igK_m223IaGB5mqjI9e2Y9EA7r8XLyLBwjWvEGZA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <MessageSquare className="w-5 h-5" />
          Share Your Feedback
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
