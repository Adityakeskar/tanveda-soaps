import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import waterDropletsBg from "@/assets/water-droplets-light.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={waterDropletsBg} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(142_30%_12%/0.7)]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.2em] uppercase text-white/60 mb-3"
        >
          Feedback
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-white mb-4"
        >
          We'd Love to Hear from You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl leading-relaxed text-white/70 mb-8"
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
